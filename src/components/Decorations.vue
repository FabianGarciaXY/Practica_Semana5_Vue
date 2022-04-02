
<template>
    <div class='decoration'>
        <h2>
            Adornos y Decoraciones
        </h2>

        <div class="grid-item grids">
            <div>Extra 1</div>
            <div>Extra 2</div>
            <div>Extra 3</div>
        </div> 

        <div class="grids">


            <div class="grid-item">
                <div 
                    v-for=" item in $store.state.decorations.decorations1"
                    :key="item"
                    @click="$store.commit('selectDecoration1'); divIsClicked(item)"
                    ref="elements">

                    {{ item }}

                </div>
            </div>

            <div class="grid-item">
                 <div 
                    v-for=" item in $store.state.decorations.decorations2"
                    :key="item"
                    @click="$store.commit('selectDecoration2'); divIsClicked2(item)"
                    ref="elements2">

                    {{ item }}
                </div>
            </div>

            <div class="grid-item">
                <div 
                    v-for=" item in $store.state.decorations.decorations3"
                    :key="item"
                    @click="$store.commit('selectDecoration3'); divIsClicked3(item)"
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
    name: 'decorationComponent',

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
            this.$refs.elements[0].style.backgroundColor = "#9ab5d448"
            this.$refs.elements[0].style.color = "black"
        } else if (this.$refs.elements[1].textContent === this.temporalItem) {
            this.$refs.elements[1].style.backgroundColor = "#9ab5d448"
            this.$refs.elements[1].style.color = "black"
        } else if (this.$refs.elements[2].textContent === this.temporalItem) {
            this.$refs.elements[2].style.backgroundColor = "#9ab5d448"
            this.$refs.elements[2].style.color = "black"
        } else if (this.$refs.elements[3].textContent === this.temporalItem) {
            this.$refs.elements[3].style.backgroundColor = "#9ab5d448"
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
            this.$refs.elements2[0].style.backgroundColor = "#9ab5d448"
            this.$refs.elements2[0].style.color = "black"
        } else if (this.$refs.elements2[1].textContent === this.temporalItem2) {
            this.$refs.elements2[1].style.backgroundColor = "#9ab5d448"
            this.$refs.elements2[1].style.color = "black"
        } else if (this.$refs.elements2[2].textContent === this.temporalItem2) {
            this.$refs.elements2[2].style.backgroundColor = "#9ab5d448"
            this.$refs.elements2[2].style.color = "black"
        } else if (this.$refs.elements2[3].textContent === this.temporalItem2) {
            this.$refs.elements2[3].style.backgroundColor = "#9ab5d448"
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
            this.$refs.elements3[0].style.backgroundColor = "#9ab5d448"
            this.$refs.elements3[0].style.color = "black"
        } else if (this.$refs.elements3[1].textContent === this.temporalItem3) {
            this.$refs.elements3[1].style.backgroundColor = "#9ab5d448"
            this.$refs.elements3[1].style.color = "black"
        } else if (this.$refs.elements3[2].textContent === this.temporalItem3) {
            this.$refs.elements3[2].style.backgroundColor = "#9ab5d448"
            this.$refs.elements3[2].style.color = "black"
        } else if (this.$refs.elements3[3].textContent === this.temporalItem3) {
            this.$refs.elements3[3].style.backgroundColor = "#9ab5d448"
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


</script>


<!-- Styles -->>
<style scoped>

    .decoration {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
        border-radius: 2px;
        padding: 0 20px;
    }
    .decoration > .grid-item {
        background-color:rgb(230, 227, 227) ;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        padding: 10px 10px;
        font-size: 22px;
    }

    .grids {
        margin-top: 12px;
        display: flex;
        justify-content: space-around;
    }

    .grids > .grid-item {
        background-color:rgb(230, 227, 227) ;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .grids > .grid-item > div {
        border: 2px solid;
        width: 120px;
        height: 40px;
        padding: 10px;
        border-radius: 40px;
        background-color: #9ab5d448;
    }
    .grids > .grid-item > div:hover {
        background-color: black;
        color: rgb(238, 229, 218);
        transform: scale(1.03);
        cursor: pointer;
    }
</style>