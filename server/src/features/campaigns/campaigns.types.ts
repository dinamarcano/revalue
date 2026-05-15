export interface Campaign {
  id: string;
  userId: string;
  status: "ON" | "OFF";
  image: string | null;
  title: string;
  reward: string;
  machineAddress: string;
  background: string;
  textColor: string;
  createdAt: Date;
}

export interface CreateCampaignBody {
  status: "ON" | "OFF";
  image: string | null;
  title: string;
  reward: string;
  machineAddress: string;
  background: string;
  textColor: string;
}

export interface UpdateCampaignBody {
  status?: "ON" | "OFF";
  reward?: string;
  title?: string;
  machineAddress?: string;
}
