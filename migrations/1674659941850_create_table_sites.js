const upSql = `CREATE TABLE sites (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    door_no varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    street_id bigint(20) COLLATE utf8mb4_unicode_ci NOT NULL,
    description text COLLATE utf8_general_ci NULL,
    created_at datetime NULL,
    updated_at datetime NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (street_id) REFERENCES streets(id)
    )`;
module.exports = {
    "up": upSql,
    "down": "DROP TABLE sites"
}