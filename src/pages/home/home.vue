<template>
  <div class="home-container">
    <item :fatherComponent="name"></item>
  </div>
</template>

<script>
import item from "../../components/item"
export default {
  name: "home",
  data() {
    return {
      name:"home"
    };
  },
  methods: {},
  components:{
    item
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
</style>