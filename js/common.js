
/* 工具框架 */


/*第三方组件封装 —— web弹出层操作封装*/

// 确认框 
function  layerOpen(content){
    layer.open({
            content: content,
            btn: '确认'
    });

}

// 询问框
function layerConfirm(content, title, operate) { 
        if(!title) {
            title = "信息";
        }

        layer.confirm(content, {title: title,btn: ['确认', '取消']}, function() { 

            operate();     // 执行操作函数

            layer.msg('删除成功', {
                 icon: 1
            });  

        }, function(index) {
             layer.close(index);
        });
};  





/* 倒计时 */
function timeDown (id,count,endTime) {

    var timerTool = document.getElementById(id);

    var count = count       // 设定总时间毫秒数
    var endTime = endTime;    // 最终时间
    var timer = setInterval(clock,1000); // 开启定时器

    function clock(){

        if(count == 0) {
            clearInterval(timer);   // 清空定时器
            return false;
        }

        count -=1000;
        var second = parseInt(( count - endTime) / 1000);   // 还剩下的毫秒数
       
         // console.log(second);
         // 一小时 3600 秒
        // second / 3600  一共的小时数  /24   天数
        var h = parseInt(second / 3600  % 24);  // 小时
       // console.log(h);
        var m = parseInt(second / 60 % 60 );
        //console.log(m);
        var s = parseInt(second % 60); // 当前的秒
        // console.log(s);
        h<10 ? h="0"+h : h;
        m<10 ? m="0"+m : m;
        s<10 ? s="0"+s : s;

        timerTool.innerHTML = h+":"+m+":"+s;
    }

}

