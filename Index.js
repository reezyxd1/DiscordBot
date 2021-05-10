const Discord = require('discord.js')
const bot = new Discord.Client();
const PREFIX = "r!";
const TOKEN = 'Your Token here'

var version = '1.0.0';
bot.on('ready', () => {
    console.log("ON!!!!!")

    bot.user.setActivity('r!help \nDeveloped by Reezy', { type: 'WATCHING'}).catch(console.error)
})
bot.on('message', message => {
    let parts = message.content.split(" ");
   
        if (parts[0] == 'r!ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == 'r!Ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == 'r!clear') {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Dir fehlt die benötigte Berechtigung! (MANAGE_MESSAGES)')
            if(!parts[1]) return message.channel.send('Fehler, bitte zweites Argument angeben!')
            message.channel.bulkDelete(parts[1])
        }
        else if (message.content === 'r!help') {

            const help = new Discord.MessageEmbed()
            .setTitle('All Commands | Help')
            .setColor('#1aff1a')
            .addField('With r!ping you can see if im active, or offline!')
            .addField('With r!userinfo can you see the infos about this User')
            .addField('With r!say can you send a Bot message')

            
  
            message.channel.send(help)
        }
        else if (parts[0] == 'r!userinfo') {
            let userr = message.mentions.users.first() || message.author;
        
                let userinfo = {}
        
                userinfo.name = userr.username;
                userinfo.discrim = userr.discriminator;
                userinfo.id = userr.id;
                userinfo.status = userr.presence.status;
                userinfo.bot = userr.bot;
                userinfo.create = userr.createdAt;
        
                const userembed = new Discord.MessageEmbed()
                .setAuthor(userr.tag)
                .setColor("#1aff1a")
                .addField("Nutzername:", userinfo.name, true)
                .addField("#ID:", userinfo.discrim, true)
                .addField("User ID:", userinfo.id, false)
                .addField("Bot:", userinfo.bot, true)
                .setFooter(' ' + message.author.username + '#' + message.author.discriminator + ' ')
        
                return message.channel.send(userembed)
                
                
        }
        else if (parts[0] == 'r!kick') {

            if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You dont have the permisssion: KICK_MEMBERS')

            let kicked = message.mentions.members.first();
            if (!kicked) return message.channel.send('The user is not in this Server!')

            message.guild.member(kicked).kick();

            const kickemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`The user`, `${message.mentions.members.first()} has been kicked!`)
            .setFooter(`The kick was performed by ${message.author.username}#${message.author.discriminator}`)

            message.channel.send(kickemb)
        }
        else if (parts[0] == 'r!ban') {

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have the permission: BAN_MEMBERS')

            let banned = message.mentions.members.first();
            if (!banned) return message.channel.send('The user is not in this Server!')

            message.guild.member(banned).ban();

            const banemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`The user`, `${message.mentions.members.first()} has been banned!`)
            .setFooter(`The ban was performed by ${message.author.username}#${message.author.discriminator}`)

            message.channel.send(banemb)
        }
        else if (parts[0] == 'r!clear') {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have the permission (MANAGE_MESSAGES)')
            if(!parts[1]) return message.channel.send('Error, please give second argument!')
            message.channel.bulkDelete(parts[1])
        }
        else if (parts[0] == 'r!emb') {
            if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You dont have the permission (MANAGE_CHANNELS)')
            if(!parts[1]) return message.channel.send('You have to specify what the text of your embed should contain!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('#1aff1a')
            .addField(message.member.displayName + ' ', text, true)
            .setFooter(' ' + message.author.username + '#' + message.author.discriminator + ' ')

            message.channel.send(sayembed)
        }
        else if (parts[0] == 'r!anc') {
            if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You dont have the permission (MANAGE_CHANNELS)')
            if(!parts[1]) return message.channel.send('You have to specify what the text of your embed should contain!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('#1aff1a')
            .addField(message.member.displayName + ' ', text, true)
            .setFooter(' ' + message.author.username + '#' + message.author.discriminator + ' ')

            message.channel.send(sayembed)
            message.channel.send('@everyone')
        }
        else if (parts[0] == 'r!rules') {
            message.channel.send('Look in #・𝐑𝐮𝐥𝐞𝐬')
        }
        else if (parts[0] == 'r!say') {
            if(!parts[1]) return message.channel.send('You have to specify what the text of your embed should contain!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('#1aff1a')
            .addField(message.member.displayName + ' Say', text, true)
            .setFooter(' ' + message.author.username + '#' + message.author.discriminator + ' ')

            message.channel.send(sayembed)
        }
        

    })
    bot.login(TOKEN)
