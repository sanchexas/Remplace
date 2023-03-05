import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});