<template>
  <div id="app">


  <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/exit">Exit page</router-link> -->
  <!-- </div> -->
  <transition name="fade" mode="out-in">
  <router-view/>
</transition>
  </div>
</template>
<style lang="scss">

#app {

  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/bg.png');

  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

</style>
<!-- Global style -->
<style lang="scss">


</style>
