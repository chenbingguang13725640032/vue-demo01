export default {
    //辅助Mutations里面的REMBER_TIME函数异步修改state的时间值
    Time(content){
        let timer = setInterval(()=>{
            //最后一题提交停止定时器
            if(content.state.answerid.length == content.state.itemDetail.length){
                clearInterval(timer);
                return;
            }
            //开启定时器
            content.commit('REMBER_TIME',++content.state.allTime);
        },1000)
    }
    
}