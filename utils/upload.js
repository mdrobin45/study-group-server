const multer = require("multer");

// Setup file storage
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "uploads/");
   },
   filename: (req, file, cb) => {
      const name =
         Date.now() +
         "-" +
         file.originalname.split(" ").join("_").toLowerCase();
      cb(null, name);
   },
});

// Multer instance
const upload = multer({ storage: storage });

module.exports = upload;
