<template>
  <div class="items-container">
    <item :fatherComponent="name"></item>
  </div>
</template>

<script>
import item from "../../components/item";
import { mapActions } from "vuex"
export default {
  name: "items",
  data() {
    return {
      name: "items"
    };
  },
  methods: {
    ...mapActions(['Time'])
  },
  mounted(){
    this.Time();
  },
  components: {
    item
  }
};
</script>

<style lang="less" scoped>
.items-container{
  height: 100%;
}
</style>