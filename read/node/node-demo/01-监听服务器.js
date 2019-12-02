//node监听服务器是否正常，并发送短信提醒

//引入模块
var http = require('http');
var nodemailer = require('nodemailer');

//为了方便我在自己电脑使用node起了一个端口3000的本地服务
var options = {
    hostname: 'localhost',//这里可以填入你要监控的服务器url
    port: '2026',
    path: '/',
    method: 'GET'
};
//定义服务器宕机和恢复时要发送的邮件格式
var errorOptions = {
    from: '948866419@qq.com',
    to: '1003395207@qq.com',
    subject: '工程挂掉了',
    text: '工程挂掉了,请尽快修复'
}
var restartOptions = {
    from: '948866419@qq.com',
    to: '1003395207@qq.com',
    subject: '工程恢复',
    text: '服务器已恢复'
}

var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '948866419@qq.com',
        pass: 'tbhidanpcbxibccd'  //这里的pass不是你的QQ邮箱登录密码，而是第三方授权码
    }
});

var addcheck = true;//定义一个开关
var timer = setInterval(function () {
    http.request(options, function () {
        //发送邮件的代码
        if (!addcheck) {
            //发送邮件的代码
            transporter.sendMail(restartOptions, function (error) {
                //回调函数
                if (!error) {
                    console.log("服务恢复短信发送成功");
                } else {
                    console.log(error);
                }
            })
            addcheck = true;
        }
    }).on('error', function () { //当请求网站返回错误，也就是网站不可访问时的处理代码
        if (addcheck) {
            transporter.sendMail(errorOptions, function (error) {
                //回调函数
                if (!error) {
                    console.log("服务挂掉发送成功");
                } else {
                    console.log(error);
                }
            });
            addcheck = false;
        }
    }).end();
    console.log((new Date()).toLocaleString() + ":监听运行中...");
}, 5000);