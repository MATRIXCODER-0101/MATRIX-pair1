const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function PairCode() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Ubuntu", "Chrome", "20.0.04" ],
             });
             if(!sock.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await sock.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            sock.ev.on('creds.update', saveCreds)
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionsock = fs.readFileSync('./session/creds.json');
                    
				const sockses = await sock.sendMessage(sock.user.id, { document: sessionsock, mimetype: `application/json`, fileName: `creds.json` });
				
               
				await sock.sendMessage(sock.user.id, { text: `*THE ULITMATE CREDS.JSON GENERATOR*\n*you have used pairing method*\n> YOU HAVE SUCCESSFULLY COMPLETED YOUR FIRST STEP\n> NOW UPLOAD YOUR CREDS.JSON ON YOUR FORKED BOT GITHUB REPO\n____________________________________\n╔════◇\n║『 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍』\n\n║ ❒ Mr Gmax: _https://wa.me/255622053093_\n║ ❒ Mr Lzack: _https://wa.me/255734980103_\n\n╚════════════════════❒\n╔═════◇\n║ 『••• OWNER INFO •••』\n║ ❒ Gmax: _https://wa.me/255622053093_\n║ ❒ Lazack: _https://wa.me/255734980103_\n> fork the following repo\n║ ❒ Repo 1: _https://github.com/Gmaxhacker1/GCYBER-Md-v1_\n║ ❒╚════════════════════╝ \n*Gmax tech*\n*lazack tech inc*\n___________________________________` }, {quoted: sockses});
        await delay(100);
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    PairCode();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await PairCode()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
