import { Controller } from "../libs/Controller";

export class GlobalsController extends Controller {
  homepage() {
    this.response.render("pages/home", {});
  }
}