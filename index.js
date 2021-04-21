const Discord = require("discord.js")
let webhook = new Discord.WebhookClient(process.env.id, process.env.secret)
let client = new Discord.Client()

client.on("ready", async()=>{
   console.log("ready")
   
   let guild = client.guilds.cache.get("792520918312288297")


const xcheez0 = guild.members.cache.get("768603762851840012").user
const xcheez1 = guild.members.cache.get("773991344813244417").user
const xcheez2 = guild.members.cache.get("760785837188448306")


const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("Bots Status")
.addField("XcHeeZ Bot", xcheez0.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
.addField("XcHeeZ Utilities", xcheez1.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")
.addField("XcHeeZ Generators", xcheez2.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**")

webhook.send(embed).then(msg =>{
   setInterval(function(){
       msg.edit(embed)
    }, 5000)
})

})
client.login(process.env.token)
