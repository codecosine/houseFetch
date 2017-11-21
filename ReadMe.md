## 简介
一个爬虫
nodejs+axios+cheerio+mysql
### 数据结构初版

``` javascript
/**
 * house
 */
var house = {
    houseId: '房屋Id',// 由地址栏最后的数字,*主键
    title: '标题',
    address: '房屋地点',
    price: '价格', // 时间维度怎么做
    score: '评分',
    info1: '面积户型',
    info2: '宜居人数',
    info3: '家具情况',
    info4: '个性描述',
    info5: '内部情况',
    info6: '交通情况',
    info7: '周边情况',
    info8: '配套设施',
    info9: '入住须知',
    //
    landlord: '',//房东 id? 外键1
}
/**
 * landlord
 */
var landlord = {
    landlordId: '',// *
    username: '昵称',
    avatar: '头像图片地址',// 图片全部是懒加载，暂时未定是抓地址还是抓图
    authName: '实名认证',// true/false
    authPhone: '手机认证',// true/false
    authAvatar: '头像真人认证',// true/false
    authZima: '600',//芝麻信用分
    sex: '',
    age: '',
    constellation:'星座',
    zodiac: '生肖',
    home:'故乡',
    bloodType:'血型',
    job: '职业',
    education: '学历',
    onlineReply:'在线回复率',
    perConfirm:'平均确认率',
    orderSuccess:'订单接受率',
}

/**
 * tenant 租客
 */
var tenant = {
    id: '',
    username: '昵称',
    registerTime: '注册时间',
    avatar: '头像图片地址',
    authName: '实名认证',// true/false
    authPhone: '手机认证',// true/false
    authAvatar: '头像真人认证',// true/false,
    // 下面的情况会出多表
    evaluations: [{

    }],// 租客历史评价信息
}

/**
 * evaluation
 * 评价信息
 */
var evaluation = {
    id: '',
    houseId: '',
    tenantId: '评价者',
    content: '评价内容',
    time: '入住时间',
    reply: '房东回复',
}
// 房源信息 这个会和house冲突？
var houseInfo = {
    houseId: '通过链入的url尾部id',
    evaluationNum: '评价数',
    bookNum: '预定数',
    subTime: '发布时间'
},// 拥有的房源
//evaluation 冲突？
var houseEvaluations = {
    id: '',
    houseId: '',
    tenantId: '评价者',
    content: '评价内容',
    time: '入住时间',
    reply: '房东回复',   
},
var houseDiary = {
    title: '标题',
    des: '简略内容',
    subTime: '发布时间',
    read: '',
    comment: '',
    love: '',
],// 日记
```
