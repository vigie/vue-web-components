<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" greeting="hello world" v-bind:users="users"/>
  </div>
</template>

<script>
// Load the web-components
import '@mcritch/clarity-webcomponent-starter';
import '@mcritch/clarity-date-picker-web-component';

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: () => ({
    users: [
      {
          id: 1,
          name: 'Matt',
          creation: Date.now(),
          color: 'Orange'
      },
      {
          id: 2,
          name: 'Etienne',
          creation: Date.now(),
          color: 'Green'
      }    
    ]
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
