<template>
  <div class="home">
    <div id="toolbar-container"></div>

    <div id="editor-container"></div>
    <textarea id="textarea-1"></textarea>
    <textarea id="textarea-2"></textarea>
    <div id="textarea-3" style="position: absolute; right: 0; top: 40px"></div>
    <div>
      <label for="">活动名称</label><input v-model="name" type="text" name="" id="" />
      <br />
      <button @click="submit">提交</button>
      <!-- <label for=""></label><input type="text" name="" id=""> -->
      <br />
      {{ url }}
    </div>
  </div>
</template>

<script lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IDomEditor,
  IToolbarConfig,
} from "@wangeditor/editor";

import { defineComponent, ref, onMounted } from "vue";
import { test } from "@/api/user";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let url = ref("");
    let name = ref("");
    let html = ref("");
    function submit() {
      console.log({ name: name.value, html: html.value })
      test({ name: name.value, html: html.value })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    onMounted(() => {
      // 编辑器配置
      const editorConfig: Partial<IEditorConfig> = {};
      editorConfig.placeholder = "请输入内容";
      editorConfig.onChange = (editor: IDomEditor) => {
        // 当编辑器选区、内容变化时，即触发
        const content = editor.children;
        const contentStr = JSON.stringify(content);
        // @ts-ignore
        document.getElementById("textarea-1").value = contentStr;

        html.value = editor.getHtml();
        // @ts-ignore
        document.getElementById("textarea-2").value = html.value;
        // @ts-ignore
        document.getElementById("textarea-3").innerHTML = html.value;
      };

      // 工具栏配置
      const toolbarConfig: Partial<IToolbarConfig> = {};

      // 创建编辑器
      const editor = createEditor({
        selector: "#editor-container",
        config: editorConfig,
        mode: "default", // 或 'simple' 参考下文
      });
      // 创建工具栏
      const toolbar = createToolbar({
        editor,
        selector: "#toolbar-container",
        config: toolbarConfig,
        mode: "default", // 或 'simple' 参考下文
      });
    });
    return {
      url,
      submit,
      name,
    };
  },
});
</script>
<style scoped>
#toolbar-container {
  width: 700px;
  height: 100px;
  border: 1px solid #999;
}
#editor-container {
  width: 700px;
  height: 300px;
  overflow-y: auto;
  border: 1px solid #999;
}
#textarea-1 {
  width: 700px;
  height: 200px;
  display: block;
  border: 1px solid #999;
}
#textarea-2 {
  width: 700px;
  height: 200px;
  display: block;
  overflow-y: auto;
  border: 1px solid #999;
}
#textarea-3 {
  width: 700px;
  height: 700px;
  display: block;
  border: 1px solid #999;
  overflow-y: auto;
}
</style>
