
<template>

    <div class="pedidos">
        
        <h2>Pedidos Pendientes</h2>
        <div>
            <span># {{$store.getters.getNumber}} </span>
            <span>Nombre: {{$store.getters.getName}} </span>
            <span>Teléfono: {{ $store.getters.getPhone }}</span>
            <span>Correo electronico: {{ $store.getters.getEmail }} </span>
            <span>Pastel: {{ $store.getters.getCake }}</span>
            <span>Extras: {{ $store.getters.getExtras }}</span>
            <span>Entrega: {{ $store.getters.getDate }}</span>
        </div>
    </div>

</template>


<script>

export default {
    
    name: 'cantidadPedidos'    

}

</script>


<style>
.pedidos {
    border: 2px solid;
    border-radius: 10px;
    margin: 30px 200px;
    display: flex;
    flex-direction: column;
}

.pedidos > div{
    display: flex;
    flex-direction: column;
    border: 2px solid;
    border-radius: 10px;
    margin: 20px 100px;
    padding:20px 30px;
    font-size: 18px;
    text-align: left;
    background-color: rgb(255, 255, 255);
    gap: 5px;
}
.pedidos > span {
    width: 800px;
    text-align: left;
    padding: 0px 20px;
    margin: 0;
    border-radius: 10px;
    align-self: center;
}



</style>