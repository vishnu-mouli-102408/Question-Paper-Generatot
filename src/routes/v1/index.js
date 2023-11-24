import express from "express";
const router = express.Router();

import {
  create,
  createMany,
  destroy,
  get,
  getAll,
  update,
} from "../../controllers/question-controller.js";

router.post("/question", create);
router.post("/questions", createMany);
router.get("/question/:id", get);
router.get("/questions", getAll);
router.delete("/question/:id", destroy);
router.patch("/question/:id", update);

export default router;
