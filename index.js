const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.once("ready", () => {
    console.log("Pronto!")
});

client.on("guildMemberAdd", async member => {
    let guild = client.guilds.cache.get("979119997349662730")
    let role = guild.roles.cache.get("979119997349662737")
    await member.roles.add(role.id)
})
client.on("message", async message => {
    if (message.content == "*createtestserver") {
        const Guild = await client.guilds.create("Destroy Me", {
            channels: [
                {"name": "welcome"},
            ]
        });

        const GuildChannel = Guild.channels.cache.find(channel => channel.name == "welcome");
        const Invite = await GuildChannel.createInvite({maxAge: 0, unique: true, reason: "Testing."});
        message.channel.send(`**WHEN YOU JOIN THE SERVER WAIT 5 SECONDS**\nDestroy this server: ${Invite.url}`);
        async function inizia() {
            await dormi(5000);
            GuildChannel.send("channels")
        }
          
          function dormi(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
        }
	    inizia()
    } else if (message.content === `channels` || message.content === `canali`) {
		if (message.guild.id === "979119997349662730") return message.reply("Use this command in **your** generated server!")
		message.channel.delete();
        for (var i = 0; i < 112; i++) {
            message.guild.channels.create('got-hacked')
            console.log(`[+] Channel Created`)
        }
        async function init() {
            await sleep(20000);
            message.guild.delete();
        }
          
          function sleep(ms) {
            return new Promise((resolve) => {
              setTimeout(resolve, ms);
            });
        }
	    init()
    };
});
process.on('unhandledRejection', error => {
    return console.log('[+] Server Destroyed');
    
});

client.login(config.token)