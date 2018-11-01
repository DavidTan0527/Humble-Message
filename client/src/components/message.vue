<template>
  <div id="_message">
    <div class="container">
      <div class="head mb-2">
        To: <span class="label label-primary ml-1">{{target}}</span>
      </div>
      <div class="divider"></div>
      <div class="body mb-2">
        {{message}}
      </div>
      <div class="footer" style="float: right;">- {{self}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    target: String,
    message: String,
    self: String
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
#_message {
  border: solid 1px darken($color-1, 2%);
  border-radius: .25rem;
  background-color: $color-1;
  padding: 1rem 1.2rem;
  max-width: $normal-width;
  margin: 1rem auto 1.8rem;
  .container {
    padding: 0;
    & > div {
      color: #fff;
    }
  
    .head {
      color: $text-color;
      .label {
        border-radius: .25rem;
        padding: .2rem .5rem;
      }
    }

    .divider {
      border-top: solid 2px rgba(darken($border-color, 10%), .6);
    }

    .body {
      font-size: $font-size-lg;
    }
  }
}
</style>
