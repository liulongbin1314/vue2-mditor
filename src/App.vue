<template>
  <div>
    <!-- :initVal="'**hello world**'" 为初始化的数据 -->
    <!-- ref 为组件的实例，专门用来调用实例上的方法的 -->
    <editor :initVal="'**hello world**'" ref="editor"></editor>

    <input type="button" value="获取文本框的值" @click="getVal">
  </div>
</template>

<script>
// 导入 编辑器
import editor from "./editor/index.js";

export default {
  data() {
    return {};
  },
  methods: {
    getVal() {
      // 点击按钮，获取编辑器的数据
      console.log(this.$refs.editor.getValue());
    }
  },
  components: {
    editor
  }
};
</script>

<style lang="scss" scoped>

</style>
