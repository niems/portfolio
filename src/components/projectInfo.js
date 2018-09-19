const projects = {
    "roulette": {
        name: 'Roulette',
        type: 'Web chat app',
        description: [
            'Roulette provides anonymous video/audio chatting using WebRTC, with Node.js and Socket.IO on the back-end.',
            'The learning curve for this freelance project was up quite a hill: the client wanted a video/audio chatting site, so I set out learning the WebRTC API - definitely no walk in the park, but I live for the struggle :P',
        ],
            
        images: [
            'https://media.giphy.com/media/pOlr6w3EMOQkeDHhbF/giphy.gif',
            './images/projects/roulette/landing.png',
            './images/projects/roulette/waiting-area.png',
            './images/projects/roulette/emoji.png',
            './images/projects/roulette/user-disconnected.png',
        ]
    },
    "whisper": {
        name: 'Whisper',
        type: 'Desktop/Web chat app',
        description: [
            'Whisper is the first chat app I coded using React!',

            'While private messaging and group chat work on the web, I also coded it as a desktop application using Electron\
             (wraps the web app for distribution on Windows/Mac/Linux).',
        ],
        images: [
            'https://media.giphy.com/media/5wFGesz1P7H9aTTbBw/giphy.gif',
            './images/projects/whisper/chatting.png',
            './images/projects/whisper/landing.png',
            './images/projects/whisper/sign-in.png',
            './images/projects/whisper/sign-up.png',
        ]
    },
    "word-connect": {
        name: 'Word Connect',
        type: 'Desktop dictionary search app',
        description: [
                'Coded this dictionary-lookup app for fun to gain experience with IndexedDB and Electron.js.',

                'The challenge was getting the words - there ended up being 195,275 words after removing duplicates/bad data - used in this project. \
                I coded a web scraper in Node.js using Cheerio.js for parsing. ',

                'The web scraper went through all the categories(A-Z) on dictionary.com. For each category (ex. category "A") it went through \
                every page ("A" has 54 pages of words alone), collecting the links for each word. It then used the word-links to extract the word, definition, and \
                example from the page, storing the data in IndexedDB.'
        ],
        images: [
            'https://media.giphy.com/media/4EFfGB2yCxtwQ3jA2L/giphy.gif',
            './images/projects/word-connect/display.png',
            './images/projects/word-connect/loading.png',
        ]
    }
};

module.exports = projects;