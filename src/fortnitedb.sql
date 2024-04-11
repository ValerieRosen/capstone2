DROP DATABASE IF EXISTS fornite;

CREATE DATABASE fortnite;

\c fornite

CREATE TABLE items
(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR,
    rarity VARCHAR,
    price INTEGER,
    release_date INTEGER,
    category VARCHAR,
    image_url VARCHAR
);

CREATE TABLE featured_items
(
    item_id SERIAL PRIMARY KEY,
    update_id INTEGER,
    item_name VARCHAR,
    rarity VARCHAR,
    price INTEGER,
    category VARCHAR,
    image_url VARCHAR
);

CREATE TABLE special_offers
(
    offer_id SERIAL PRIMARY KEY,
    update_id INTEGER,
    offer_name VARCHAR,
    offer_type VARCHAR,
    offer_description TEXT,
    offer_expiry_date DATE,
    image_url VARCHAR
);

CREATE TABLE shop_updates
(
    update_id SERIAL PRIMARY KEY,
    update_date DATE,
    update_time TIME,
    total_items INTEGER,
    featured_items INTEGER,
    daily_items INTEGER,
    special_offers INTEGER
);

CREATE TABLE daily_items
(
    item_id SERIAL PRIMARY KEY,
    update_id INTEGER,
    item_name VARCHAR,
    rarity VARCHAR,
    price INTEGER,
    category VARCHAR,
    image_url VARCHAR
);
