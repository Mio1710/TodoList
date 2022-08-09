<template>
  <div class="layout-bg">
    <nuxt-link to="/" class="p-5">
      Index
    </nuxt-link>
    <nuxt-link to="/page1" class="p-5">
      Page1
    </nuxt-link>
    <Nuxt />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default'
}
</script>

<style scoped>
  .layout-bg {
    background-image: linear-gradient(139deg,#3ae2fd,#ff4ba6);
  }
</style>
