
<template>
    
    <div class="cantidad-decoraciones">
        <h2>Cantidad Restante de Decoraciones</h2>
        <div>
            <span>Frambuesas: {{$store.state.stock.decorationsStock.frambuesas}}</span>
            <span>Almendras: {{$store.state.stock.decorationsStock.almendras}}</span>
            <span>Fresas: {{$store.state.stock.decorationsStock.fresas}}</span>
            <span>Galletas oreo: {{$store.state.stock.decorationsStock.galletasOreo}} </span>
            <span>Moras: {{$store.state.stock.decorationsStock.moras}}</span>
         </div>
    </div>

</template>


<script>
export default {
    name: 'catidadDecoraciones',
}
</script>


<style>

.cantidad-decoraciones {
    border: 2px solid;
    border-radius: 10px;
    padding: 30px;
    font-size: 20px;
    margin: 30px 0 0 0;
}
.cantidad-decoraciones > div {
    display: flex;
    flex-direction: column;
    text-align: left;
}
.cantidad-decoraciones > div > span {
    text-align: left;
    background-color: rgb(255, 255, 255);
    padding: 10px 20px;
    border-radius: 10px;
}

</style>

