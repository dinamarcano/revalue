import { supabase } from "../lib/supabase";

interface Campaign {
  status?: string;
  image?: string | null;
  title?: string;
  reward?: string;
  machineAddress?: string;
  background?: string;
  textColor?: string;
}

export async function getCampaigns() {
  return await supabase
    .from("campaigns")
    .select("*");
}

export async function createCampaign(
  campaign: Campaign
) {
  return await supabase
    .from("campaigns")
    .insert([campaign]);
}