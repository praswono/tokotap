DROP TABLE items;

CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  category TEXT,
  brand TEXT,
  name TEXT,
  price INTEGER
);

INSERT INTO items (category, brand, name, price) VALUES ("Shoes", "Adidas", "All Stars Black", 2000000);
