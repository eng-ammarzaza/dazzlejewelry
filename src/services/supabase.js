import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vbscuwvmhmghqyldrkbd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZic2N1d3ZtaG1naHF5bGRya2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNjQ0NDUsImV4cCI6MjAzMDY0MDQ0NX0.yu8unGicudO0GUi0CvEfzeVsDiDDu3V7HBt2MjT8xgI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
