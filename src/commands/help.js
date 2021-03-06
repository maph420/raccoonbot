const disc = require('discord.js');
const typing = require('../functions/typingTime.js');

module.exports = {
	name: 'help',
	description: 'Devuelve todos los comandos disponibles para raccoon bot',
	execute(message, args) {
        const raccoonBotHelpEmbed = {
            color: 0x964B00,
            title: '🦝 Raccoon Bot Help 🦝',
            description: '➝ Made by maph',
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/676993677704298519/867591197278208040/E6rsinSXsAYd9qh.jpg',
            },
            fields: [
                {
                    name: '%raccoon',
                    value: 'Mapache aleatorio!',
                },

                /* empty field */
                /*{
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },*/

                {
                    name: '%saluda',
                    value: 'Raccoon Bot te saluda',
                },
                {
                    name: '%react',
                    value: 'Reaccionar con un mapache',
                },
                {
                    name: '%factorial x',
                    value: 'Factorial del numero x pedido',
                },
                {
                    name: '%hora',
                    value: 'Devuelve la hora actual [GMT-3]',
                },
                {
                    name: '%tequiero',
                    value: '???',
                },
                {
                    name: '%nsfw',
                    value: 'No lo hagas porfa.',
                },
            ],
            timestamp: new Date(),
        };
        typing.typingTime(message,800);
        message.channel.send({ embed: raccoonBotHelpEmbed });
	},
};



