## 简介
一个爬虫
nodejs+axios+cheerio+mysql

### 爬虫循环队列

入口(房子)=>>房东
1.进行 house 表的重复判断,并收集更新,无论如何进行houseHy 表的更新=>将收集房东信息的行动放进队列
2.进行 reivew 表的收集更新=>将所有收集房客的行动放进队列 => 收集并更新tenant表 => 将点评中不重复的房子放进队列
5.对landlord表进行收集更新(判断是否存在房东详情页),无论如何进行landlordHistory表的更新=>将房源信息的房子的收集行动放进队列


### 数据结构

``` javascript
/**
 * house
 */
var house = {
    houseId: '房屋Id',// 由地址栏最后的数字,*主键
    landlordId: '',
    title: '标题',
    address: '房屋地点',
    info1: '面积户型',
    info2: '宜居人数',
    info3: '家具情况',
    info4: '个性描述',
    info5: '内部情况',
    info6: '交通情况',
    info7: '周边情况',
    info8: '配套设施',
    info9: '入住须知',
}
var houseHistory = {
    id: '标志',
    houseId: '房屋Id',
    price: '价格',
    scoreAll: '评分',
    score1: '整洁卫生',
    score2: '描述相符',
    score3: '交通位置',
    score4: '安全程度',
    score5: '性价比',
    fetchTime: '抓取时间',
}
/**
 * review
 * 评价信息
 */
var review = {
    id: '',
    houseId: '评价的房子的id',
    tenantId: '评价房客id',
    content: '评价内容',
    checkInTime: '入住时间',
    reply: '房东回复',
}
/**
 * landlord
 */
var landlord = {
    landlordId: '',
    username: '昵称',
    avatar: '头像图片地址',
    authName: '实名认证',
    authPhone: '手机认证',
    authAvatar: '头像真人认证',
    authZima: '600 芝麻分',
    sex: '性别',
    age: '年龄',
    constellation:'星座',
    zodiac: '生肖',
    home:'故乡',
    bloodType:'血型',
    job: '职业',
    education: '学历',
    
}
var landlordHistory = {
    id: '',
    landlordId: '',
    houseAmount: '房源数',
    reviewAmount: '评论数',
    orderAmount: '预定数',
    onlineReply:'在线回复率',
    perConfirm:'平均确认率',
    orderSuccess:'订单接受率',
    fetchTime: '抓取时间',
}

/**
 * tenant 租客
 * 只有租客个人基本信息，通过租客来寻找更多房东
 * 这个静态字段是有波动的
 */
var tenant = {
    id: '',
    username: '昵称',
    registerTime: '注册时间',
    avatar: '头像图片地址',
    authName: '实名认证',
    authPhone: '手机认证',
    authAvatar: '头像真人认证',
    //有可能有遗漏的静态字段
}


