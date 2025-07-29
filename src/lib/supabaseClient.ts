// src/lib/supabaseClient.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gsftgxkadipzscqybasr.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabase };
