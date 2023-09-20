-- This makes sure that foreign_key constraints are observed and that errors will be thrown for violations
PRAGMA foreign_keys=ON;

BEGIN TRANSACTION;

--create your tables with SQL commands here (watch out for slight syntactical differences with SQLite)

-- Create articles (Parent) table. 
CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  created_at TEXT NOT NULL,
  modified_at TEXT NOT NULL,
  body TEXT NOT NULL,
  num_likes INTEGER NOT NULL,
  is_published INTEGER NOT NULL
);

-- Create article_comments (Child) table.
CREATE TABLE IF NOT EXISTS article_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id INTEGER,
  comments TEXT,
  article_created_at TEXT,
  FOREIGN KEY(article_id) REFERENCES articles 
  ON DELETE CASCADE
);

-- Create Author Header table - Stores Microblog title, subtitle, author
CREATE TABLE IF NOT EXISTS blog (
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- INSERT INTIAL ROW INTO `blog` table
INSERT INTO blog VALUES('AML Micro-Blogging', 'Anti Money Laundering, KYC, Customer Onboarding', 'Bobby');

COMMIT;

