const cookie = 'JSESSIONID=139317F909AD298996687634803FB18D';

// 签到 URL
const checkinUrl = "https://newdrugs.dxy.cn/app/user/mission/sign/new?mc_sign=d374c7198f94fb4bdad4fbcf8310e6a18a763d4d&noncestr=39962308&timestamp=1680438344107";

// 发送签到请求，带上 cookie
$http.get({
  url: checkinUrl,
  headers: {
    "Cookie": cookie
  }
}, function(resp) {
  if (resp.statusCode == 200) {
    console.log("Checkin success");
    // 推送签到成功消息
    $exec('node ./sendNotify.js "' + '签到成功' + '" "' + '签到成功' + '"');
  } else {
    console.log(`Checkin failed: ${resp.statusCode}`);
    // 推送签到失败消息
    $exec('node ./sendNotify.js "' + '签到失败' + '" "' + '签到失败' + '"');
  }
});
