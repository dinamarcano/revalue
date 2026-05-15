function requireEnv(key: string): string {
  const value = import.meta.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

export const config = {
  supabaseUrl: requireEnv("VITE_SUPABASE_URL"),
  supabaseAnonKey: requireEnv("VITE_SUPABASE_ANON_KEY"),
  appName: import.meta.env.VITE_APP_NAME || "Revalue",
  apiUrl: import.meta.env.VITE_API_URL || "",
};
