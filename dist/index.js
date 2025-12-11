import express, {} from "express";
// Load dotenv only in development
if (process.env.NODE_ENV !== "production") {
    import("dotenv").then(dotenv => dotenv.config());
}
const app = express();
app.get("/", (req, res) => {
    res.send(`Done deploy on EC2 server... SECRET: ${process.env.SECRET}`);
});
app.listen(3000, () => {
    console.log("Server is running...");
});
//# sourceMappingURL=index.js.map