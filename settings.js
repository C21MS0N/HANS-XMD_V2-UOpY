// Base by HANSTZ
// Modified by Crimson X for Kurimuzon♦️ Bot

const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config(); // Environment variables

// OWNER & SESSION CONFIG (managed via Railway or .env)
global.SESSION_ID = process.env.SESSION_ID || '';
global.ownernumber = process.env.OWNER_NUMBER || '2349075268689';
global.ownername = process.env.OWNER_NAME || 'Crimson X';

// SOCIAL & BOT INFO
global.botname = 'Kurimuzon♦️';
global.ytname = 'Kurimuzon♦️ Official';
global.socialm = 'GitHub: CrimsonX';
global.location = 'NIGERIA, EARTH-616';
global.link = 'https://wa.me/2349075268689';
global.wagc = 'https://wa.me/2349075268689';

// STICKER CONFIG
global.packname = 'Kurimuzon Packs';
global.author = 'Kurimuzon♦️';

// UI & FEATURES
global.themeemoji = '🩸';
global.wm = 'KURIMUZON BOT';
global.prefa = ['.', '!', '/', '#']; // Command prefixes

// AUTO BEHAVIOR TOGGLES
global.autoTyping = false;
global.autoRecording = false;
global.autorecordtype = true;
global.autobio = true;
global.autolikestatus = true;
global.autoreact = false;
global.autoswview = true;
global.autoread = false;
global.anti91 = false;
global.welcome = true; // Enable group welcome

// MESSAGES / RESPONSES
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
};

// THUMBNAIL IMAGE
global.thumb = fs.readFileSync('./HansTzMedia/thumb.jpg');

// AUTO RELOAD ON FILE SAVE
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update detected in '${__filename}'`));
    delete require.cache[file];
    require(file);
});