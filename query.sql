{
    -- Insert a customer
    INSERT INTO customer (first_name,last_name,email,phone_num) 
    VALUES ('Wei-Jie','Gao','lol@gmail.com','4696623259');

    -- Insert a menu product
    INSERT INTO menu_item (sort_id,item_name,item_description,item_cost,item_spice) 
    VALUES ('A1','Vegetable Egg Roll',NULL,0.99,false);

    -- Insert a order (must have a customer_id first)
    INSERT INTO order_cart (cust_id,
                            order_time,
                            order_date,
                            payment,
                            order_type,
                            num_items,
                            sub_total,
                            total_cost)
    VALUES (1,'8:00:00','2022-06-14','CASH','Pickup',0,0.0,0.0);

    -- Insert a order entry (must have a order_id & menu_id first)
    INSERT INTO order_entry (order_id,
                            menu_id,
                            quantity,
                            entry_description)
    VALUES (1,1,1,'Nothing');

    -- Insert a customer address (must have a customer_id first)
    INSERT INTO cust_address (cust_id,
                            street_num,
                            street_name,
                            apt_name,
                            apt_num,
                            city,
                            zipcode)
    VALUES (1,813,'Meadowside Ct',NULL,NULL,'Garland',75043);

}

-- Query for the Completed Order Ticket

-- Query All items in the Order Ticket
SELECT p.menu_id, p.sort_id, p.item_name, p.item_cost, b.quantity, b.entry_description
FROM menu_item p
JOIN order_entry b ON p.menu_id = b.menu_id
JOIN order_cart s ON s.order_id = b.order_id
WHERE s.cust_id = 1;

-- Query Order Details for Order Ticket
SELECT s.order_time, s.order_date,s.payment,s.order_type,s.num_items,s.sub_total,s.total_cost
FROM menu_item p
JOIN order_entry b ON p.menu_id = b.menu_id
JOIN order_cart s ON s.order_id = b.order_id
WHERE s.cust_id = 1;

-- Update Order Cost (Subtotal *Still needs TAX)
UPDATE order_cart
SET sub_total = sub.total
FROM (SELECT coalesce(SUM(p.item_cost * b.quantity),0) AS total
FROM menu_item p
JOIN order_entry b ON p.menu_id = b.menu_id
JOIN order_cart s ON s.order_id = b.order_id
WHERE s.cust_id = 1) sub
WHERE order_cart.order_id = 1;

-- Update Order Total Item
UPDATE order_cart
SET num_items = sub.total
FROM (SELECT coalesce(SUM(b.quantity),0) AS total
FROM menu_item p
JOIN order_entry b ON p.menu_id = b.menu_id
JOIN order_cart s ON s.order_id = b.order_id
WHERE s.cust_id = 1) sub
WHERE order_cart.order_id = 1;


-- Update Quantity for an Menu Item
UPDATE order_entry SET quantity = 2 WHERE order_id = 1 AND menu_id = 1;

-- Delete Menu Item from Order Entry
DELETE FROM order_entry WHERE order_id = 1 AND menu_id = 1;

