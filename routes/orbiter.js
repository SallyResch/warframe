import express from "express";
import * as path from "path";
const orbiterRouter = express.Router()
const __dirname = path.resolve();


orbiterRouter.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/orbiter.html"))
})

orbiterRouter.get("/sally", (req, res) => {
	res.send("<h1>Sallys orbiter</h1>")
})
orbiterRouter.get("/beary", (req, res) => {
	res.send("<h1>Bearys orbiter</h1>")
})
orbiterRouter.get("/tor", (req, res) => {
	res.send("<h1>Tors orbiter</h1>")
})

export default orbiterRouter;