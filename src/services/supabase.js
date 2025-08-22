import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jfyqaghtktaxjmtrdzqx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeXFhZ2h0a3RheGptdHJkenF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNDgxMDMsImV4cCI6MjA3MDgyNDEwM30.b9AVq9tch1No472J-hNPdsaoGcWMDnDHBKSf5hmfJGc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
