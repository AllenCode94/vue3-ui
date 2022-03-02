<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" :value="modelValue" @input="edit" />
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String,
      modelValue: String,
    },
    emits: ['update:modelValue'],
    setup(_, { emit, expose }) {
      function edit(e: Event) {
        const target = (e.target as HTMLInputElement).value
        emit('update:modelValue', target)
      }
      function sonFunc() {
        alert('调用了子组件的方法')
      }

      expose({ sonFunc })
      onMounted(() => {
        const str = new String('123')
        console.log(str instanceof String)
      })
      return {
        edit,
      }
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #42b983;
  }
</style>
