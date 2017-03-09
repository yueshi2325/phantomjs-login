var page = require('webpage').create();   //创建虚拟浏览器
page.viewportSize = { width: 1366, height: 600 };  //设置浏览器大小
var url='https://accounts.google.com/ServiceLogin#identifier'   //访问网址 google登陆链接
page.open(url, function() {
    setTimeout('setEmail()',10000);  //打开访问页面，设置延时等待空间加载
});

function setEmail(){
    ret1=page.evaluate(function() {
        var a = document.getElementById('Email');   //获取邮箱控件
        a.value = 'xxxxx@gmail.com';      //设置登陆账号
        document.getElementById('next').click();   //点击下一步
    });
    setTimeout('setPwd()',10000);
}
function setPwd(){
    page.render('email.png');    //打印当前页面
    ret2=page.evaluate(function() { 
        var b = document.getElementById('Passwd');   //获取密码控件
        b.value = 'password';                        //输入密码
        document.getElementById('signIn').click();   //点击登陆
    });
    setTimeout('openUrl()',10000)
}
function openUrl(){
    //page.render('2.png');
    ret3=page.evaluate(function() {
        window.location.href="url.xxx.com";  //跳转数据获取页面链接 
    });
    setTimeout('getData()',10000)
}

function getData(){
    //page.render('3.png');
    ret4=page.evaluate(function() {
        var data = [];

        // 数据爬取逻辑 ...
        
        return data;
    });
    console.info(JSON.stringify(ret4));  //输出返回值
    phantom.exit()
}
