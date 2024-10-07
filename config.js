const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263715907468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'miltonbrian45@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "263715907468"
global.devs = '263715907468';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1idDd6UnFwSWRIbkJ0OStKRWtQTnp2MEd5dFZPTDQ5YUkxeFhzYU5FOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1IxRloyRS8vdFZLVWZrc0s5c2FBSWRCdDUrYVdUS2lMVzJ3VVhoK05FMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRDFqVnIwQUhkRFQrMm5FdlFoakNmTTBuZXArRy9wSDBDaHBhd1psZzBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0NzJSVFhvQ3dMVkJ1dEVFRnpwUkQ1S3BrNGFVRkc4Z014VGIxd3BVUW1JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GaVRtTFp5WG42clpJZGYzbUNNUjI3ektNbitPVitWSmRuUXkvNnB4SEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpHazcxNUVzOG0zWCtNcG9DRWt2QW5lUFJMcDRYRnFaaTJSYm9CTTVuMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxyWUcvMEo0N09TazcrUHFleWRIS3E3enNWeG5jcW1FVTBDbGpmSVVHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkM5VTRsaVMrazI1NUkyWEtKK2FJa3NqaTg3R1NmNlV1LzVNcVRQMmV3ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRSNFdBY2pya3RzU3J4RDBVc1d3NWVwY1BIczJqbkluc2RoRTh2U0NwUUlCSm5qUEdLTHl4MTNNWmpJUjdTUjZqNXkzTWhJbEJKSTRQVjk5YWVnT2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IjFaOGFob2lQdzRwY1hqYndYTlNnbUt1KzgyOU1hZndYT21NaTI5dzg0d2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2NzU2NTE4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0MTg2RDM1QzRENjU1QUExNURDRjUwMUYzRkIzRDk1RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4MzE0MzUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDY3NTY1MTg0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkyQTdBRjUxMzNDOTZCRjdFMDUzRjAzOThDMkUwREU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgzMTQzNTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZEc0JMWkUtU2NpVmdjN0FpM3pZLUEiLCJwaG9uZUlkIjoiZjUwZjc4ZGEtNTBjNi00YjFiLWI2NDYtYjdlYjgxM2ZhMmQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXenIrTmxFNHBCUHZ1QTNmOEJiMDZldGFYST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMi90U09OTHNza1RGMitFS3VyV3hLSVJON2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVdaSkdQWlEiLCJtZSI6eyJpZCI6IjIzNDkwNjc1NjUxODQ6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QlPCdkKfwnZCk8J2Qp/CdkKjwnZCw8J2QpyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSk83aWZZQkVONzNqN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibCtneFFJOG9PcnNiSllySTJZajY1M005TUU1K0RYYTVjVi9teEZ1ekhqWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWGxXaEV6enQxVmtlWlR1TjRrc1l3eXVZY1czMzhHVWdUUXU2bVFXeDBWYVQyV0dKNGRjUFpONzg4UVFjd3RBNE5QZEowL0hHUmlTeTNiMURxK1JiQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVnbFNHdXlIOU1lZVFnYUNtcXpxa2MrTWx0TmdFalpjSXBVTlN0TTJVTUsyY1Q0WnRPaWRPbC9IbTNGMnVXenlUWDkzOEdiMXFQQVBjZnRxMnllUWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2NzU2NTE4NDoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZm9NVUNQS0RxN0d5V0t5Tm1JK3VkelBUQk9mZzEydVhGZjVzUmJzeDQyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MzE0MzQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh4WiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'Miltom Technologies',
  
  botname:   process.env.BOT_NAME === undefined ? "MILTON-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'TalkDrove' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*MILTON technologies* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MILTON-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
