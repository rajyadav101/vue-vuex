<template>
  <h1>Home Page</h1>
  <p>component state{{count}}</p>
  <p>store state{{this.$store.state.count}}</p>
  <button @click="increment">Up vote</button>
  <button @click="decriment">Down vote</button>
</template>

// JavaScript
<script>
import store from "../store";

export default {
  name: 'Home',
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` will refer to the component instance
       store.commit('increment')
       console.log(this.$store.state.count)
    },
    decriment(){
      this.count--
    }
  }
  
}
console.log("hi there");
</script>