<template>
  <div id="_main">
    <message v-for="message in messages" :key="message._id"
    :target="message.target" :message="message.message" :self="message.self">
    </message>
  </div>
</template>

<script>
import message from '@/components/message'
const API_URL = "http://0.0.0.0:3000/messages"
export default {
  data: () => ({
    messages: []
  }),
  mounted() {
    if (this.$route.params.name) {
      const API_URL_NAME = "http://0.0.0.0:3000/messages/name?target="+this.$route.params.name
      fetch(API_URL_NAME, {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
      }).then(response => response.json()).then((data) => {
        this.messages = data.slice().reverse();
      })
    } else {
      fetch(API_URL).then(response => response.json()).then((data) => {
        this.messages = data.slice().reverse();
      })
    }
  },
  components: {
    message
  },
  watch:{
    $route (to, from){
      if (to.path != "/post") {
        location.reload()
      }
    }
  } 
}
</script>

<style>

</style>
