<template>
  <div class="mmenu">
<h1> {{msg}}</h1>
<ul>
  <li><router-link to = '/Price'>Prices</router-link></li>
  <li><router-link to = '/Stock'>Stock</router-link></li>
  <li><router-link to = '/Quote'>Quote</router-link></li>
  <li><router-link to = '/Misc'>Misc</router-link></li>
</ul>
  </div>
</template>

<script>
import Price from '@/views/Price.vue' ;
import Stock from '@/views/Stock.vue' ;
import Quote from '@/views/Quote.vue' ;
import Misc from '@/views/Misc.vue' ;

var routes = [
  {path: '/Price',component:Price},
  {path: '/Stock',component:Stock},
  {path: '/Quot',component:Quote},
  {path: '/Misc',component:Misc}
]
export default {
  name: 'MainMenu',
  routes ,
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to  limit CSS to  this component only -->
<style scoped>
</style>
