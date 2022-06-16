create TABLE customer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    address OBJECT NOT NULL,
    avatar VARCHAR
)

create TABLE orders(
    id SERIAL PRIMARY KEY,
    id_customer INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)