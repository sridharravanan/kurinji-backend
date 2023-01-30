
const upSql = `CREATE TABLE site_members (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    first_name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    last_name varchar(255) COLLATE utf8mb4_unicode_ci NULL,
    display_name varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    site_id bigint(20) COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at datetime NULL,
    updated_at datetime NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (site_id) REFERENCES sites(id)
    )`;
module.exports = {
    "up": upSql,
    "down": "DROP TABLE site_members"
}