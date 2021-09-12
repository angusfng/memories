create table Users (
  id serial,
  username varchar(30) unique not null,
  email text not null,
  first_name text not null,
  last_name text not null,
  hash text,
  salt text,
  primary key (id)
)