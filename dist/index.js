import express, {} from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use("/", (req, res) => {
    res.send("Done deploy on ec2 server..." + process.env.SECRET);
});
app.listen(3000, () => {
    console.log("Server is running...");
});
//# sourceMappingURL=index.js.map