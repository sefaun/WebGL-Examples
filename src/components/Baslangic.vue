<template>
  <div>
    <canvas id="webGL-canvas" width="800" height="600">
      Your browser does not support HTML5
    </canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.start();
  },
  methods: {
    start() {
      var vertexShaderText = [
        "attribute vec2 position;",
        "void main()",
        "{",
        "  gl_Position = vec4(position, 0., 1.0);",
        "}",
      ].join("\n");

      var fragmentShaderText = [
        "void main()",
        "{",
        "  gl_FragColor = vec4(0.3, 0.5, 0.7, 1.0);",
        "}",
      ].join("\n");

      const canvas = document.getElementById("webGL-canvas");

      var gl = canvas.getContext("webgl");

      if (!gl) {
        console.log("WebGL not supported, falling back on experimental-webgl");
        gl = canvas.getContext("experimental-webgl");
      }

      if (!gl) {
        alert("Your browser does not support WebGL");
      }

      gl.clearColor(0.75, 0.85, 0.8, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
      gl.cullFace(gl.BACK);

      const vertex = [-1, -1, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5];
      const indices = [0, 1, 2, 0, 2, 3];

      //
      // Create shaders
      //
      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderText);
      gl.compileShader(vertexShader);
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(
          "ERROR compiling vertex shader!",
          gl.getShaderInfoLog(vertexShader)
        );
        return;
      }

      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderText);
      gl.compileShader(fragmentShader);
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(
          "ERROR compiling fragment shader!",
          gl.getShaderInfoLog(fragmentShader)
        );
        return;
      }

      var program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("ERROR linking program!", gl.getProgramInfoLog(program));
        return;
      }

      //buffer yapıyoruz vertex için
      var boxVertexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);

      //buffer yapıyoruz indisler için
      var boxIndexBufferObject = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW
      );

      var position = gl.getAttribLocation(program, "position");
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(position);
      gl.useProgram(program)
    },
  },
};
</script>

<style>
</style>