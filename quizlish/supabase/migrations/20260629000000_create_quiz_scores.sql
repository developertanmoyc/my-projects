create table if not exists public.quiz_scores (
    id bigint generated always as identity primary key,
    email text not null,
    category text not null,
    quiz_name text not null,
    score integer not null,
    total_questions integer not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.quiz_scores enable row level security;

-- Create policy to allow insert for authenticated users of their own scores
create policy "Allow insert of own scores"
on public.quiz_scores
for insert
to authenticated
with check (auth.jwt() ->> 'email' = email);

-- Create policy to allow users to view their own scores
create policy "Allow users to read their own scores"
on public.quiz_scores
for select
to authenticated
using (auth.jwt() ->> 'email' = email);
