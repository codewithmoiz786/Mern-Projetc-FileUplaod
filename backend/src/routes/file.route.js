const express = require('express')
const router = express.Router()
const multer = require('multer')
let upload = multer({ storage: multer.memoryStorage() })

const controller = require('../controllers/file.controller')


router.post("/createPost", upload.single('image'), controller.UploadFile)

router.get("/files", controller.allFiles)

module.exports = router
