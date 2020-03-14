var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/lkkadiri',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/lkkadiri/lkkadiri.git',
        user: {
            name: 'Leela',
            email: 'lkkadiri@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)