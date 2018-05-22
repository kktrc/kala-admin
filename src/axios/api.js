import { get, post } from './tools';
import { Api, localhost } from './constant';
import { createHashHistory } from 'history'
import axios from 'axios';
import { message } from 'antd';

const history = createHashHistory()

/**
 * 
 * 获取菜单
 */
// export const fetchMenu = () => get({
//     url: Api + '/v1/menu/fetchMenus'
// })
// .then(function(resp) {
//     console.log(resp)
//     if (resp) {
//         if (resp.code == 403) {
//             console.log("未登录跳转到登录页面");
//             history.push('/login');
//         }
//     }
//     return resp.data;
// })
// .catch(function(error) {
//     console.log(error);
// });

export const fetchMenu = () => axios.get(Api + '/v1/menu/fetchMenus')
    .then(res => res.data)
    .catch(err => {
        console.log(err);
        message.warn('网络异常');
    });


/**
 * 获取门店
 */
export const getShops = () => get({
    url: Api + '/api/shop/getAll'
}).then(function (resp) {
    console.log(resp.data);
    return resp.data;
}).catch(function (error) {
    console.log(error);
});


