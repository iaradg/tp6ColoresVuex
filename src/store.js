import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
				//aca van los atributos que yo quiero que sean globales
                colorGanador: null
		},
				actions:{
				//aca van las actions llamadas por los otros coponentes ej:
                getGanador({commit},colorGanador) {
                    console.warn('actions -> getGanador', colorGanador, new Date().toLocaleString())
                    commit('getGanador',colorGanador)
                   
                },
        
                getColorSquare({commit},array){
                    commit('actualizarColor',array)
                },
        
        
		},
        mutations:{
            //aca van las mutaciones, el metodo real que cambia las cosas
//en este caso la action llama a la mutation, ej:
            getGanador(state, colorGanador) {
                console.warn('mutations -> getGanador', colorGanador, new Date().toLocaleString())
                state.colorGanador = colorGanador
            },

            actualizarColor(state,array){
                state.getColorsCuadrados= array
            },

		}
})