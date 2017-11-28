const firebase = require("firebase")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    auth.activeUser = user
                    // nav.init(true)
                    // nav.hideLogin()
                } else {
                    // nav.init(false)
                    auth.activeUser = null
                }
            })
        }
    }
})

  module.exports = observer