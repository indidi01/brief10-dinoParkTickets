import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

const router = Router();

// pour vérifier si ma route fonctionne 
// router.get("/", (request, response) => {
//   response.send("la route fonctionne !");
// });

router.get("/", (request, response) => {
  new GlobalsController(request, response).homepage();
});

export default router;

// import { Router } from "express";
// import globalRouter from "./globals";
// import bookRouter from "./books";

// const router = Router();

// router.use(globalRouter);
// router.use('/books', bookRouter);

// export default router;