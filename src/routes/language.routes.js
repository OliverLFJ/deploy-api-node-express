import { Router } from "express";
import {methods as LanguageController} from './../controllers/language.controller'

const router = Router();
router.get("/", LanguageController.getLanguages)
router.get("/:id", LanguageController.getLanguage)
router.delete("/:id", LanguageController.deleteLanguage)
router.post("/add", LanguageController.addLanguage)
router.put("/update/:id", LanguageController.updateLanguage)
export default router;