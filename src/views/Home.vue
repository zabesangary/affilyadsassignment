<template>
  <div class="home">
    <Homecontent msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Homecontent from '@/components/Homecontent.vue'

export default {
  name: 'Home',
  components: {
    Homecontent
  }
}
</script>
