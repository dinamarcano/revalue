import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../../middlewares/auth.middleware";
import * as campaignsService from "./campaigns.service";

export async function getCampaignsController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const campaigns = await campaignsService.getCampaigns(
      req.user!.userId
    );
    res.json(campaigns);
  } catch (err) {
    next(err);
  }
}

export async function createCampaignController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const campaign = await campaignsService.createCampaign(
      req.user!.userId,
      req.body
    );
    res.status(201).json(campaign);
  } catch (err) {
    next(err);
  }
}

export async function updateCampaignController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const campaign = await campaignsService.updateCampaign(
      req.params.id,
      req.user!.userId,
      req.body
    );
    res.json(campaign);
  } catch (err) {
    next(err);
  }
}

export async function deleteCampaignController(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await campaignsService.deleteCampaign(
      req.params.id,
      req.user!.userId
    );
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
