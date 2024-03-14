// import express from 'express';
// import ip from 'ip';
// import dotenv from 'dotenv';
// import cors from 'cors';


const dotenv = require('dotenv');

const express = require('express');
const app = express();
const db = require("./models/index.js");
const cookie = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.SERVER_PORT || 3000;
const ApiRouter = require("./routes/router.js");

dotenv.config();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', ApiRouter);

// async function syncModels() {
//     try {
//       await db.Role.sync({ alter: false });
//       // await db.Comment.sync({ force: true });
//     //   await db.Forum.sync({ force: true });
//     //   await db.User.sync({ force: true });
      
//       console.log("All models were synchronized successfully.");
//     } catch (error) {
//       console.error("Error during models synchronization:", error);
//     }
// }

const start = async() => {
    // syncModels()
    db.sequelize.sync({ alter: true });

//     db.sequelize.sync({ alter: true })
//   .then(() => console.log("All models were synchronized successfully."))
//   .catch(error => console.error("Error during models synchronization:", error));
    // await db.CardBank.sync({ alter: true });

    // let port = 5000;
    app.listen(PORT, () => {
        console.log(`Running at localhost:${PORT}`);
    })
}

start();