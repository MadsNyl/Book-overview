<template>
  <header>
      <router-link to="/">my books</router-link>
      <router-link to="/wishlist">my wishlist</router-link>
  </header>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style lang="scss">
header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    a {
        margin: 0 20px;
        text-decoration: none;
        color:#C87C81;
        font-size: 16px;
        text-transform: uppercase;
        transition: .3s ease-in-out;

        &:hover{
            color: #202020;
        }

        &.router-link-active{
            color: #202020;
            border-bottom: 1px solid #202020;
        }
    }
}
</style>