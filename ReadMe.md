### 数据结构初版

#### 问题
- 1.评价这个表应该在哪里抓
- 2.下面除了评价以外都是在同一个页面，爬虫对于同一个页面抓取的时间都是一致的，一部分信息是动态这个说法我不知道怎么去体现，这里每一个表都可以加上时间戳
- 3.遍历循环的方式,判断重复等一些问题，防止重复和死循环(短时间是死循环，长时间又是重新抓取)(深度优先还是广度)
- 4.数据库选择，使用mysql 或者是 nosql 的mongoDb 
``` javascript
/**
 * house
 */
var house = {
    houseId: '房屋Id',// 由地址栏最后的数字,*主键
    title: '标题',
    address: '房屋地点',
    price: '价格',//*
    info1: '面积户型',
    info2: '宜居人数',
    info3: '家具情况',
    des1: '个性描述',
    des2: '内部情况',
    des3: '交通情况',
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
    // 下面的情况会出多表
    houseInfo: [{
        houseId: '通过链入的url尾部id',
        evaluationNum: '评价数',
        bookNum: '预定数',
        subTime: '发布时间'
    }],// 拥有的房源
    houseEvaluations: [
        // 待定
    ],// 房源的历史评价
    houseDiary: [{
        title: '标题',
        des: '简略内容',
        subTime: '发布时间',
        read: '',
        comment: '',
        love: '',
    }],// 日记

}

/**
 * tenant 租客
 */
var tenant = {
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
    tenant: '评价的租房者',
    content: '评价内容',
    time: '入住时间',
    reply: '房东回复',
}
```
