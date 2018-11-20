<template>
  <div class="home">
    <MainMenu msg="Welcome to Main Menu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'home',
  components: {
   MainMenu  
  }
}
</script>
