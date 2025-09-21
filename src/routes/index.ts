import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";
import { DinosaurController } from "../controllers/DinosaurController";

const router = Router();

// pour vérifier si ma route fonctionne
// router.get("/", (request, response) => {
//   response.send("la route fonctionne !");
// });

router.get("/", (request, response) => {
  new GlobalsController(request, response).homepage();
});

router.get("/dinosaurs", (request, response) => {
  new DinosaurController(request, response).listAll();
});

export default router;

// import { Router } from "express";
// import globalRouter from "./globals";
// import bookRouter from "./books";

// const router = Router();

// router.use(globalRouter);
// router.use('/books', bookRouter);

// export default router;
