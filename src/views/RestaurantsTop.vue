<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue' 

export default {
  components: {
    NavTabs,
  },
}
</script>