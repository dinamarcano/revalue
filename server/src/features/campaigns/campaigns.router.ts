import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import {
  getCampaignsController,
  createCampaignController,
  updateCampaignController,
  deleteCampaignController,
} from "./campaigns.controller";

const router = Router();

router.use(authMiddleware);

router.get("/", getCampaignsController);
router.post("/", createCampaignController);
router.patch("/:id", updateCampaignController);
router.delete("/:id", deleteCampaignController);

export default router;
