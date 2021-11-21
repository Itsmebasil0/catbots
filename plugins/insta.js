const New = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios')
const LOAD_ING = "_Fetching media..._"
const insta = async (url) => {
    
  {
    pattern: "insta ?(.*)",
    fromMe: true,
    desc: Lang.INSTA_DESC,
  },
  async (message, match) => {
    match = !message.reply_message ? match : message.reply_message.text
    if (match === "" || !/instagram.com/.test(match))
      return await message.sendMessage(Lang.NEED_REPLY)
    await message.sendMessage(Lang.DOWNLOADING)
    let urls = await instagram(match)
    if (!urls) return await message.sendMessage(Lang.NOT_FOUND)
    urls.forEach(async (url) => {
      let { buffer, type } = await getBuffer(url.url || url.data)
      if (type == "image")
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.jpeg },
          MessageType.image
        )
      if (buffer !== false)
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.mp4 },
          MessageType.video
    )
  }
)

