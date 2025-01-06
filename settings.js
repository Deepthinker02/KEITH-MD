/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUc1Z083S284djU1amFyelFibEZWSm01RDUwb3RWclJXbzRGOEpRZk5XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3NpMDMwQWl6M0x6NW1TTnpKZXRSSE1oTERITjI0ckpGVVo1WGtMNVFXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRlh3bkN2YmlpaFN1dldrTUdMVTRqWXFQb0RmbC9RM2tPSmZJMXJOSUdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdGRYdlRqT1FxK0ppQnlRdWhLSEhaOVVOa0tVUUN3d2pXajFQckdWRkhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBdFpRZU5OYUVNRXUra2thTnJvZlJlNmlBcUQ2NDBFN1hHNnJUaVdKWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9rb2krcUVESExPL284eW5yRmNIOXJZMGplelBQNktiOUtLZXRXTHZxVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1NbnRUc2g5NnhUREtxay9seTdUcGxpZjhUN2NVcG1yTitOdktveHlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFJXb0w0UVdKTW5xY1BCTUVvQ1ozdE9xRlVqVm1GNDc5L1RNZFpna2ZYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwRmJTYkpTUHNYY2tFYmtrbVlVVER2K01pZjg0VlFlbW1FSHRZMkdCOFVKcFVRY3JtSnZxT0V3QjBsSEFzNW5wRUNlTzhqa2tHTC9OdE9ldlQ3c2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Ik03d0hldHg4VEcrVDY1Vll6WmFpbXBWbW5SK2ZRN3Nha0tKVVpaN3c1b289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRaZU5POFFyU1BhM2hERmxZeXNuTGciLCJwaG9uZUlkIjoiNDZlZmIzMzktYTJjMy00NzE5LWEyOWMtODZkNjY4MWM2OGUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM4OG4yWnFxZ0s4M0EzN2RNTU83bElvWWd2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaeVVhQzZTRTYvOElrVjArbFI4L3J5RHFiMXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEhHVldQOUMiLCJtZSI6eyJpZCI6IjkyMzE4OTQ5Mjk5NTo3MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJacml3UTdvZnV1d1lZS1NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieTZpUlZWRGFON0UrTkJaVzB1S1lBZWMyRDU0clQ2Z0tQcjdCUlluSFQzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGlpTmJyRlFOSmpUNVBENWdSWm5pNnhNdlVPSjM3VXEwVGs0MU5BYVFneVYvajI0eUV4cHJSSzVnU2tjSE5DSm1FcXVUbktONzhFS1pVRi93SWhYQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjA4VERISi96MkFYVVFRV0Z6LzNOTlRMNkdmTlNWVXRodEVBRzBrYXcyMGhrdUJFTytYbDZMSXREUjZnYXNpRHh2Zk5RWStqMThvYXlKT0pTTklHWWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg5NDkyOTk1OjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN1b2tWVlEyamV4UGpRV1Z0TGltQUhuTmcrZUswK29DajYrd1VXSngwOS8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYxNDc5NjV9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || '❦ 𝗔𝗪𝗔𝗜𝗦_𝗜𝗤𝗕𝗔𝗟 ☙';
const packname = process.env.PACKNAME || '𓆩𝕯𝗘𝗩𝗜𝕷࿐';
const dev = process.env.DEV || '923189492995';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'null';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'false';
const antilink = process.env.ANTILINK || 'false';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
