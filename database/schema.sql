create table Posts (
  id serial unique,
  title varchar(255),
  message text,
  creator varchar(255),
  tags text,
  selected_file text,
  like_count int default 0,
  created_at date default now()
);