const fetch = require('node-fetch')
const firebase = require('firebase')
const {
    MessageEmbed
} = require('discord.js')

const firebaseConfig = {
  apiKey: process.env.FB_KEY,
  authDomain: `${process.env.FB_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FB_ID}.firebaseio.com`,
  projectId: process.env.FB_ID,
  storageBucket: `${process.env.FB_ID}.appspot.com`,
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig)

module.exports = {
    fetchURL: async (url, mode) => {
        const res = await fetch(url)
        return await res[mode]()
    },
    Embed: (obj) => {
        return new MessageEmbed(obj).setThumbnail(obj.thumbnail)
    }
}