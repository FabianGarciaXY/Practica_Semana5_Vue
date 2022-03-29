
<template>
  <div class="cakes">
    <h2>Sabores y Precios</h2>
    <div id="cakes-container">
      <div class="cake-item">
          <div>
            <img src="../assets/images/chesecake.jpg" class="image-1">
          </div> 
          <h3>
              Cheesecake
          </h3>
          <p>
              Este pastel es originario de Grecia, y tan popular es, que existen restaurantes dedicados específicamente a su elaboración. Su ingrediente distintivo, como verás, está en su nombre: el queso crema, ricotta o el neufchâtel. 
          </p>
      </div>
      <div class="cake-item">
            <div>
                <img src="../assets/images/tres_leches.jpg" class="image-1">
            </div> 
          <h3>
               Tres Leches 
          </h3>
          <p>
              El más consumido en Latinoamérica. Su nombre se debe a que está bañado con leche evaporada, condensada y crema. Se acompaña con frutos rojos o tropicales.
          </p>
      </div>
      <div class="cake-item">
            <div>
                <img src="../assets/images/opera.webp" class="image-1">
            </div> 
          <h3>
               Tarta Opera 
          </h3>
          <p>
              Su nombre se atribuye a la forma particular en que se hornea: primero se coloca la mezcla de pastel de chocolate y posteriormente la de flan. Lo increíble y lo que lo hace “imposible”, es que, cuando se hornea, se invierten los lugares y el flan queda en la parte superior del pastel. 
          </p>
      </div>
      <div class="cake-item">
            <div>
                <img src="../assets/images/pan_elote.jpg" class="image-1">
            </div> 
          <h3>
               Pan de elote 
          </h3>
          <p>
              Por supuesto, no podía faltar un postre mexicano. Este tiene un origen mítico, pues según el Popol Vuh, del maíz también fueron hechos los hombres y las mujeres. A esta preparación se le agrega leche o crema dulce. 
          </p>
      </div>
    </div>
  </div>
</template>


<!-- Code -->
<script>
export default {
  name: "cakesComponent",
};
</script>


<!-- Styles -->>
<style scoped>
.cakes {
  margin: 20px 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 2px solid;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  border-radius: 2px;
}

#cakes-container {
    display: flex;
    justify-content: center;
    margin-left: -10px;
    margin-right: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px;
    gap: 30px;
}
.cake-item {
    background-color: rgb(248, 247, 229);
    border: 3px solid;
    border-radius: 5px;
    width: fit-content;
    padding:12px;
    height: 320px;
    overflow: hidden;
}
    .cake-item > p {
        font-size: 13.5px;
    }
    .cake-item:hover {
        text-shadow: 0px 0px 1px;
        box-shadow: 2px 2px;
        background-color: blanchedalmond;
        cursor: pointer;
    }
    .cake-item > div {
        text-align: center;
    }

.image-1 {
    height: 130px;
    width: 200px;
    border-radius: 4%;
}

</style>