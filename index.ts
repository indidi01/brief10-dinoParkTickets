import express from "express";
import router from "./src/routes/index";
import path from "node:path";


// import dotenv from "dotenv";

// dotenv.config();

const app = express();
const port = 3000;

//pour vérifier si ma route fonctionne 
// app.get('/', (request, response) => {
//   response.send('la route fonctionne !');
// })

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use("/", router);

app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port: ${port}`);
})

// import Express from "express";
// import router from "./routes";
// import { fileURLToPath } from "node:url";
// import path from "node:path";
// import { Database } from "./libs/Database";

// const app = Express();
// const PORT = 3000;

// // @ts-ignore
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(Express.static(path.join(__dirname, "public")));

// app.use(Express.urlencoded({ extended: true }));

// app.use("/", router);

// app.listen(PORT, () => {
//   console.log(`Le serveur a démarré sur le port ${PORT}`);
// });
