const Discord = require("discord.js")
let webhook = new Discord.WebhookClient(process.env.id, process.env.secret)
let client = new Discord.Client()


const xcheezbot = client.users.cache.get("768603762851840012")
const xcheezutils = client.users.cache.get("773991344813244417")
const xcheezgens = client.users.cache.get("760785837188448306")


//let embed = new Discord.MessageEmbed()
//.setColor("BLUE")
//.addField("XcHeeZ Bot", xcheezbot.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
//.addField("XcHeeZ Utilities", xcheezutils.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
//.addField("XcHeeZ Generators", xcheezgens.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")

//webhook.send(embed).then(msg =>{
   // setInterval(function(){
      //  msg.edit(embed)
   // }, 5000)
//})

client.login(process.env.token)
