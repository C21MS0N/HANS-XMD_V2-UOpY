//base by HANSTZ
//Modified by Crimson X for Kurimuzon♦️ Bot

const fs = require('fs')
const chalk = require('chalk')
require('dotenv').config()

//contact details - sensitive info moved to .env
global.SESSION_ID = process.env.SESSION_ID || "HansTz&u1h1yBAZ#TFjSA1ZCRNne_y1xW4B9hjzKPDUJF-TVUYxXIuonHJE" // fallback to default if not in .env
global.ownernomer = process.env.OWNER_NUMBER || "2349075268689"

global.ownername = process.env.OWNER_NAME || "Crimson X"

global.ytname = "Kurimuzon♦️ Official"

global.socialm = "GitHub: CrimsonX"

global.location = "NIGERIA, EARTH-616"

global.ownernumber = process.env.OWNER_NUMBER || '2349075268689'  //Owner number

global.ownername = process.env.OWNER_NAME || 'Crimson X' //owner name
global.botname = 'Kurimuzon♦️' //name of the bot

//sticker details
global.packname = 'Kurimuzon Packs'
global.author = 'Kurimuzon♦️'

//console view/theme
global.themeemoji = '🩸'
global.wm = "KURIMUZON BOT"

//theme link
global.link = 'https://wa.me/2349075268689'

//custom prefix
global.prefa = ['','.','!','#','/'] // feel free to adjust

//bot settings
global.autolikestatus = true //For auto react Status Random
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = true
global.autoread = false
global.autobio = true
global.anti91 = false
global.autoswview = true
global.autoreact = false
global.welcome = true // enable welcome message for groups

global.wagc = "https://wa.me/2349075268689";

//reply messages
global.mess = {
    done: 'Yatta~ It\'s done!',
    prem: 'Gomen, this feature is for premium users only~',
    admin: 'Only an admin can use this, senpai.',
    botAdmin: 'Bot must be admin to do that. 😤',
    owner: 'Only Kurimuzon-sama can do this!',
    group: 'This feature is group-only, baka~',
    private: 'Use this in a private chat, onegai.',
    wait: 'Processing... matte ne~',
    error: 'Oops! Error desu!',
}

global.thumb = fs.readFileSync('./HansTzMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update '${__filename}'`))
    delete require.cache[file]
    require(file)
})