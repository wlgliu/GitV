<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/global.scss';
#app{
	height: 100%;
	width: 100%;
  scrollbar-arrow-color: red($color: #000000);
}
</style>
