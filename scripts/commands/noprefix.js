const fs = require("fs");
module.exports.config = {
  name: "😍",
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😍")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("💑")==0 || event.body.indexOf("🫂")==0) {
		var msg = {
				body: "         KINNA SONA🖤 \n\n𝐊𝐈𝐍𝐆 _ 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐌𝐄𝐃 𝐉𝐎𝐘👑",
				attachment: fs.createReadStream(__dirname + `/noprefix/Rahad19.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
