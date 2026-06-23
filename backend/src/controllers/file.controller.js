const imagekitModel = require('../models/imagekit.model')
const uploadFile = require('../services/storage.service')

async function UploadFile(req, res) {
    try {
        const image = req.file;
        const { caption } = req.body;
        console.log(image, caption);


        if (!image) {
            return res.status(400).json({
                message: "You can,t upload file"
            })
        }

        let result = await uploadFile(image);

        let SaveImage = await imagekitModel.create({
            uri: result.url,
            caption
        })

        res.status(200).json({
            message: "File upload succesfully",
            SaveImage
        })
    } catch (err) {
        res.status(501).json({
            "Error": err.message
        })

    }


}
async function allFiles(req, res) {
    let allFiles = await imagekitModel.find()
    if (!allFiles) {
        return res.status(400).json({
            message: "No files yet",
        })
    }

    res.status(200).json({
        message: "Files/Images Fetched Succesfully",
        allFiles
    })

}





module.exports = { UploadFile, allFiles }