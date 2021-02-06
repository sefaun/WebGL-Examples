<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.InitwebGL();
  },
  methods: {
    InitwebGL() {
      var scene = new THREE.Scene();
      var aspect = window.innerWidth / window.innerHeight;
      var camera = new THREE.PerspectiveCamera(100, aspect, 1, 3000);
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      var controls = new THREE.OrbitControls(camera);

      var light = new THREE.DirectionalLight(0xf0ffff, 0.5);
      var light2 = new THREE.DirectionalLight(0xf0ffff, 0.5);

      var geometry = new THREE.BoxGeometry(3, 3, 3);

      var material = new THREE.MeshStandardMaterial({
        //flatShading: true,
        color: 0x3794cf,
        //transparent: true,
        //opacity: 0.5
        //wireframe: true
      });

      var cube = new THREE.Mesh(geometry, material);
      var cube2 = new THREE.Mesh(geometry, material);
      var cube3 = new THREE.Mesh(geometry, material);

      scene.add(cube);
      scene.add(cube2);
      scene.add(cube3);

      camera.position.z = 5;

      cube.position.x = -4;
      cube.position.y = -5;
      cube2.position.x = 0;
      cube3.position.x = 0;
      cube3.position.y = -4;

      cube.scale.set(1.2, 1.2, 1.2);

      scene.add(light);
      scene.add(light2);
      light.position.z = 3;
      light.position.x = 0;
      light2.position.z = 3;
      light2.position.y = -100;

      var render = function () {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        //cube.position.y += 0.1;
        //light.position.x += 0.5;
        light2.position.y += 0.5;
        // controls.update();
        renderer.render(scene, camera);
      };
      render();
    },
  },
};
</script>

<style>
</style>