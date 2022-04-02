<template>
  <div class="home">

    <h1>
      {{ $store.getters.message }}
      {{ $store.getters.nombreCompleto }}
    </h1>

    <!-- Components  -->
    <titleApp/>
    <location/>
    <cakes/>
    <div class="extra">
      <combinations/>
      <decorations/>
    </div>
    <form-component/>

  </div>
</template>

<script>
// @ is an alias to /src
import titleApp from '../components/TitleApp.vue'
import cakes from '../components/Cakes.vue'
import location from '../components/Location.vue'
import decorations from '../components/Decorations.vue'
import combinations from '../components/Combinations.vue'
import formComponent from '../components/Form.vue'

export default {
  name: 'home',
  components: {
    titleApp,
    cakes,
    location,
    decorations,
    combinations,
    formComponent
  }
}
</script>

<style>
body {
  margin: 0px 0px 20px 0px;
}

.home {
  margin-top: 80px;
}

div {
  margin-bottom: 10px;
  gap: 20px
}

.counter {
  font-size: 20px;
  border-radius: 20px;
  border: 2px solid;
  margin: 0 20%;
}
button {
  font-size: 20px;
  margin: 3px 20px;
  width: 70px;
}

.extra {
  display: flex;
  justify-content: center;
  margin: 0 30px;
}

.extra > * {
  width: 100%;
}

</style>
