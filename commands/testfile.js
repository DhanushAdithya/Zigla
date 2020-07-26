const db = require('../assets/firebase')

module.exports = {
    name: 'testfile',
    description: 'Test file for checking firebase-firestore',
    execute(message, args) {
        db.collection('test').add({ test:args[0] })
        message.channel.send('added to db!')
    }
}