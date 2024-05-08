import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxgazyefkbtjnwtwkmtx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Z2F6eWVma2J0am53dHdrbXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjYwNTIsImV4cCI6MjAzMDc0MjA1Mn0.u5I0oMrPYItJ5GxZGfppmb7QBGXxY6jwxTmPH4E7OfE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;