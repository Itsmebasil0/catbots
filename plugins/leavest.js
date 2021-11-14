/* Copyright (C) 2021 itsmebasil.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
CATBOT*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Photo ittit adiyil url enn mention idu\n🌝"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand(
  { pattern: "url", fromMe: true, desc: Lang.URL_DESC },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video)
    )
      return await message.sendMessage(Lang.URL_NEED_REPLY);
    if (message.reply_message.length > 10)
      return await message.sendMessage("*Only accept below 10 MB*");
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "url"
    );
    let url = await UploadToImgur(location);
    return await message.sendMessage(url, { quoted: message.data });

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand(
  { pattern: "url", fromMe: true, desc: Lang.URL_DESC },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.image && !message.reply_message.video)
    )
      return await message.sendMessage(Lang.URL_NEED_REPLY);
    if (message.reply_message.length > 10)
      return await message.sendMessage("*Only accept below 10 MB*");
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "url"
    );
    let url = await UploadToImgur(location);
    return await message.sendMessage(url, { quoted: message.data });

  }));

}
