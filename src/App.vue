<template>
  <div id="app">
    <div id="nav">
      <div class="logo">Souche Coding</div>
      <div class="user">{{'你好，' + $store.state.user.name}}</div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
}
#nav {
  height: 60px;
  background-color: black;
  color: #FF571A;
  display: flex;
  align-items: center;
  .logo {
    display: flex;
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    margin-left: 32px;
  } 

  .user {
    display: flex;
    font-size: 20px;
    margin-right: 32px;
  }
}
</style>
