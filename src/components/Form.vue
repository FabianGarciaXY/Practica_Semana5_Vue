
<template>
    <div class='form'>
        <h2>
            Order your favorite cakes now!
        </h2>

        <form action="post">

            <div>
                <label for="name">Nombre:</label><br>
                <input 
                    type="text" 
                    name="name"
                    v-model="nameInput"
                    id="name" 
                    required><br>
            </div>

            <div>
                <label for="phone">Teléfono:</label><br>
                <input 
                type="text" 
                name="phone" 
                id="phone"
                v-model="phoneInput" 
                required><br>
            </div>

            <div>
                <label for="email">Correo electronico:</label><br>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    v-model="emailInput"
                    ><br>
            </div>

            <div>
                <label for="pie">Pastel:</label><br>
                <input

                    type="text" 
                    name="pie" 
                    id="pie"
                    v-model="pieInput"
                    required
                    ><br>

            </div>

            <!-- Dinamic Input -->
                
            <div>
                <label for="date">Entrega:</label><br>
                <input 
                    type="date" 
                    name="date" 
                    id="date"
                    v-model="dateInput"
                    required
                    >
            </div>

            <div id="extras"> 
                <label for="decorations">Extras:</label><br>
                <textarea 
                    type="text" 
                    v-model="$store.getters.getCombinations" 
                    id="decorations" 
                    name="decorations">
                </textarea>
            </div>

                <v-btn 
                    id="submit"
                    @click="registerOrder"
                    >
                    Confirmar Orden
                </v-btn>
        </form>

    </div>
</template>


<!-- Code -->
<script>

export default {
    name: 'formComponent',
    data() {
        return {
            order: 1,
            nameInput: '',
            phoneInput: '',
            emailInput: '',
            pieInput: '',
            dateInput: '',
            extras: ''
        }
    }, 
    methods: {

        registerOrder() {

            console.log(this.dateInput)
            let orden = this.order++;

            setTimeout( () => {
                alert(this.nameInput + ' su pedido queda confirmado con la orden #A' + orden )
            }, 500); 

            this.$store.dispatch('addOrder', {
                number: this.order,
                name : this.nameInput,
                phone: this.phoneInput,
                email: this.emailInput,
                cake: this.pieInput,
                date: this.dateInput,
                extras: this.$store.getters.getCombinations
            })
        }

    }
}
</script>


<!-- Styles -->>
<style scoped>

    .form {

        margin: 20px 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: 1.5px solid;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;
        border-radius: 2px;
    }
    form {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 60px 0;
        color: aliceblue;
    }
    form > div {
        border: 2px solid;
        width: 500px;
        border-radius: 30px 30px 30px 0;
        text-align: center;
        padding: 3px;
        background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(49, 49, 49), rgb(1, 22, 43));
    }
    #extras {
        border: 2px solid;
        width: 500px;
        border-radius: 30px 30px 30px 30px;
        text-align: center;
        padding: 3px;
        background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(49, 49, 49), rgb(1, 22, 43));
    }

    #decorations {
        margin: 15px 0px;
        height: 60px;
        width: 350px;
        background-color: #f7eccd;
        margin: 10px 0 15px 0;
        border-radius: 10px;
    }
    form > div > input{
        border: transparent;
        margin: 3px 0;
        background-color: #f7eccd;
        border-radius: 20px;
        width: 350px;
        height: 20px;
        text-align: center;
        margin: 10px 0 15px 0;
    }

    form > button {
        margin: 0;
        width: 200px;
        border-radius: 20px;
    }

    v-btn {
        margin-top: 40px;
        background-color: black;
        padding: 15px 20px;
        border-radius: 17px;
        font-size: 17px;
    }
    v-btn:hover {
        transform: scale(1.06);
        transition: 500ms;
        cursor: pointer;
        box-shadow: 0px 5px 15px 3px rgb(100, 95, 95);
    }

</style>