import Mock from 'mockjs'

// const dataList = []; //列表数据

const dataList = {
  'orders|100':[{ // 随意选取100条数据
    "_id|+1": 1, // id 自增
    "name": "@cname",// 自定义姓名
    "orderDate":"@datetime", //自定义创建时间
    "status":"created", // 在三种状态里随机
    "shippingFee": "@float(0,8,0,2)",
    "total": "@float(8, 100, 0, 2)"
  }]
}
// url  ==   node api url
Mock.mock('/api/orders', 'post', dataList)

// 假数据生产  

export default Mock;
