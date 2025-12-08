SET weight_kg = weight_kg + 1
WHERE neutered = true

SELECT (
    CASE WHEN(weight_kg > 12.5)
        THEN 'big'
        ELSE 'small'
    END) "size",
    COUNT(weight_kg) count 
    -- is big, COUNT(*) FROM animals GROUP BY is_big;
