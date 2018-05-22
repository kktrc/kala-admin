/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get } from './tools';
import * as config from './config';
var qs = require('qs');

const Api = 'http://111.231.82.81:8081';
const localhost = 'http://localhost:8081';


export const getPros = () => axios.post('http://api.xitu.io/resources/github', {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
}).then(function (response) {
    console.log(response.data)
    return response.data;
}).catch(function (error) {
    console.log(error);
});


export const login = (userName, password) => axios.post(Api + '/v1/login', qs.stringify({
    userName: userName,
    password: password
})).then(function (response) {
    console.log(response.data);
    return response.data;
}).catch(function (error) {
    console.log(error);
})

export const addMenu = (menu) => axios.post(Api + '/v1/menu/add', menu)
    .then( function (resp) {
        console.log(resp);
        return resp.data;
    })
    .catch(function(error) {
        console.log(error)
    });



export const fetchMenu = () => axios.get(Api + '/v1/menu/fetchMenus')
    .then(function (resp) {
        return resp.data;
    })
    .catch(err => {
        console.log(err);
    });


export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
export const gitOauthLogin = () => axios.get(`${GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin`);
export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '792cdcd244e98dcd2dee',
    client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:3006/', state: 'reactAdmin'}, code: code}, {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));
export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: config.MOCK_AUTH_VISITOR});