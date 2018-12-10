//加载模块
const express = require("express");
const pool = require("./pool");
//创建express对象
var  app = express();
//服务器node.js  允许跨域访问配置项
//2.1引入跨越模块
const  cors = require("cors");
//指定静态目录
app.use(express.static(__dirname+ "/public"));
//绑定监听端口
app.listen(3000);

/*功能一 :轮播图*/
app.get('/imagelist',(req,res)=>{
    var obj = [
        {id:1,img_url:"http://172.163.9.81:3000/img/lunbo01.jpg"},
        {id:2,img_url:"http://172.163.9.81:3000/img/lunbo02.jpg"},
        {id:3,img_url:"http://172.163.9.81:3000/img/lunbo03.jpg"},
        {id:4,img_url:"http://172.163.9.81:3000/img/lunbo04.jpg"},
        {id:5,img_url:"http://172.163.9.81:3000/img/lunbo05.jpg"},
        {id:6,img_url:"http://172.163.9.81:3000/img/lunbo06.jpg"},
    ];
    res.send(obj);
})
app.get('/products',(req,res)=>{
    var obj = [
            { id: 1, img_url: "http://172.163.9.81:3000/img/zhansi01.jpg", title: "平安夜", price: "328/2.0磅", come: "一层新雪下，肉桂与松子的香气腻散开来" },
            { id: 2, img_url: "http://172.163.9.81:3000/img/zhansi02.jpg", title: "小重组", price: "298.0", come: "均一，轻褐的千层酥，三种“重组可能”" },
            { id: 3, img_url: "http://172.163.9.81:3000/img/zhansi03.jpg", title: "杰瑞", price: "298/2.0磅", come: "新西兰奶油奶酪作主料，还原简单、愉快的乳香。" },
            { id: 4, img_url: "http://172.163.9.81:3000/img/zhansi04.jpg", title: "黑白巧克力慕斯（千阳号）", price: "358/2.0磅", come: "21cake | One Piece“千阳号”浮出水面！" },
            { id: 5, img_url: "http://172.163.9.81:3000/img/zhansi05.jpg", title: "百利甜情人", price: "298/2.0磅", come: "爱尔兰百利甜酒/新西兰奶油/云南玫瑰甘露" },
            { id: 6, img_url: "http://172.163.9.81:3000/img/zhansi06.jpg", title: "芒果奶油", price: "298/2.0磅", come: "坚持自然成熟，应季鲜切芒果”" },
            { id: 7, img_url: "http://172.163.9.81:3000/img/zhansi07.jpg", title: "榴莲飘飘", price: "298/2.0磅", come: "丰厚乳脂奶油，打入足量榴莲果肉”" },
            { id: 8, img_url: "http://172.163.9.81:3000/img/zhansi08.jpg", title: "（彼尔德）黑白巧克力", price: "298/2.0磅", come: "白巧克力慕斯的甜，与底部黑巧克力酱的苦”" },
            { id: 9, img_url: "http://172.163.9.81:3000/img/zhansi09.jpg", title: "冻慕斯与焗芝士", price: "298/2.0磅", come: "新鲜奶油慕斯，轻盐味，丰富甜”" },
            { id: 10, img_url: "http://172.163.9.81:3000/img/zhansi10.jpg", title: "(撒粉生日)黑白巧克力慕斯", price: "198/2.0磅", come: "口感冰凉细腻，白巧克力慕斯的甜”" },
    ];
    res.send(obj);
})

