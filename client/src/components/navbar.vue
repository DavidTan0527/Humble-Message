<template>
  <div id="_navbar">
    <div class="navbar-container">
      <header class="navbar">
        <div class="section title">
          <router-link to="/" class="btn btn-link">Humble Dog Message Board</router-link>
        </div>
        <div class="section">
          <router-link to="/post" 
          class="btn btn-link post" tag="button">Post message</router-link>
        </div>
      </header>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/scss/variables";
#_navbar .navbar-container{
  padding: .5rem 0 .8rem;

  .navbar {
    margin: 0 auto;
    max-width: $normal-width;
    display: flex;
    & > section {
      justify-content: center;
    }
    @media screen and (max-width: $normal-width) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media screen and (max-width: $size-xs) {
      flex-direction: column;

      & > div {
        margin: 0 auto;
      }

      .post {
        margin-top: .5rem;
        width: 60vw;
      }
    }
    .title a{
      padding-left: 0;
      padding-right: 0;
      color: #fff;
    }
    .section {
      button {
        background-color: $primary-color;
        color: #fff;
        border-radius: .2rem; 
        &:hover {
          background-color: $primary-color-dark;
          color: #ccc;
        }
        &:focus {
          box-shadow: none;
        }
      }
  
      a {
        cursor: pointer;
        font-size: 1rem;
  
        &:hover {
          color: $primary-color;
        }
  
        &:focus {
          box-shadow: none;
          color: #fff;
        }
      }
    }
  }
}
</style>

