<template>
  <my-header/>
   <router-view/>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components:{
         'my-header': Nav
  },
}
</script>