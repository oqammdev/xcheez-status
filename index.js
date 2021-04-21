require("dotenv").config()
const Discord = require("discord.js")
let webhook = new Discord.WebhookClient(process.env.id, process.env.token)
let client = new Discord.Client()
client.login(process.env.bottoken)
let xcheezbot = client.users.resolve("768603762851840012")
let xcheezutils = client.users.resolve("773991344813244417")
let xcheezgens = client.users.resolve("760785837188448306")


let embed = new Discord.MessageEmbed()
.setColor("BLUE")
.addField("XcHeeZ Bot", xcheezbot.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
.addField("XcHeeZ Utilities", xcheezutils.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
.addField("XcHeeZ Generators", xcheezgens.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")

webhook.send(embed).then(msg =>{
    setInterval(function(){
        msg.edit(embed)
    }, 5000)
})