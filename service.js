// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function () {
    let User=uni.getStorageSync('USERS_KEY').data
    
    return User?User:[]
}

const addUser = function (userInfo) {
    let users = getUsers();
    users.push(userInfo);
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

export default {
    getUsers,
    addUser
}
