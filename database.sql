
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "error"
(
    "id" SERIAL PRIMARY KEY,
    "errorcode" VARCHAR (50),
    "topic" VARCHAR (50),
    "user_id" INT REFERENCES "user",
    "rating" integer DEFAULT (0),
    "has_voted" boolean default false,
    "direction" integer
);

CREATE TABLE "rating"
(
    "id" SERIAL PRIMARY KEY,
    "has_voted" boolean default false,
    "users_id" INT REFERENCES "user",
    "error_id" INT REFERENCES "error",
    "value" integer DEFAULT (0),
    "direction" integer
);
