import { randomUUID } from "crypto";
import type {
  Campaign,
  CreateCampaignBody,
  UpdateCampaignBody,
} from "./campaigns.types";

// In-memory store — replace with pg queries against a campaigns table.
const campaigns: Campaign[] = [];

export async function getCampaigns(userId: string): Promise<Campaign[]> {
  return campaigns.filter((c) => c.userId === userId);
}

export async function createCampaign(
  userId: string,
  body: CreateCampaignBody
): Promise<Campaign> {
  const campaign: Campaign = {
    id: randomUUID(),
    userId,
    ...body,
    createdAt: new Date(),
  };

  campaigns.push(campaign);

  return campaign;
}

export async function updateCampaign(
  id: string,
  userId: string,
  body: UpdateCampaignBody
): Promise<Campaign> {
  const campaign = campaigns.find(
    (c) => c.id === id && c.userId === userId
  );

  if (!campaign) throw new Error("Campaign not found");

  Object.assign(campaign, body);

  return campaign;
}

export async function deleteCampaign(
  id: string,
  userId: string
): Promise<void> {
  const index = campaigns.findIndex(
    (c) => c.id === id && c.userId === userId
  );

  if (index === -1) throw new Error("Campaign not found");

  campaigns.splice(index, 1);
}
