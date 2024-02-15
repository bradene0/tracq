// supabase.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  'https://zlfgnhxpdmferbreloor.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZmduaHhwZG1mZXJicmVsb29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NTYxMDEsImV4cCI6MjAyMzUzMjEwMX0.LuI_szNiNjMugsYveKCUmcHm_r8BlqVg_3mPUUxIq_8'
);

export default supabase;
