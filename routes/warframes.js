import express from "express";
import * as path from "path";

const warframeRouter = express.Router()
const __dirname = path.resolve();

warframeRouter.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/warframes.html"))
})

//route is already defined from /warframe in index.js so we dont have to set the hole route here
warframeRouter.get("/volt", (req, res) => {
	res.send("<h1>Volt</h1>")
})
export default warframeRouter;