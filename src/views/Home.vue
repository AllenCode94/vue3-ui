<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      v-model="name"
      ref="son"
    />
    <p>your name: {{ name }}</p>
    <button @click="useSon">点击</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
    setup() {
      const name = ref('')
      const son = ref<InstanceType<typeof HelloWorld>>()
      function useSon() {
        const sonFunc = son.value?.$.exposed?.sonFunc
        if (typeof sonFunc === 'function') sonFunc()
      }
      const zsj = { name: 'zsj', age: 18 }
      Object.keys(zsj).forEach((key) => {
        console.log(key)
      })

      return {
        name,
        useSon,
        son,
      }
    },
  })
</script>
