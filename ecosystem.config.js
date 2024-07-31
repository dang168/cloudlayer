module.exports = {
    apps: [
      {
        name: "cloudlayapi",
        script: "npm run start",
        
        instances: 1,
        watch  : false,
        time: true
      }
    ]
  }
  