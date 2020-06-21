const REMBER_TIME = "REMBER_TIME";
const ADD_ITEMNUM = "ADD_ITEMNUM";

export default {
    //记录做题时间
    [REMBER_TIME](state, time) {
        state.allTime = time;
    },
    //跳转下一题并记录答案
    [ADD_ITEMNUM](state, id) {
        //选择的答案id值push到state中的answerid数组，最后一题结束后结算分数
        state.answerid.push(id);
        //判断是否是最后一题，如果不是则跳转下一题
        if(state.itemNum < state.itemDetail.length){
            state.itemNum += 1;
        }
    }
}