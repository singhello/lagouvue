import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        isShow:true,//是否显示header和footer
        showBack:false,//显示回退按钮
        isShowCity:false,//显示city组件
        city:"全国",//搜索Search组件里面的默认城市
        title:"拉勾网"
    },
    getters:{},
    mutations:{
        showMutation(state,payload){
            state.isShow = !state.isShow;
        },
	    changeMutation(state){
            state.isShow = false;
        },
        showHeader(state){
            state.isShow = true;
        },
        // showBack(state,data){
        //     state.showBack = data;
        // },
        showCity(state){
            state.isShowCity = true;
            state.showBack = true;
        },
        back(state){
            state.showBack = false;
            state.isShowCity = false;
        },
        changeCity(state,item){
            state.city = item;
            state.showBack = false;
            state.isShowCity = false;
        },
        changeTitle(state){
            state.title = "职位详情";
        },
        disChangeTitle(state){
            state.title = "拉勾网";
        }
    },
    actions:{
        showAction({commit},payload){
            commit("showMutation");
        },
        changeAction({commit}){
	    	commit("changeMutation");
        },
        showHeader({commit}){
            commit("showHeader");
        },
        // showBack({commit},data){
        //     commit("showBack",data);
        // },
        showCity({commit}){
            commit("showCity");
        },
        back({commit}){
            commit("back");
        },
        changeCity({commit},item){
            commit("changeCity",item)
        },
        changeTitle({commit},item){
            commit("changeTitle");
        },
        disChangeTitle({commit}){
            commit("disChangeTitle")
        }
    },
    modules:{},
});

export default store;
