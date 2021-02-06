<template>
  <div id="app">
    <div id="nav" class="menu">
      <router-link to="/">Rotate Box</router-link> |
      <router-link to="/image-rotate-box">Image Rotate Box</router-link> |
      <router-link to="/image-lighting-box">Image Ligthing Box</router-link> |
      <router-link to="/video-lighting-box">Video Lighting Box</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  text-align: center;
}
</style>
