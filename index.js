import express from "express";
import warframeRouter from "./routes/warframes.js";
import orbiterRouter from "./routes/orbiter.js";
import * as path from "path";
const app = express();
const port = 3030;
const __dirname = path.resolve();
app.use(express.static("public"));
//absolute path
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.use("/warframes", warframeRouter)
app.use("/orbiter", orbiterRouter)
app.listen(port, () => console.log(`Traveling through space in my orbiter ${port}`))