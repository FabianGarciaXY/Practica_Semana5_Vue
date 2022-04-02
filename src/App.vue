<template>
  <nav id="top-bar">
    <router-link to="/">Home Client</router-link> |
    <router-link to="/bakerView">Operations</router-link>
  </nav>
  <router-view/>
  <footer>
     Based on LaunchX | By <a href="https://github.com/FabianGarciaXY"> @FabyanGaHezz </a>
  </footer>
</template>


<style>
#app {
  border-radius: 15% 0% 0 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, rgb(228, 228, 228), rgb(255, 243, 217), rgb(207, 191, 191), rgb(228, 250, 255)) ;
}

#top-bar {
  margin-top: -85px;
  position: fixed;
  padding: 20px 0 0 0;
  height: 55px;
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

footer {
  background-image: linear-gradient(to right, rgba(22, 22, 24, 0.952), rgb(37, 10, 10), rgb(47, 47, 58));
  border-radius: 10% 70% 0 0;
  padding: 20px 0;
  color: #e0da7b;
  margin-bottom: -20px;

}
footer > a {
  text-decoration-line: none;
  text-decoration: none;
  color: #e0da7b;
}
</style>
