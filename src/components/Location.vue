
<template>
    <div class="ubication">
        <h2>Conoce Nuestra Ubicación</h2>
        <p> 
            <i>
            Encuentrenos en:<br><br>
            </i>
            Calle 21 de Marzo #22, Miguel de la Madrid, Monterrey, Nuevo León, C.P. 64533 
            
            <i><br><br><br>Horario de servicio:<br><br></i>   
            Servicio de Lunes a Viernes 8 a.m. a 10 p.m.
        </p>
    </div>
</template>



<!-- Scripts -->
<script>

export default {

    name: 'locationComponent',
    data() {
        return {
            element: "Elemento del componente",
        }
    }
}

</script>



<!-- Styles -->
<style scoped>
    .ubication {
        margin: 10px 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: 1.5px solid;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;
        border-radius: 2px;
        background-color: #fdfd96;
    }
</style>