import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import {
  getMachinesController,
  createMachineController,
  updateMachineController,
  deleteMachineController,
} from "./machines.controller";

const router = Router();

router.use(authMiddleware);

router.get("/", getMachinesController);
router.post("/", createMachineController);
router.patch("/:id", updateMachineController);
router.delete("/:id", deleteMachineController);

export default router;
