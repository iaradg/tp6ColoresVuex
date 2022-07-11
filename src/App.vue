<template>
  <div id="app">
    <div id="header" :style= "{background:headerColor}" >
		<h1>The Great <br>
			<span id="colorDisplay">{{this.pickedColor}}</span>
			<br>
			Guessing Game</h1>
	</div>
  
<Navbar :gano="gano" @cambiarDificultad= "cambiarDificultad($event)"  :restartJuego="restart" :estaJugando="estaJugando" /> 
 <Juego :isHard ="isHard" @evaluarGanador="evaluarGanador($event)"  
  @obtenerGanador="obtenerGanador($event)" @obtenerRestart="obtenerRestart($event)"/>  
  </div>
 
</template>

<script>
import Juego from './components/JuegoColores.vue'
import Navbar from './components/NavBar.vue'
export default {
  name: 'App',
  
  components: {
   Juego,
   Navbar
  
  },
  data(){
  return{
  isHard : true,
  pickedColor : "RGB",
  headerColor : "steelblue",
  estaJugando :false,
  gano : '',
  restart : "",
  
  }
  },
    methods: {
      cambiarDificultad(dificultad){
      this.isHard=dificultad;
      this.estaJugando =false
      },
      evaluarGanador(gano){
        this.gano=gano;
        this.estaJugando =true;
        if(gano==true){
          this.headerColor= this.pickedColor;
        }
      },
      obtenerGanador(cuadradoGanador){
        this.pickedColor=cuadradoGanador;
        this.estaJugando =false
      },
      obtenerRestart(restart){
        this.restart=restart;
        this.estaJugando =false
      }
    }
}
</script>

<style>
#app {
  background: #232323;
	font-family: "Montserrat", "Avenir";
  
  
}
body{
  background-color: #232323;
  margin-top: -20px;
  font-family: "Montserrat", "Avenir";
  
}
#header {
	transition: all 0.3s;
	text-transform: uppercase;
	text-align: center;
	color: white;
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
}
</style>
