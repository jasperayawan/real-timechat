const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToMongoDb = require("./db/ConnectToMongoDB");
const bodyParser = require("body-parser")
const cookieParse = require("cookie-parser")

const authRoutes = require("./routes/auth.route")
const messageRoutes = require("./routes/message.route")
const userRoutes = require("./routes/user.route")


dotenv.config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParse())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)


app.listen(port, () => {
    console.log("server lestining to port:", port)
    connectToMongoDb()
})