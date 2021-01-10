CREATE TABLE "notes" (
	"id" SERIAL PRIMARY KEY,
	"completed" BOOLEAN DEFAULT false,
	"priority" VARCHAR(4) NOT NULL,
	"note" VARCHAR(140) NOT NULL
);


INSERT INTO "notes" ("priority", "note")
VALUES ('high', 'Write code on Server Side');

INSERT INTO "notes" ("priority", "note")
VALUES ('high', 'Make sure database is set up properly');

INSERT INTO "notes" ("priority", "note")
VALUES ('high', 'Make look pretty');

INSERT INTO "notes" ("priority", "note")
VALUES ('low', 'Add bootstrap');
