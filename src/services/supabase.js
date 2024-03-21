import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qqphkwuejicwftvgaaiy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxcGhrd3Vlamljd2Z0dmdhYWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3Nzg0MjgsImV4cCI6MjAxNTM1NDQyOH0.fpNWBg6u9ufuLtKXXEqeS-Zrmi4mbxCnptVJ_LqJTkQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
