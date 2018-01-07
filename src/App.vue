<template>
  <div>
    <!-- 3. 以标签形式在页面上使用组件 -->
    <!-- :initVal="'**hello world**'" 为初始化的数据 -->
    <!-- ref 为组件的实例，专门用来调用实例上的方法的 -->
    <editor :initVal="'**hello world**'" ref="editor"></editor>

    <hr>
    <input type="button" value="获取文本框的值" @click="getVal">

    <h3>获取到的值为：</h3>
    <div style="font-size: 12px; width: 100%; word-break:break-all;">{{ msg }}</div>
  </div>
</template>

<script>
// 1. 导入 编辑器
import editor from "./editor/index.js";

export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    getVal() {
      // 点击按钮，获取编辑器的数据
      console.log(this.$refs.editor.getValue());
      this.msg = this.$refs.editor.getValue();
    }
  },
  components: {
    editor // 2. 注册为私有组件
  }
};
</script>

<style scoped></style>
