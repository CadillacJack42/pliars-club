import { createClient } from "@supabase/supabase-js";

console.log(
  "WHAT ARE THE VALUES OF THESE TWO??",
  process.env.REACT_APP_SUPABASE_API_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
);

export const client = createClient(
  process.env.REACT_APP_SUPABASE_API_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
);
