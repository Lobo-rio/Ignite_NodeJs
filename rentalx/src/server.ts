import express, { response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const port = 3333

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.use("/", ()=>{
    return response.send("Helo World!");
})

app.listen(port, ()=> console.log(`Server is running at port ${port}!`))