import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fvodmaqziwtqcgpnkexz.supabase.co'
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2RtYXF6aXd0cWNncG5rZXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MzY3MTYsImV4cCI6MjAzMzQxMjcxNn0.66EjeIkKxR9H4sjE6jLONv6yMn7_YwIUKrGsboYjWGo'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;