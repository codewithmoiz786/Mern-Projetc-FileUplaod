const Imagekit = require('imagekit')

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.URL_END_POINT
})

async function uploadFile(file) {
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: "Files/"
    })
    return result
}

module.exports = uploadFile