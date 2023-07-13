const presence= {
    config : {
        details : `I may research, code, or suffer.`,
        state : `🔥 Doing with Passions.`,
        startTimestamp : Date.now(),
        largeImageKey : `large_image`,
        largeImageText : `💩 Doing Shit.`,
        smallImageKey : `small_image`,
        smallImageText : `⭐ Alone Omega.`,
        instance : false,
        buttons : [
            {
                label : '💁 About Me',
                url : 'https://omega-profile.vercel.app/',
            },
            {
                label : '🏗️ Working On',
                url : 'https://github.com/MakerDZ?tab=repositories'
            },
        ]
    }
}

module.exports = {
    presence
}