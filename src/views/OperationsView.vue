<template>
  <div class="about">
    <h1>Resumen de Pedidos e Inventarios</h1>
  </div>

  <div class="quantity-container">
    <sabores-cantidad/>
    <catidad-decoraciones/>
  </div>

  <cantidad-pedidos/>
</template>

<script>
import saboresCantidad from '../components/saboresCatidadB.vue';
import catidadDecoraciones from '../components/decoracionesCantidadB.vue'
import cantidadPedidos from '../components/pedidosB.vue'

export default {
  name: 'bakerView',
    components: {
      saboresCantidad,
      catidadDecoraciones,
      cantidadPedidos
    }
}
 
</script>


<style scoped>
.about {
  margin-top: 80px;
}

h1 {
  padding-top: 50px;
}

.quantity-container {
  display: flex;
  margin: auto;
  justify-content: center;
}
</style>

