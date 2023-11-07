INSERT INTO users (
    first_name, last_name,  _role, username, password
) values ('sindy','Herrrera','customer', 'Username','sindyPassword');

UPDATE users
SET last_name = 'Herrera' WHERE id = 2;

INSERT INTO orders(
    customer_name,address,psi,stone,accelerator,retarder,yards,slump ,unload_method
) values ('sofia','5925 89th ave new carrollton md 20784', 3500, 'pea gravel', '0', '0', 10.5, 4, 'chute','delivered',1);


CREATE TABLE orders(
    id BigSERIAL NOT NULL PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    psi INT NOT  NULL,
    stone VARCHAR(50) NOT NULL,
    accelerator INT NOT NULL,
    retarder INT NOT NULL,
    yards INT NOT NULL,
    slump INT NOT NULL,
    unload_method VARCHAR(50) NOT NULL,
    special_in TEXT,
    status VARCHAR(50) DEFAULT 'Ordered',
    driver_id INT REFERENCES users(id),
    customer_id INT NOT NULL,
)

CREATE TABLE users(
    id BigSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    _role VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
)