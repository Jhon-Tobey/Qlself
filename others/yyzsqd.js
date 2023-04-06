
/**
 * @Tobey Template to compose HTTP reqeuest.
 * 
 */

const url = `https://newdrugs.dxy.cn/app/user/mission/sign/new?mc_sign=d374c7198f94fb4bdad4fbcf8310e6a18a763d4d&noncestr=39962308&timestamp=1680438344107`;
const method = `POST`;
const headers = {
'Accept' : `application/json; charset=utf-8, */*`,
'Origin' : `https://newdrugs.dxy.cn`,
'Accept-Encoding' : `gzip`,
'Cookie' : `JSESSIONID=139317F909AD298996687634803FB18D`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `newdrugs.dxy.cn/`,
'Connection' : `keep-alive`,
'User-Agent' : `dxyapp_name/drugs dxyapp_ac/4124c5f1-1029-4fda-b06f-a87ac5ad8d11 dxyapp_version/13.0.2 dxyapp_system_version/9 dxyapp_client_id/782e4057e73a408db76e55e0b4df1ef0`,
'Referer' : `https://newdrugs.dxy.cn`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
'app-v-user' : 'onyiiio',
'dxy-auth-token' : 'TGT-150565-GbM3JmKzsF72QZpWLxCNfUpZh4GS0ajnwAN-50',

};
const body = `{"message":"成功","code":"success","data":{"day":1,"dingDangAdd":0,"recommendMission":null,"reward":null,"signDayList":[{"day":"first","dingDangValue":1,"status":2,"type":3},{"day":"second","dingDangValue":1,"status":1,"type":3},{"day":"third","dingDangValue":1,"status":1,"type":1},{"day":"fourth","dingDangValue":6,"status":1,"type":3},{"day":"fifth","dingDangValue":1,"status":1,"type":3},{"day":"sixth","dingDangValue":1,"status":1,"type":3},{"day":"seventh","dingDangValue":1,"status":1,"type":2}],"haveSign":false,"needDoctorAuth":true,"dingDangCount":0.0,"promptSwitch":true}}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
