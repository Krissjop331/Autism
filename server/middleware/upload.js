const multer = require('multer');
const moment = require('moment');


// Где будут загружаться и храниться
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    // преобразовываем название файла
    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss')    // .format - указываем формат сохранения 

        cb(null, `${date}-${file.originalname}`)
    }
})


// Фильтрация
// const fileFilter = (req, file, cb) => {
//     // Если файл явл. картинкой
//     if(
//         file.mimetype === '/image/png' 
//     ||  file.mimetype === '/image/jpeg' 
//     ||  file.mimetype === '/image/jpg' 
//     ||  file.mimetype === '/image/svg') 
//     {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// // Размер изображения
// const limits = {
//     // 100 Мб
//     fileSize: 1042 * 1024 * 100 
// }

module.exports = multer({
    storage: storage,
    // fileFilter: fileFilter,
    // limits
})