const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*COMMANDS FOR SETTING HEROKU CONFIG VARS*"
 const code = "*sᴇᴛᴠᴀʀ ᴄᴏᴍᴍᴀɴᴅs*\n\n*.setvar SUDO:91xxxxxxxxx,0 ᴛᴏ sᴇᴛ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ ᴛᴏ sᴜᴅᴏ*\n\n*.setvar ALIVE_MESSAGE:ᴛᴏ sᴇᴛ ᴀʟɪᴠᴇ ᴍᴇssᴀɢᴇ*\n\n*.setvar ALL_CAPTION:ᴛᴏ ᴄʜᴀɴɢᴇ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ ᴄᴀᴘᴛɪᴏɴ*\n\n*. setvar BAN_MESSAGE:ᴛᴏ sᴇᴛ ʙᴀɴ ᴍᴇssᴀɢᴇ*\n\n*.setvar BOT_NAME:ᴛᴏ sᴇᴛ ʙᴏᴛ ɴᴀᴍᴇ*\n\n*.setvar KICKME_MESSAGE:ᴛᴏ sᴇᴛ ᴋɪᴄᴋᴍᴇ ᴍᴇssᴀɢᴇ*\n\n*.setvar MUTE_MESSAGE:ᴛᴏ sᴇᴛ ᴍᴜᴛᴇ ᴍᴇssᴀɢᴇ*\n\n*.setvar OWNER_NAME:ᴛᴏ ᴄʜᴀɴɢᴇ ᴏᴡɴᴇʀ ɴᴀᴍᴇ*\n\n*.setvar PROMOTE_MESSAGE:ᴛᴏ ᴄʜᴀɴɢᴇ ᴘʀᴏᴍᴏᴛᴇ ᴍᴇssᴀɢᴇ*\n\n*.setvar TAG_HEADER:ᴛᴏ ᴄʜᴀɴɢᴇ .ᴛᴀɢᴀʟʟ ʜᴇᴀᴅᴇʀ*\n\n\n\n\n\n*ᴛʀᴜᴇ ᴀɴᴅ ғᴀʟsᴇ*\n\n\n\n*trᴜe=on*\n\n*false=off*\n\n\n\n*.setvar ALL_LINK_BAN:*\n\n*.setvar ANTİ_LİNK:*\n\n*.setvar AUTO_BİO:*\n\n*.setvar BGM_FILTER:*\n\n*.setvar BLOCK_CHAT:*\n\n*.setvar DEBUG:*\n\n*.setvar FULL_EVA:*\n\n*.setvar NO_LOG:*\n\n*.setvar NO_ONLINE:*\n\n*.setvar SEND_READ:*\n\n*.setvar STICKER_REPLY:*\n\n*.setvar THERI_KICK:*\n\n\n\n *WORK TYPE CHANGE MEATHEAD*\n\n*.setvar WORK_TYPE:private*\n\n*.setvar WORK_TYPE:public*\n\n *എളുപ്പവഴി*\n\n*.mlink on/off*\n\n*.theri no/yes*\n\n*.fulleva on/off*\n\n\n\n\n\n\n\n*ᴛᴀᴜʀᴜs-ʙᴏᴛ*\n\n*ᴀʟʟ ᴄʀᴇᴅɪᴛ ᴛᴏ ᴍᴜʜᴀᴍᴍᴇᴅ*" 
{
    
      Asena.addCommand({pattern: 'setvar', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
  }

    
