<template>
  <div class="item-container">
    <section class="top_tips">
      <span class="top_tips_span" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="top_tips_span" v-else>题目{{itemNum}}</span>
    </section>
    <section class="logo">
      <img src="../assets/img/1-2.png" alt v-if="fatherComponent == 'home'" />
      <div v-else>
        <img src="../assets/img/2-1.png" alt />
        <div class="subject">
          <p class="title">题目{{itemNum}}</p>
          <ul class="item">
            <li
              class="childrens"
              v-for="(item,index) in itemDetail[itemNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="submitletters(index,item.topic_answer_id)"
            >
              <span :class="['English',index == zimu ? 'active' : '']">{{selectletters(index)}}</span>
              {{item.answer_name}}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="button">
      <router-link to="/items" tag="div" v-if="fatherComponent == 'home'">
        <img src="../assets/img/1-4.png" class="start" alt />
      </router-link>
      <div
        v-else-if="fatherComponent == 'items' && answerid.length < itemDetail.length-1"
        @click="nextitem"
      >
        <img src="../assets/img/2-2.png" class="start" />
      </div>
      <div v-else @click="submititems">
        <img src="../assets/img/3-1.png" alt class="start" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "item",
  data() {
    return {
      zimu: null, //选中的字母的索引
      zimuid: null //选中改答案值的id
    };
  },
  computed: {
    ...mapState({
      level: "level", // => 第几周
      itemNum: "itemNum", // => 第几题
      itemDetail: "itemDetail", // => 题目详情
      answerid: "answerid" //答案id数组
    })
  },
  props: {
    fatherComponent: {
      type: String
    }
  },
  mounted() {
    // this.itemDetail.forEach(item=>{
    //   console.log(item.topic_answer)
    // })
    console.log(this.itemDetail[0].topic_answer);
    console.log(this.itemNum);
  },
  methods: {
    ...mapMutations(["ADD_ITEMNUM"]),
    //字母渲染
    selectletters(index) {
      switch (index) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    //点击选择答案
    submitletters(index, id) {
      this.zimu = index;
      this.zimuid = id; //这个是要提交到state中的正确答案数组中来判断多少分的
      console.log(this.zimu, this.zimuid);
    },
    //点击下一题
    nextitem() {
      if (this.zimu == null) {
        alert("您还没有选择答案");
        return;
      }
      this.zimu = null;
      this.ADD_ITEMNUM(this.zimuid);
    },
    //最后一题，交卷，清空定时器并跳转分数页面
    submititems() {
      if (this.zimu == null) {
        alert("您还没有选择答案");
        return;
      }
      this.ADD_ITEMNUM(this.zimuid);
      this.$router.push("result");
    }
  }
};
</script>

<style lang="less" scoped>
.item-container {
  height: 100%;
  background-size: contain;
  background-image: url("../assets/img/1-1.jpg");
  .top_tips {
    width: 30%;
    height: 20%;
    padding-right: 2rem;
    background: url("../assets/img/WechatIMG2.png") no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    .top_tips_span {
      position: absolute;
      font-size: 0.125rem;
      color: var(--color);
      bottom: 0.75rem;
      left: 0.6875rem;
      font-weight: 600;
    }
  }
  .logo {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);

    img {
      width: 12.5rem;
      height: 12.5rem;
    }
    .subject {
      position: absolute;
      top: 40%;
      left: 50%;
      color: cadetblue;
      width: 7.5rem;
      transform: translate(-50%, -40%);

      .title {
        margin-bottom: 0.375rem;
        font-size: 0.3125rem;
        font-weight: bold;
      }
      .item {
        .childrens {
          font-size: 0.3125rem;
          line-height: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0.25rem 0;
          .English {
            border: 1px solid #ccc;
            border-radius: 50%;
            padding: 0.1rem 0.1875rem;
            margin-right: 0.25rem;
          }
          .active {
            background: wheat;
          }
        }
      }
    }
  }
  .button {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -65%);
    .start {
      width: 4rem;
      height: 2.5rem;
      object-fit: contain;
    }
  }
}
</style>