/* For every table creted id & created_at are mandatory */

/* Rules : 
    - Every colunm or table has to be in snake case 
    - Every enum has to be in camel case
*/


/* Create Users Table */
create table users (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    updated_at timestamptz,
    --
    firstname text not null,
    lastname text not null,
    email text not null,
    is_habitant boolean not null default false
)


/* Create Reports Table */
create table reports (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    updated_at timestamptz,
    --
    street text not null,
    street_number numeric not null,
    street_1 text,
    street_2 text,
    report text not null,
    date date not null (now())
)

/* Create Reports_Ai Table */
create table reports_ai (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    updated_at timestamptz,
    --
    title text not null,
    status report_ai_status not null,
    is_deleted boolean default false not null,
    is_read boolean default false not null,
    count numeric default 1 not null,
    user_id uuid references users (id) on delete cascade not null,
    report_ai_id uuid references reports_ai (id) on delete cascade not null,
)

/* Create Agents Table */
create table agents (
    id uuid default extensions.uuid_generate_v4 () not null primary key,
    created_at timestamptz default (now()) not null,
    updated_at timestamptz,
    --
    email text not null,
    role text
)



/* Status report ai status */
create type report_ai_status as enum (
  'HIGH',
  'MID',
  'LOW'
)