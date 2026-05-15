import { supabase } from "../lib/supabase";

export async function signIn(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUp(
  email: string,
  password: string,
  metadata: { company: string; ubication: string }
) {
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });
}