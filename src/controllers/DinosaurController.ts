import { Controller } from "../libs/Controller";
import DinosaureRepository from "../repositories/DinosaureRepository";

export class DinosaurController extends Controller {
    public async listAll() {
        const allDinosaurs = await DinosaureRepository.findAll();
        this.response.render("pages/dinosaurs", {
            dinosaurs: allDinosaurs
        });
    }
}