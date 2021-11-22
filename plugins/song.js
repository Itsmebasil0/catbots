const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'song', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\nEda eda, mandankonappi.. Nee enne kooduthal mandan aakkatheda\n";
r_text[1] = "pucha sirne tholpikkaan ningalkavilla. Jeevitathil puchasirne tholpichittundu… palarum… palavattom…😥😥 aarellum aaa sed bgm onn iduo...";
r_text[2] = "enik nine ishtam ayi i love you 😘";
r_text[3] = "Puchasir yudhangal Company Kanan Povunnatheyuloo";
r_text[4] = "hi, how are you";
r_text[5] = "ennikk korch rest theroo...🥵🥵";
var i = Math.floor(43*Math.random())

await message.sendMessage(r_text[i]);

}));