/*商品列表 */
app.get('/productList',(req,res)=>{
    var obj = [
            { id: 1, img_url: "http://127.0.0.1:3000/img/price01.jpg", etitle: "Bailey's Love Triangle",ztitle:"百利甜情人", price: "328/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 2, img_url: "http://127.0.0.1:3000/img/price02.jpg", etitle: "Black and White Chocolate Mousse",ztitle:"黑白巧克力慕斯", price: "328/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 3, img_url: "http://127.0.0.1:3000/img/price03.jpg", etitle: "Rum Cheese Cake",ztitle:"朗姆芝士", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 4, img_url: "http://127.0.0.1:3000/img/price04.jpg", etitle: "Silent Night ",ztitle:"平安夜", price: "328/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 5, img_url: "http://127.0.0.1:3000/img/price05.jpg", etitle: "Bailey's Love Triangle",ztitle:"小重组（迷迭香套组）", price: "398/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 6, img_url: "http://127.0.0.1:3000/img/price06.jpg", etitle: "Minty White",ztitle:"清境", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 7, img_url: "http://127.0.0.1:3000/img/price07.jpg", etitle: "Black Label ",ztitle:"黑方", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 8, img_url: "http://127.0.0.1:3000/img/price08.jpg", etitle: "Black and White Chocolate Mousse",ztitle:"黑白巧克力慕斯（千阳号）", price: "358/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 9, img_url: "http://127.0.0.1:3000/img/price09.jpg", etitle: " A Picture of Durian Grey ",ztitle:"榴莲飘飘", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 10, img_url: "http://127.0.0.1:3000/img/price10.jpg", etitle: "Cool&Hot ",ztitle:"冻慕斯与焗芝士", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 11, img_url: "http://127.0.0.1:3000/img/price11.jpg", etitle: "Teatime",ztitle:"浅草", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 12, img_url: "http://127.0.0.1:3000/img/price12.jpg", etitle: "Chestnut Cream",ztitle:"（新）栗蓉暗香", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 13, img_url: "http://127.0.0.1:3000/img/price13.jpg", etitle: "Pine Stone Cowboy",ztitle:"松仁淡奶（木糖醇）", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 14, img_url: "http://127.0.0.1:3000/img/price14.jpg", etitle: "Mango Cream Cake",ztitle:"芒果奶油蛋糕", price: "198/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 15, img_url: "http://127.0.0.1:3000/img/price15.jpg", etitle: "Pine Stone Cowboy",ztitle:"松仁淡奶", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 16, img_url: "http://127.0.0.1:3000/img/price16.jpg", etitle: "Wall&Tree",ztitle:"东方栗融", price: "490/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 17, img_url: "http://127.0.0.1:3000/img/price17.jpg", etitle: "The Nut Job Big ",ztitle:"布莱克", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 18, img_url: "http://127.0.0.1:3000/img/price18.jpg", etitle: "Hickory Snow",ztitle:"核桃斯诺", price: "298/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 19, img_url: "http://127.0.0.1:3000/img/price19.jpg", etitle: "Brownie Cake ",ztitle:"布朗尼", price: "328/2.0磅", img_biao: "http://127.0.0.1:3000/img/xingpin.jpg" },
            { id: 20, img_url: "http://127.0.0.1:3000/img/price20.jpg", etitle: "Café Mocha",ztitle:"摩卡", price: "398/2.0磅", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 21, img_url: "http://127.0.0.1:3000/img/price21.jpg", etitle: "Brazil Coffee",ztitle:"巴西挂耳咖啡", price: "10/包", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 22, img_url: "http://127.0.0.1:3000/img/price22.jpg", etitle: "Yirgacheffe Coffee ",ztitle:"耶加雪菲挂耳咖啡", price: "10/包", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 23, img_url: "http://127.0.0.1:3000/img/price23.jpg", etitle: "Sidamo Coffee",ztitle:"摩卡", price: "西达摩挂耳咖啡", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 24, img_url: "http://127.0.0.1:3000/img/price24.jpg", etitle: "Papua New Guinea Coffee",ztitle:"巴布亚新几内亚挂耳咖啡", price: "10/包", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 25, img_url: "http://127.0.0.1:3000/img/price25.jpg", etitle: "Brazil Coffee",ztitle:"巴西挂耳咖啡盒装", price: "100/包", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 26, img_url: "http://127.0.0.1:3000/img/price26.jpg", etitle: "Hokkaido-style Toasts",ztitle:"北海道吐司(4片)", price: "9.9/份", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 27, img_url: "http://127.0.0.1:3000/img/price27.jpg", etitle: "蓝莓丹麦",ztitle:"", price: "9.9/份", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 28, img_url: "http://127.0.0.1:3000/img/price28.jpg", etitle: "阳光葡萄卷",ztitle:"", price: "15.8/份", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 29, img_url: "http://127.0.0.1:3000/img/price29.jpg", etitle: "卜壳吐司（2片）",ztitle:"", price: "8.8/一份", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            { id: 30, img_url: "http://127.0.0.1:3000/img/price30.jpg", etitle: "Brazil Coffe红糖红枣桂圆软欧e",ztitle:"", price: "9.9/一份", img_biao: "http://127.0.0.1:3000/img/renqi.jpg" },
            
            
    ];
    res.send(obj);
})