<template>
  <div id="_post">
    <div class="form-group">
      <label class="form-label" for="self">From</label>
      <input class="form-input" type="text" id="self" 
      placeholder="Your name..." v-model="formData.self"
      name="self" v-validate="'required|alpha'">
    </div>
    <div class="form-group">
      <label class="form-label" for="target">To</label>
      <input class="form-input" type="text" id="target" 
      placeholder="A message to..." v-model="formData.target"
      name="target" v-validate="'required|alpha'">
    </div>
    <div class="form-group">
      <label class="form-label" for="message">Message</label>
      <textarea class="form-input" id="message" 
      placeholder="Write your message..." rows="3" v-model="formData.message"
      name="message" v-validate="'required'"></textarea>
    </div>
    <div class="form-group">
      <label class="form-switch">
        <input type="checkbox" v-model="formData.public">
        <i class="form-icon"></i> Show message as public
      </label>
    </div>

    <button class="btn btn-lg btn-primary" @click="post()">Submit</button>
  </div>
</template>

<script>
// production
const API_URL = "https://message-chkl.ml/api/messages"
// localhost
// const API_URL = "http://localhost:3000/messages"
export default {
  mounted() {
    this.formData.self = "";
    this.formData.target = "";
    this.formData.message = "";
    this.formData.public = false;
  },
  data() {
    return {
      formData: {
        self: "",
        target: "",
        message: "",
        public: false,
      }
    }
  },
  methods: {
    post() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'content-type': 'application/json'
        }
      }).then((data) => {
        if (data.status == 200) {
          this.$message({
            message: 'Added successfully',
            type: 'success'
          });
          this.$router.push(`/`)
        } else if (data.status == 500) {
          this.$message({
            message: 'Invalid form input!',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
