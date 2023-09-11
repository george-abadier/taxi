const multer = require('multer')
module.exports= uploadfile = (foldername, allowedMimetypes) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `statics/${foldername}/`)
        },
        filename: (req, file, cb) => {
            const myFileName = Date.now() + file.fieldname + file.originalname
            cb(null, myFileName)
        }
    })
    const upload = multer(
        {
            storage,
            fileFilter: (req, file, cb) => {
                if (!allowedMimetypes.includes(file.mimetype)/*&& file.mimetype != "image/svg+xml" && file.mimetype != "image/vnd"*/) {
                    cb(null, false)
                    const e = new Error('wrong file extention')
                    e.name = 'ValidationError'
                    e
                    cb(e)
                }
                cb(null, true)
            },
            limits: { fileSize: 5000000 }
        })
    return upload
}