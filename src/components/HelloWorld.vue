<template>
  <div class="hello">
    
    <button @click="increment">Up vote</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: 'HelloWorld',
  methods: {
    increment() {
      // `this` will refer to the component instance
       store.commit('increment')
       console.log(this.$store.state.count)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
