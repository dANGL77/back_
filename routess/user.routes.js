const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controllers')
const userControllers = require('../controller/user.controllers')

router.post('../user', userControllers.createUser)
router.get('../user', userControllers.getUsers)
router.get('../user::id', userControllers.getOneUser)
router.put('../user', userControllers.updateUserUser)
router.delete('../user::id', userControllers.createUser)



module.exports = router