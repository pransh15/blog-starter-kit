const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra()
    {
        "redirects"; [
        { 
            "source": "/hello-vercel",
            "destination": "https://vercel.com/", 
            "permanent": true
        }
        ]
    }