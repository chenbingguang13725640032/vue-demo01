<template>
  <div class="result-container">
    <!-- 成绩栏 -->
    <section class="success">
      <p class="fraction">{{fraction}}分 !</p>
      <p class="span">{{getfractiontip}}</p>
    </section>
    <!-- 分享按钮 -->
    <section class="share" @click="showfask">
      <img src="../../assets/img/4-3.png" alt />
    </section>
    <!-- 底部二维码 -->
    <section class="orcode">
      <p class="span">关注葡萄之家，获取答案</p>
      <img src="../../assets/img/4-4.png" alt />
    </section>
    <!-- 遮罩层 -->
    <section class="fask" @click="showfask" v-if="isfask">
      <img src="../../assets/img/5-2.png" alt />
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "result",
  data() {
    return {
      //正确答案
      successArr: [2, 7, 12, 13, 18],
      //提示
      tipArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ],
      isfask:false
    };
  },
  computed: {
    ...mapState({
      answerid: "answerid"
    }),
    //成绩
    fraction() {
      let newarr = this.answerid.filter(
        item => this.successArr.indexOf(item) != -1
      );
      if (newarr.length == 0) {
        return 0;
      }
      return newarr
        .map(item => (item = 20))
        .reduce((item1, item2) => item1 + item2);
    },
    //根据分数显示提示
    getfractiontip() {
      let index = this.fraction / 20 - 1;
      return this.tipArr[index == -1 ? 0 : index];
    }
  },
  mounted() {
    console.log(this.successArr);
  },
  methods: {
    //分享提示
    showfask(){
      this.isfask = !this.isfask;
    }
  }
};
</script>

<style lang="less" scoped>
.result-container {
  height: 100%;
  background-image: url("../../assets/img/4-1.jpg");
  background-size: 100%;

  .success {
    background-image: url("../../assets/img/4-2.png");
    background-repeat: no-repeat;
    width: 10rem;
    height: 8.75rem;
    background-size: contain;
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, -6%);
    .fraction {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -60%);
      font-size: 1.25rem;
      font-weight: bold;
      color: #a51d31;
    }
    .span {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -90%);
      font-size: 0.625rem;
      width: 80%;
      text-align: center;
      color: #3e2415;
    }
  }
  .share {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -43%);
    img {
      width: 6.25rem;
      height: 2.5rem;
      object-fit: cover;
    }
  }
  .orcode {
    font-size: 0.375rem;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    img {
      width: 6.5rem;
      height: 6.5rem;
    }
    .span {
      width: 6rem;
      margin-bottom: 0.375rem;
      color: #664718;
    }
  }
  .fask {
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0.96;
    height: 100%;
    background-image: url("../../assets/img/5-1.png");
    width: 100%;
    img {
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 11.25rem;
      height: 11.25rem;
    }
  }
}
</style>