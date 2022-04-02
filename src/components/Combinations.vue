
<template>
    <div class='combinations'>
        <h2>
            Combinalos a tu gusto
        </h2>

         <div class="grid-item grids">
            <div>Sabor</div>
            <div>Relleno</div>
            <div>Cobertura</div>
         </div> 

        <div class="grids">

            <div class="grid-item">

                <div
                    v-for=" item in $store.state.combinations.flavors"
                    :key="item"
                    @click="$store.commit('selectItem1'); divIsClicked(item)"
                    ref="elements">

                    {{ item }}
                    
                </div>
                                                    
            </div>

            <div class="grid-item">
                <div 
                    v-for=" item in $store.state.combinations.filling" 
                    :key="item"
                    @click="$store.commit('selectItem2'); divIsClicked2(item)"
                    ref="elements2"
                    >

                    {{ item }}
                </div>
            </div>

            <div class="grid-item">
                <div 
                    v-for=" item in $store.state.combinations.coverage" 
                    :key="item"
                    @click="$store.commit('selectItem3'); divIsClicked3(item)"
                    ref="elements3">
                    {{ item }}
                </div>
            </div>
            
        </div>
    </div>
</template>


<!-- Code -->
<script>

export default {
    name: 'combinationsComponent',

    data() {
        return {
            temporalItem : '',
            temporalItem2 : '',
            temporalItem3: ''
        }
    },

    methods: {
        divIsClicked: function(item){

            if (this.$refs.elements[0].textContent === this.temporalItem) {
                this.$refs.elements[0].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements[0].style.color = "black"
            } else if (this.$refs.elements[1].textContent === this.temporalItem) {
                this.$refs.elements[1].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements[1].style.color = "black"
            } else if (this.$refs.elements[2].textContent === this.temporalItem) {
                this.$refs.elements[2].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements[2].style.color = "black"
            } else if (this.$refs.elements[3].textContent === this.temporalItem) {
                this.$refs.elements[3].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements[3].style.color = "black"
            }

            this.temporalItem = item;
            
            if (this.$store.state.selected){
                event.target.style.backgroundColor = "#600"
                event.target.style.color = "#FFFFFF"
                this.$store.state.selected = !this.$store.state.selected
            } 

            this.$store.state.selected = !this.$store.state.selected
        },
        divIsClicked2: function(item){

            if (this.$refs.elements2[0].textContent === this.temporalItem2) {
                this.$refs.elements2[0].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements2[0].style.color = "black"
            } else if (this.$refs.elements2[1].textContent === this.temporalItem2) {
                this.$refs.elements2[1].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements2[1].style.color = "black"
            } else if (this.$refs.elements2[2].textContent === this.temporalItem2) {
                this.$refs.elements2[2].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements2[2].style.color = "black"
            } else if (this.$refs.elements2[3].textContent === this.temporalItem2) {
                this.$refs.elements2[3].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements2[3].style.color = "black"
            }

            this.temporalItem2 = item;
            
            if (this.$store.state.selected){
                event.target.style.backgroundColor = "#600"
                event.target.style.color = "#FFFFFF"
                this.$store.state.selected = !this.$store.state.selected
            } 

            this.$store.state.selected = !this.$store.state.selected
        },

        divIsClicked3: function(item){

            if (this.$refs.elements3[0].textContent === this.temporalItem3) {
                this.$refs.elements3[0].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements3[0].style.color = "black"
            } else if (this.$refs.elements3[1].textContent === this.temporalItem3) {
                this.$refs.elements3[1].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements3[1].style.color = "black"
            } else if (this.$refs.elements3[2].textContent === this.temporalItem3) {
                this.$refs.elements3[2].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements3[2].style.color = "black"
            } else if (this.$refs.elements3[3].textContent === this.temporalItem3) {
                this.$refs.elements3[3].style.backgroundColor = "rgb(238, 229, 218)"
                this.$refs.elements3[3].style.color = "black"
            }

            this.temporalItem3 = item;
            
            if (this.$store.state.selected){
                event.target.style.backgroundColor = "#600"
                event.target.style.color = "#FFFFFF"
                this.$store.state.selected = !this.$store.state.selected
            } 

            this.$store.state.selected = !this.$store.state.selected
        }
    }
}

// :style="selected ? {'background-color': '#993'} : null">
</script>


<!-- Styles -->
<style scoped>

    .combinations {

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: left;
        text-align: center;
        padding: 0 20px;
        border-radius: 2px;
    }
    .combinations > .grid-item {
        background-color:rgb(230, 227, 227) ;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
    }
    .combinations > .grid-item > div {

        width: 120px;
        font-size: 22px;
    }

    .grids {
        display: flex;
        justify-content: space-between;
    }

    .grids > .grid-item {
        background-color:rgb(230, 227, 227) ;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .grids > .grid-item > div {

        
        border: 2px solid;
        width: 120px;
        height: 40px;
        padding: 10px;
        border-radius: 40px;
        background-color: rgb(238, 229, 218);
    }


    .grids > .grid-item > div:hover {
        background-color: black;
        color: rgb(238, 229, 218);
        transform: scale(1.03);
        cursor: pointer;
    }

    .grids > .grid-item > div:active {
        transition: 200ms;
        background-color: #fafc85bb;
        color: black;
        font-weight: 700;
        transform: scale(1.1);
    }

</style>