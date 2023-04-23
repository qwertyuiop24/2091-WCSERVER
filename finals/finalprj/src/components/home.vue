<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Welcome to my Channel.</h2>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data(){
      return{
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
* {
  background-color: antiquewhite;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
</style>