const multer = require('multer');
const moment = require('moment');

// Функция для создания мидлвара загрузки изображений с параметрами
const createImageUploadMiddleware = (type) => {
    // Где будут загружаться и храниться
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            const uploadPath = `stories/images/${type}/`; // Формируем путь для сохранения
            cb(null, uploadPath); // Передаем путь в мидлвар multer
        },
        filename(req, file, cb) {
            const date = moment().format('DDMMYYYY-HHmmss');
            cb(null, `${date}-${file.originalname}`);
        }
    });

    // Фильтрация
    const fileFilter = (req, file, cb) => {
        // Если файл является картинкой
        if (file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/svg+xml') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    };

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
                fileFilter: fileFilter,
                limits: limits
            }).single('image')(req, res, next);
        }
    };
};

module.exports = createImageUploadMiddleware;