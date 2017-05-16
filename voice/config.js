
module.exports = {
    snowboy: {
        hotword: process.env.RECOGNITION_HOTWORD || 'gladys',
        resource: process.env.RECOGNITION_RESOURCE || './data/gladys.pmdl'
    },
    google: {
        projectId: process.env.GOOGLE_PROJECT_ID || 'your-project',
        keyFilename: process.env.GOOGLE_KEY_FILENAME || './data/your-google-file-key.json'
    },
    language: process.env.RECOGNITION_LANGUAGE ||'fr-FR',
    gladys: {
        gladysUrl: process.env.GLADYS_URL || 'http://localhost:8080',
        token: process.env.GLADYS_TOKEN || '3b4818806ebc050f705ef7dce59c1653edef8cd3' 

    },
    sound: process.env.RECOGNITION_SOUND || './data/affirmative.mp3'
};