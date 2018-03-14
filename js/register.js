(function() {


$(function() {
   
    $("#register-btn").on("click",function() {
        var  username =$("#username").val().trim();
        var job_number = $('#job_number').val().trim();
        var telephone = $('#telephone').val().trim();

        if(username == '' || job_number == '' || telephone == ''){          
            layerOpen("信息填写不完整，请核对..");
            return false;   
        } 
        if (!checkNumber(job_number)) {
            layerOpen('请输入有效的工号');
            return false;         
        } 

        if (!checkPhone(telephone)) {
            layerOpen('请输入有效的手机号码');
             return false;   
        }

      
       /* 传递数据*/
        $.ajax({
            cache: true,
            type: "POST",
            url: "register.php",
            data: $('#register').serialize(),   // form的id
            async: false,
            success: function (data) {
                alert("注册成功！");
            },
            error: function (err) {
                console.error(err);
                alert("注册失败");
            }      
        });

    }) 

})



function checkNumber(number) {   // 检验工号
    //  只能输入数字
    var reg = /^[0-9]*$/;    
    if(!reg.test(number)) 
    {            
        return false;
    }
    return true;
}

function checkPhone(phone) {   // 检验手机号码
    //  验证130-139,140-149,150-159,180-189号码段的手机号码
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    if(!myreg.test(phone)) 
    {            
        return false;
    }
    return true;
}




})()










   


    
  