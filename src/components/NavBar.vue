<template>

    <div class='jumbotron'>
    <div id="navigator">
    <button id="reset" class="btn text-uppercase" @click="restart">{{gano ? "Play Again!": "New Colors!"}}</button>
    <span id="message" v-if="estaJugando">{{gano ? "You Picked Right!" : "Try Again"}}</span>
    <div>
    <button id="easy" class="btn text-uppercase"  @click="cambiarA(false)" :class="obtenerEstilos(!isHard)">easy</button>
    <button id="hard" class="btn text-uppercase" @click="cambiarA(true)" :class="obtenerEstilos(isHard)">hard</button>
    </div>
 </div>

  </div>



</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: ["gano","restartJuego","estaJugando"],
    mounted () {

    },
    data () {
      return {
        isHard: true,
       
      }
    },
    methods: {
       
      cambiarA(dificultad){
        this.isHard=dificultad
        this.$emit("cambiarDificultad",dificultad)

      },
      obtenerEstilos(estilo){
        return estilo ? "selected" : ""
        
    },
    restart(){
      this.restartJuego()
    },

    
   
}

  }
</script>

<style scoped lang="css">

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
.jumbotron{
	background: white;
	padding: 0;
}
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;
  display: flex;
  justify-content: space-around;
  

}
.selected {
  background-color: steelblue;
  color: white;
}
</style>