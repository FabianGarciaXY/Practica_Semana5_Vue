import { createStore } from 'vuex'

export default createStore({
  state: {
    selected: true,

    // Form Auto-Input
    combinations: {
      flavors: ['Vainilla', 'Chocolate', 'Red Velvet', 'Almendra'],
      filling: ['Frutos Rojos', 'Vainilla', 'Caramelo salado', 'Chocolate'],
      coverage: ['Crema Batida', 'Fondant', 'Buttercream', 'Merengue']
    },

    decorations: {
      decorations1: ['Frambuesas', 'Laminas de almendra', 'Hojas de menta', 'Fresas'],
      decorations2: ['Arandanos', 'Malvaviscos', 'Caramelo', 'Barras de chocolate'],
      decorations3: ['Moras', 'Glaseado oscuro', 'Barras de galleta', 'Merengue']
    },

    extra1: '',
    extra2: '',
    extra3: '',

    decoration1: '',
    decoration2: '',
    decoration3: '',

    combinationsSelected: {
      cakeFlavor: '',
      pieFilling: '',
      extras: ''
    },

    decorationSelected: {
      decoration1: '',
      decoration2: '',
      decoration3: ''
    },

    // Form Data

    form: {
      number: '', 
      name: '',
      phone: '',
      email: '',
      pie: '',
      extras: '',
      date: ''
    },

    stock: {

      cakesStock: {
        vainilla: 20,
        chocolate: 20,
        redVelvet: 20,
        almendraLimon: 20
      }, 
      decorationsStock: {
        frambuesas: 50,
        almendras: 50,
        fresas: 50,
        galletasOreo: 50,
        moras: 50
      }

    }



  },
  getters: {

    getCombinations( state ) {
      let allCombinations = state.combinationsSelected.cakeFlavor + " " + state.combinationsSelected.pieFilling + " " + state.combinationsSelected.extras + " " + state.decorationSelected.decoration1 + " " +  state.decorationSelected.decoration2 + " " + state.decorationSelected.decoration3;
      return allCombinations
    },

    getCakesStock( state ) {
      return state.stock.cakesStock.vainilla
    },

    // Getting data form 
    getNumber( state ) {
      return state.form.number
    },
    getName( state ) {
      return state.form.name
    },
    getPhone( state ) {
      return state.form.phone
    },
    getEmail( state ) {
      return state.form.email
    },
    getCake( state ) {
      return state.form.pie
    },
    getExtras( state ) {
      return state.form.extras
    },
    getDate( state ) {
      return state.form.date
    }

  },
  mutations: {

    selectItem1: ( state ) => {
      state.extra1 = event.target.textContent;
      state.combinationsSelected.cakeFlavor = "*"+state.extra1;
    },

    selectItem2: ( state ) => {
      state.extra2 = event.target.textContent;
      state.combinationsSelected.pieFilling = "*"+state.extra2;
    },

    selectItem3: ( state ) => {
      state.extra3 = event.target.textContent;
      state.combinationsSelected.extras = "*"+state.extra3;
    },


    selectDecoration1: ( state ) => {
      state.decoration1 = event.target.textContent;
      state.decorationSelected.decoration1 = "*"+state.decoration1;
    },

    selectDecoration2: ( state ) => {
      state.decoration2 = event.target.textContent;
      state.decorationSelected.decoration2 = "*"+state.decoration2;
    },

    selectDecoration3: ( state ) => {
      state.decoration3 = event.target.textContent;
      state.decorationSelected.decoration3 = "*"+state.decoration3;
    },

    // Form data
    addOrder: (state, payload) => {
      state.form.number = 'A' + payload.number;
      state.form.name = payload.name;
      state.form.phone = payload.phone;
      state.form.email = payload.email;
      state.form.pie = payload.cake;
      state.form.date = payload.date;
      state.form.extras = payload.extras;
    }

  },
  actions: {
    addOrder: ({commit}, payload) => {
      commit('addOrder', payload)
    }
  },
  modules: {
  }
})
