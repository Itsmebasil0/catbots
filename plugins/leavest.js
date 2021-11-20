const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/1Qs9iFf.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐁𝐀𝐒𝐈𝐋 𝐒𝐄𝐑*
*To check update .update   To update Bot .update now*

*BOT SETTING VIDEO LINK : https://youtu.be/qYEbUAywStQ*

*GITHUB LINK : https://github.com/itsmebasil0/catbots*

*AUDIO CAMMANDS : https://github.com/itsmebasil0/catbots/tree/master/uploads*

*WHATSAPP GROUP LINK : https://chat.whatsapp.com/EceyD88E4OeJwS0w8KUrsC*
`}) 

}));
