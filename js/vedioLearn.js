 $(function() {


    /* 扩展的JQ的longPress事件 */
     $.fn.longPress = function(fn) {
        var timeout = undefined;
        var $this = this;
        for(var i = 0;i<$this.length;i++) {
            $this[i].addEventListener('touchstart', function(event) {
                timeout = setTimeout(fn, 500);  //长按时间超过800ms，则执行传入的方法
                }, false);
            $this[i].addEventListener('touchend', function(event) {
                clearTimeout(timeout);  //长按时间少于800ms，不会执行传入的方法
                }, false);
        }
    }

    /* 长按每一个li元素实现元素的样式修改 */
    $('.item').each(function(index,element){
        var that = $(element);      
        $(element).longPress(function() {
            that.css("padding-left","38px");
            that.find('.item-box2').css('display','inline-block');
        })
    })


    /* 删除节点操作*/
     $('.delete-img').each(function(index,element){
        $(element).on('click',function() {
            var that = $(this);


            layerConfirm('您真的要删除该信息吗？',"删除确认",function() {
                that.parent().parent().remove();
            })
                    
        })
        
    })


 })















 





