/*
cron "0 9 * * *" yyzssign.js, tag=用药助手签到
*/

const axios = require('axios')
const COOKIE=`yyzsCookie`
const notify = require('./sendNotify')
// 签到
function signIn(){
    return `
     curl 'https://newdrugs.dxy.cn/app/user/mission/sign/new?mc_sign=d374c7198f94fb4bdad4fbcf8310e6a18a763d4d&noncestr=39962308&timestamp=1680438344107' \
        -H "Host: newdrugs.dxy.cn" \
        -H "Cookie: JSESSIONID=139317F909AD298996687634803FB18D" \
        -H "accept: application/json; charset=utf-8" \
        -H "user-agent: dxyapp_name/drugs dxyapp_ac/4124c5f1-1029-4fda-b06f-a87ac5ad8d11 dxyapp_version/13.0.2 dxyapp_system_version/9 dxyapp_client_id/782e4057e73a408db76e55e0b4df1ef0 dxyapp_sid/519df5a9144a4cecbf7c7cf69f3d0a64 dxyapp_ac/4124c5f1-1029-4fda-b06f-a87ac5ad8d11" \
        -H "app-os: 9" -H "app-version: 13.0.2" \
        -H "app-mc: 782e4057e73a408db76e55e0b4df1ef0" \
        -H "app-ac: 4124c5f1-1029-4fda-b06f-a87ac5ad8d11" \
        -H "app-hard-name: SM-G988N" \
        -H "app-session-id: 519df5a9144a4cecbf7c7cf69f3d0a64" \
        -H "app-v-user: onyiiio" \
        -H "dxy-auth-token: TGT-150565-GbM3JmKzsF72QZpWLxCNfUpZh4GS0ajnwAN-50" \
        -H "referer: https://newdrugs.dxy.cn" \
        -H "app-mt: Samsung%2BSM-G988N" \
        -H "content-type: application/x-www-form-urlencoded" 
        --data-binary "" 
        --compressed "https://newdrugs.dxy.cn/app/user/mission/sign/new?mc_sign=d374c7198f94fb4bdad4fbcf8310e6a18a763d4d&noncestr=39962308&timestamp=1680438344107"
        `
}

function logic(){
    try {
        const res= JSON.parse(shell.exec(signIn(),{silent:true})) 
        // 1. 签到成功 err_no为0表示签到成功 err_no为15001为重复签到
              
    } catch (error) {
        // 2. 如果自动签到失败，发送一封邮件通知自己
        await notify.sendNotify(`用药助手签到`, message.join('\n'))
    }
    
}
const  scheduleTask = ()=>{
    // 每天早上7点执行
    schedule.scheduleJob({second:0,minute:0,hour:7},()=>{
        logic()
    }); 
}

;(function(){
    scheduleTask()
}())

