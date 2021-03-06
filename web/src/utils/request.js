// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://home.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------


import axios from 'axios'
import Vue from 'vue'
import { HTTP_URL } from '@/configs'
import  router  from '@/router'
import { Toast } from 'vant';
import store from "../store";
import {login} from "@/utils/utils";
// 创建axios实例
const service = axios.create({
    baseURL: HTTP_URL, // api的base_url
    timeout: 10000, // 请求超时时间
    headers: {
        'content-type': 'application/json'
    },
})

// loading计算方法
let loading = null
let timer = null
let needLoadingRequestCount = 0 //正在请求网络的接口个数，大于0 并且 500毫秒内接口响应未完成时显示loading

function showFullScreenLoading () {
    Toast.allowMultiple()
    clearTimeout(timer)
    timer = setTimeout(() => {
        if (!loading && needLoadingRequestCount > 0) {
            loading = Toast.loading({
                duration: 0,       
                forbidClick: true, 
                loadingType: 'spinner',
                message: '请稍候'
            });
        }
    }, 500);
    needLoadingRequestCount ++
}

function tryHideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount --
    if (needLoadingRequestCount === 0 && loading) {
        loading.clear()
        loading = null
    }
}
let index = 0


// request拦截器
service.interceptors.request.use(
    config => {
        showFullScreenLoading()
        config.headers.token = store.state.token
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    async (response) => {
        tryHideFullScreenLoading()
        let { code, msg, show } = response.data;
        if (code == 0) {
            if (msg && show) {
                Toast({
                    message: msg,
                });
            }
        }
        if(code === -1) {
            if(index > 0) return
            index += 1
            login()
        }
        return Promise.resolve(response.data)
    },
    error => {
        tryHideFullScreenLoading()
        console.log(error)
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
