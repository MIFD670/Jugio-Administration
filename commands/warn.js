const roblox = require("noblox.js");
const discord = require("discord.js");

exports.run = async (client, message, args, config) => {
  const Imcoreectperms = new discord.MessageEmbed()
    .setTitle("Incorrect perms")
    .setColor("GREEN")
    .setDescription(
      `You are the same or lower rank then the user you want to ban, Or you have no perms!`
    );
  if (message.member.roles.cache.has(config.discordbotcmdsrole)) {
    let user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        let banner = message.author;
        let reason = args.slice(1).join(" ") || "N/A";
        const baninfo = new discord.MessageEmbed()
          .setTitle("Warn conf.")
          .setColor("GREEN")
          .setDescription(`Are you sure you would like to warn <@${user.id}>? `)
          .addField("Warn reason:", reason, true)
          .addField("User to be warned:", `<@${user.id}>`, true);
        const uhavebeenbaned = new discord.MessageEmbed()
          .setTitle("You have been warned!")
          .setColor("GREEN")
          .setDescription(
            `Hello <@${user.id}>, You have Warned read this embed for more info! `
          )
          .addField("Warn reason:", reason, true)
          .addField("Warner:", `<@${banner.id}>`, true);

        const Ihavebanned = new discord.MessageEmbed()
          .setTitle("I have Warned!")
          .setColor("GREEN")
          .setDescription(`I have Warned <@${user.id}>. `)
          .addField("Warn reason:", reason, true)
          .addField("User warned:", `<@${user.id}>`, true);
        const error = new discord.MessageEmbed()
          .setTitle("There has been a error.")
          .setColor("GREEN")
          .setDescription(
            `There has been a un known error, Please check the bot owner to check logs..`
          );
        const cancel = new discord.MessageEmbed()
          .setTitle("Canceled warn.")
          .setColor("GREEN")
          .setDescription(`I have canceled Warning`);


       
        const banlog = new discord.MessageEmbed()
          .setTitle("Discord action!")
          .setColor("GREEN")
          .setDescription(`A discord action has been taken!`)
          .addField("Action type:", "warn", true)

          .addField("Warn reason:", reason, true)
          .addField("User warned:", `<@${user.id}>`, true)
          .addField("Warner:", `<@${user.id}>`, true);

        const msg = await message.channel.send(baninfo);
        msg.react("✅");
        msg.react("❌");

        const filter = (reaction, user) => {
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };

        msg
          .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === "✅") {
              user.send(uhavebeenbaned)
              msg.edit(Ihavebanned);
              if (config.discordmodlogs === "true") {
                message.guild.channels.cache
                  .get(config.discordmodlogschannel)
                  .send(banlog);
              }
            } else {
              msg.edit(cancel);
            }
          });
      }
    }
  } else {
    message.channel.send(Imcoreectperms);
  }
};
