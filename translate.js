// Don't forget to install required npm packages. You have to integrate the code to your main file or command handler.
const ISO6391 = require('iso-639-1'); // npm i iso-639-1
const translate = require('@iamtraction/google-translate'); //npm i @iamtraction/google-translate
const prefix="your prefix";
async function trn(message) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    if (!args[0]) {
      return message.channel.send(`Use ${prefix}help for correct usage!`).catch((error) => {
        return;
      });
    }
    traf = args.join(" ")
    const argus = traf.slice(args[0].length)
    const argus2 = argus.replace(" ", "")

    translate(`${argus}`, { to: `${args[0]}` }).then(res => {
      translated = res.text
      const translated3 = translated.charAt(0).toUpperCase() + translated.slice(1)
      tranlatelang = res.from.language.iso
      translatelangup = ISO6391.getName(args[0])
      tranlatelanglangup = ISO6391.getName(tranlatelang)
      const traf2 = argus2.charAt(0).toUpperCase() + argus2.slice(1)
      if (traf2.length > 1024 || translated3.length > 1024) {
        message.channel.send(`**${tranlatelanglangup} to ${translatelangup} translate**\n\n ${translated} \n\n **----------------------------------**`).catch((error) => {
          return;
        });
      } else {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Google Translate")
          .setColor("#000000")
          .setThumbnail('https://cdn.discordapp.com/attachments/789864720533291058/805051261299982336/4410197cf5de4fefe413b55860bb617d.png')
          .addField(`${tranlatelanglangup}`, [
            `${traf2}`,
            '\u200b'
          ])
          .addField(`${translatelangup}`, [
            `${translated3}`,
            '\u200b'

          ])
          .setTimestamp();
        message.channel.send(embed).catch((error) => {
          return;
        });

      }


    }).catch(err => {
      return message.channel.send(`**${args[0]}** is not suppported. Check codes here \n https://cloud.google.com/translate/docs/languages `)
    });
  }
