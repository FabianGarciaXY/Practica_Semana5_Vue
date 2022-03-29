<template>
  <nav id="top-bar">
    <router-link to="/">Home Client</router-link> |
    <router-link to="/operations">Operations</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#top-bar {
  padding: 20px 0 0 0;
  height: 60px;
  width: 100%;
  border-radius: 0 0 50% 120%;
  background-color: rgba(22, 26, 41, 0.952);
}

nav a {
  font-weight: bold;
  color: #293949;
  list-style: none;
  list-style-type: none;
  font-size: 30px;
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  color: #e0da7b;
}
</style>
