const Router = require('express')
const router = new Router()
const MarkController = require('../controller/mark.controllers')
const MarkController = require('../controller/mark.controllers')

router.post('../mark', MarkController.createMark)
router.get('../mark', MarkController.getMarkbyUser)
router.delete('../mark::id', MarkControllers.createMark)



module.exports = router