import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  process.env.SUPABASE_API_URL,
  process.env.SUPABASE_API_KEY
);
