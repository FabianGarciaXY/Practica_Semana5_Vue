
<template>
  <div class="cantidad-sabores">
    <h2>Cantidad Restante de Sabores</h2>

    <div>
    <span>Vainilla: {{$store.state.stock.cakesStock.vainilla}}</span>
    <span>Chocolate: {{$store.state.stock.cakesStock.chocolate}}</span>
    <span>Red velvet: {{$store.state.stock.cakesStock.redVelvet}}</span>
    <span>Almendra Limon: {{$store.state.stock.cakesStock.almendraLimon}} </span>
    </div> 
  </div>
</template>


<script>
export default {
  name: "cantidad_sabores",
};
</script>


<style>
.cantidad-sabores {
  margin: 30px 0 0 0;
  border: 2px solid;
  border-radius: 10px;
  padding: 30px;
  font-size: 20px;
}
.cantidad-sabores > div {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.cantidad-sabores > div > span {
    text-align: left;
    background-color: rgb(255, 255, 255);
    padding: 10px 20px;
    border-radius: 10px;
}
</style>

