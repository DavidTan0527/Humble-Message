<template>
  <div id="_navbar">
    <div class="navbar-container">
      <header class="navbar">
        <section class="navbar-section title">
          <router-link to="/" class="btn btn-link">Humble Dog Message Board</router-link>
        </section>
        <section class="navbar-section">
          <router-link to="/post" 
          class="btn btn-link" tag="button">Post message</router-link>
        </section>
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
    max-width: $normal-width;
    margin: 0 auto;
    .title a{
      padding-left: 0;
      padding-right: 0;
      color: #fff;
    }
    .navbar-section {
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

