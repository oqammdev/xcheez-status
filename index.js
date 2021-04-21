const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", async()=>{
   console.log("ready")
})
client.on("message", async(message)=>{
   
   const guild = client.guilds.cache.get("792520918312288297")





const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("Bots Status")
client.users.cache.filter(u => u.bot === true).forEach(bot => embed.addField(bot.username, bot.presence.status === "online"?"**🟢ONLINE**":"**🔴OFFLINE**"))
   
   let msg = await message.channel.send(embed)
   
   setInterval(function(){
      msg.edit(embed)
   }, 5000)


})
client.login(process.env.token)
