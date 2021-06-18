import { createStore } from "@mpxjs/core";

const store = createStore({
    state: {
        routerList: [
            {
                name: 'router 路由',
                path: '/pages/display/display'
            }, {
                name: 'Image 图片',
                path: '/pages/display/display'
            }, {
                name: 'List 列表',
                path: '/pages/display/display'
            }]
    },
    mutations: {
        routerToPath(state, { index, payload }) {
            wx.navigateTo({
                url: state.routerList[index].path + "?payload=" + payload
            })
        }
    }
})
export default store