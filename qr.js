const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Gmax_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GCYBER_BOT_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Gmax_Tech = Venocyber_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Gmax_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Gmax_Techr.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Venocyber_Tech.sendMessage(Qr_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });
	
				   let GCYBER_BOT_TEXT = `
*_Qr Code By Gmax Tech_*
*_Made With 🤍_*
______________________________________
*_Pair Code Connected by Gmax Tech_*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN 𝑮𝑪𝒀𝑩𝑬𝑹 𝑩𝑶𝑻 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@JASTINMTEWA-vn9pl_
║❒ *Owner:* _https://wa.link/kho6x6_
║❒ *Repo:* _https://github.com/Gmaxhacker1/GCYBER-Md-v1_
║❒ *WaGroup:* _https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x_
║❒ *Plugins:* _https://github.com/Gmaxhacker1/GCYBER-Md-v1_
╚══════════════════════╝ 
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Gmax_Tech.sendMessage(Qr_Code_By_Gmax_Tech.user.id,{text:Gcyber_BOT_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Gmax_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					VENOCYBER_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GCYBER_BOT_QR_CODE()
});
module.exports = router
