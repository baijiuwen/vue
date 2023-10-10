<template>
    <p>---异步组件---</p>
  <AdminPage />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    AdminPage: defineAsyncComponent(() =>
      import('@/components/dialogComponent.vue')
    )
  }
}
</script>

