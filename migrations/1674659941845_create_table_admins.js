const upSql = `CREATE TABLE admins (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    password varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at datetime NULL,
    updated_at datetime NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
    )`;
module.exports = {
    "up": upSql,
    "down": "DROP TABLE admins"
}