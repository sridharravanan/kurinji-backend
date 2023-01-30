const upSql = `CREATE TABLE streets (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    description text COLLATE utf8_general_ci NULL,
    PRIMARY KEY (id)
    )`;
module.exports = {
    "up": upSql,
    "down": "DROP TABLE streets"
}