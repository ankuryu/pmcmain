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
import Price from '@/components/Price.vue' ;
import Stock from '@/components/Stock.vue' ;
import Quote from '@/components/Quote.vue' ;
import Misc from '@/components/Misc.vue' ;

export default {
  name: 'MainMenu',
  routes: ['Price','Stock','Quote'],
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to  limit CSS to  this component only -->
<style scoped>
</style>
