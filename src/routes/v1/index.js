import express from "express";
const router = express.Router();

import {
  create,
  createMany,
  destroy,
  generatePaper,
  get,
  getAll,
  update,
  updateMultiple,
} from "../../controllers/question-controller.js";

router.post("/question", create);
router.post("/questions", createMany);
router.get("/question/:id", get);
router.get("/questions", getAll);
router.delete("/question/:id", destroy);
router.patch("/question/:id", update);
router.patch("/questions", updateMultiple);

router.post("/generate", generatePaper);

export default router;
