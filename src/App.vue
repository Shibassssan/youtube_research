<template>
  <div id="app">
    <div class="bg-image">
      <ul class="navigation">
        <li class="navigation-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation-link">
          <router-link to="/search">Search</router-link>
        </li>
      </ul>

    <router-view class="main" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.navigation{
  padding-top: 5%;
  margin-right: 15px;
  list-style:none;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
}

.navigation-link{
  margin-right: 15px;
}
</style>
