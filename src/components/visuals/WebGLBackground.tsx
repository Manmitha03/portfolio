"use client"

import { useEffect, useRef } from "react"

export function WebGLBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext("webgl")
        if (!gl) {
            console.error("WebGL not supported")
            return
        }

        // Shader Sources
        const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `

        // Fragment Shader: Adjusted for Blue/Black theme
        const fsSource = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;

      // Simplex Noise function
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;
        
        // Mouse influence
        vec2 mouse = uMouse / uResolution;
        float dist = distance(st, mouse);
        
        // Create layering of noise
        float n = snoise(vec2(st.x * 1.5 + uTime * 0.1, st.y * 1.5 - uTime * 0.05));
        n += 0.5 * snoise(vec2(st.x * 5.0 - uTime * 0.2, st.y * 5.0 + uTime * 0.1));
        
        // Deform based on mouse
        n += 0.2 * smoothstep(0.5, 0.0, dist);

        // Color mapping (Dark theme with Blue Accent)
        vec3 color = vec3(0.02, 0.02, 0.02); // Base dark
        
        // Mix in grey/white smoke
        float alpha = smoothstep(0.3, 0.7, n);
        color = mix(color, vec3(0.15), alpha);
        
        // Mix in subtle BLUE accent based on noise peaks (Changed from Red)
        float accent = smoothstep(0.7, 1.0, n);
        color = mix(color, vec3(0.1, 0.4, 0.9), accent * 0.3); // Blue-ish

        gl_FragColor = vec4(color, 1.0);
      }
    `

        function createShader(gl: WebGLRenderingContext, type: number, source: string) {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader))
                gl.deleteShader(shader)
                return null
            }
            return shader
        }

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource)
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
        if (!vertexShader || !fragmentShader) return

        const shaderProgram = gl.createProgram()
        if (!shaderProgram) return
        gl.attachShader(shaderProgram, vertexShader)
        gl.attachShader(shaderProgram, fragmentShader)
        gl.linkProgram(shaderProgram)

        const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition")
        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

        const uResolution = gl.getUniformLocation(shaderProgram, "uResolution")
        const uTime = gl.getUniformLocation(shaderProgram, "uTime")
        const uMouse = gl.getUniformLocation(shaderProgram, "uMouse")

        let animationFrameId: number
        let mouseX = 0
        let mouseY = 0

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = window.innerHeight - e.clientY // Flip Y for WebGL
        }

        window.addEventListener("resize", handleResize)
        document.addEventListener("mousemove", handleMouseMove)
        handleResize()

        const render = (time: number) => {
            time *= 0.001 // seconds

            gl.useProgram(shaderProgram)
            gl.enableVertexAttribArray(positionAttributeLocation)
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

            gl.uniform2f(uResolution, gl.canvas.width, gl.canvas.height)
            gl.uniform1f(uTime, time)
            gl.uniform2f(uMouse, mouseX, mouseY)

            gl.drawArrays(gl.TRIANGLES, 0, 6)
            animationFrameId = requestAnimationFrame(render)
        }
        requestAnimationFrame(render)

        return () => {
            window.removeEventListener("resize", handleResize)
            document.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none"
        />
    )
}
