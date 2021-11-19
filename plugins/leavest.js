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

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*create Basil sir*
*To check update .update   To update Bot .update now*

*Bot making video : https://youtu.be/qYEbUAywStQ*

*Yt_PASSWORD: _________(password on this video watch it full)*

*githublink : https://github.com/itsmebasil0/catbots*

*audio commads : https://github.com/itsmebasil0/catbots/tree/master/uploads*
`}) 

}));
