const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="TYPE ANYTHING"
const Ln = "▷🤖നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁ "
const code = "╔═════ TAURUS ═════╗\n\n            ❖═COMMANDS═❖\n\n*🍭.yasai       ❴text❵\n🍭.uddika    ❴text❵\n🍭.aah          ❴text❵\n🍭.sir            ❴text❵\n🍭.my3         ❴text❵\n🍭.fuck         ❴text❵\n🍭.hii             ❴text❵\n🍭.asai          ❴text❵\n🍭.hapoi       ❴text❵\n🍭.quby1    ❴text❵\n🍭.quby2    ❴text❵\n🍭.quby3    ❴text❵\n🍭.quby4    ❴text❵\n🍭.cat1    ❴text❵\n🍭.cat2    ❴text❵\n🍭.cat3    ❴text❵\n🍭.cat4    ❴text❵\n🍭.trollikka1    ❴text❵\n🍭.trollikka2    ❴text❵\n🍭.trollikka3    ❴text❵\n🍭.trollikka4    ❴text❵\n\n╚═══════════════╝\n\n▷TAURUS BOT*\n*▷©2021 MUHAMMED*"

if (Config.WORKTYPE == 'public') {

 Asena.addCommand({pattern: 'mmpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(

      message.jid,code, MessageType.text);

  }));

    Asena.addCommand({ pattern: 'my3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/3oiVAaC.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'fuck ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'hii ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'sir ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'yasai ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1ec40b3da163e0a55da66.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'hapoi ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/21b92760827dc33301a79.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'uddika ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'aah ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

Asena.addCommand({ pattern: 'asai ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

   Asena.addCommand({ pattern: 'quby1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rIz7yEg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'quby2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/rrfPeuq.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
  
   Asena.addCommand({ pattern: 'quby3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/l7ZCF3d.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'quby4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/3ohqPtW.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

   Asena.addCommand({ pattern: 'cat1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/7eDuJS9.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'cat2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/4t1sZoF.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
  
   Asena.addCommand({ pattern: 'cat3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/olnvBj7.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'cat4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/dTQ43sU.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
      Asena.addCommand({ pattern: 'trollikka1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'trollikka2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/03J0RQA.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
  
   Asena.addCommand({ pattern: 'trollikka3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/oIdcRPg.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
   
   Asena.addCommand({ pattern: 'trollikka4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);


        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://i.imgur.com/HRLF2Ri.jpeg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));

}
