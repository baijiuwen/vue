<template>
  <div>
    <div>
      <button @click="changeAssembly(1)">son1</button>
      <button @click="changeAssembly(2)">son2</button>
      <button @click="changeAssembly(3)">son3</button>
      <button @click="changeAssembly()">son</button>
    </div>
    <component :is="assembly" />
  </div>
</template>
<script>
import son from './son.vue'
import son1 from './son1.vue'
import son2 from './son2.vue'
import son3 from './son3.vue'

export default {
  data() {
    return {
      assembly: ''
    }
  },
  components: {
    son: son,
    son1: son1,
    son2: son2,
    son3: son3,
  },
  methods: {
    changeAssembly(value) {
      if (value === 1) {
        this.assembly = 'son1'
      } else if (value === 2) {
        this.assembly = 'son2'
      } else if (value === 3) {
        this.assembly = 'son3'
      } else {
        this.assembly = 'son'
      }
    }
  }
}
</script>