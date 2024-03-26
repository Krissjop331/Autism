const multer = require('multer');
const moment = require('moment');

// Функция для создания мидлвара загрузки изображений с параметрами
const fileResourcesMiddleware = (type) => {
    // Где будут загружаться и храниться
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            const uploadPath = `stories/files/resources/${type}/`; // Формируем путь для сохранения
            cb(null, uploadPath); // Передаем путь в мидлвар multer
        },
        filename(req, file, cb) {
            const date = moment().format('DDMMYYYY-HHmmss');
            cb(null, `${date}-${file.originalname}`);
        }
    });

    // Фильтрация
    // const fileFilter = (req, file, cb) => {
    //     if ([
    //         'text/xml',
    //         'application/msword', // Для старых версий DOC
    //         'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Для DOCX
    //         'application/pdf',
    //         'application/vnd.ms-excel', // Для старых версий XLS
    //         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Для XLSX
    //         'application/vnd.ms-powerpoint', // Для старых версий PPT
    //         'application/vnd.openxmlformats-officedocument.presentationml.presentation', // Для PPTX
    //         'text/plain',
    //         'image/png',
    //         'image/jpeg',
    //         'image/jpg',
    //         'image/svg+xml',
    //         'video/mp4',
    //         'video/avi',
    //         'video/mpeg',
    //         'video/quicktime',
    //         'video/webm'
    //     ].includes(file.mimetype)) {
    //         cb(null, true);
    //     } else {
    //         cb(new Error('Неподдерживаемый тип файла'), false);
    //     }
    // };

    // Размер изображения
    const limits = {
        fileSize: 1048576 * 100 // 100 Мб
    };

    // Возвращаем мидлвар multer с заданными параметрами
    return (req, res, next) => {
        if (!req.file) { // Проверяем наличие файла
            next(); // Если файла нет, пропускаем мидлвар и переходим к следующему
        } else {
            multer({
                storage: storage,
                // fileFilter: fileFilter,
                limits: limits
            }).single('file')(req, res, next);
        }
    };
};

module.exports = fileResourcesMiddleware;