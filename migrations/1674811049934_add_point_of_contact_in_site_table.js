const upSql = `ALTER TABLE sites
ADD member_id BIGINT(20) NOT NULL AFTER street_id,
ADD CONSTRAINT fk_member_id FOREIGN KEY (member_id) REFERENCES site_members(id);`;
const DownSql = `ALTER TABLE sites
DROP FOREIGN KEY fk_member_id,DROP COLUMN member_id;`;
module.exports = {
    "up": upSql,
    "down": DownSql
}