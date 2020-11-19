const multer = require("multer");
const path = require("path");
const crypto = require("crypto");


module.exports = {
    dest: path.resolve(__dirname,"..", "..", "Front", "connect", "src", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.resolve(__dirname,"..", "..", "Front", "connect", "src", "uploads"));
        },
        filename: (req, file, cb)=>{
            const fileName = file.originalname
            cb(null, fileName);
        },

    }),
    limits:{
        fileSize: 2*1024 *3000
    },
    fileFilter:(req, file, cb)=>{
        const allowedMimes=[
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'video/mp4',
            'video/avi'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true);

        }else{
            cb(new Error('Invalid file type'));
        }
    }
}