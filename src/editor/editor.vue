<template>
  <div id="vue2-mditor">
    <textarea id="vue2editor"></textarea>
  </div>
</template>

<script>
import "./lib/js/mditor.min.js";
import "./lib/css/mditor.min.css";

export default {
  data() {
    return {
      mditor: null // 专门用来存储编辑器实例
    };
  },
  mounted() {
    // 从文本域创建编辑器实例
    var mditor = Mditor.fromTextarea(document.getElementById("vue2editor"));
    // 将实例挂载到data上
    this.mditor = mditor;

    //获取或设置编辑器的值
    mditor.on("ready", () => {
      mditor.value = this.initVal === undefined ? "" : this.initVal + "";
    });
  },
  props: ["initVal"], // 初始化的文本内容
  methods: {
    // 用来获取编辑器文本内容的方法，需要通过 this.$refs 来进行调用
    getValue() {
      return this.mditor.value;
    }
  }
};
</script>

<style scoped>

</style>
