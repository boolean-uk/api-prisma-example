DROP TABLE IF EXISTS pets;

CREATE TABLE IF NOT EXISTS pets (
  id        SERIAL        PRIMARY KEY,
  name      VARCHAR(255)   NOT NULL,
  age       INTEGER       NOT NULL,
  type      VARCHAR(255)   NOT NULL,
  breed     VARCHAR(255)   NOT NULL,
  microchip BOOLEAN       NOT NULL
);