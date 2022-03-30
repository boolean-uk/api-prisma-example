DROP TABLE IF EXISTS books;
      
CREATE TABLE IF NOT EXISTS books (
  id                SERIAL        PRIMARY KEY,
  title             VARCHAR(255)   NOT NULL,
  type              VARCHAR(255)   NOT NULL,
  author            VARCHAR(255)   NOT NULL,
  topic             VARCHAR(255)   NOT NULL,
  publicationDate   DATE           NOT NULL,
  pages             INTEGER        NOT NULL
);