/* eslint-disable no-unused-vars */
module.exports = {
  createRole: function (guildId, roleName, color) {
    // Create a new role
    const role = guildId.roles.create({
      name: roleName,
      color: color,
    })
      .then(console.log)
      .catch(console.error);
    return role.roleId;
  },
  createCategory: function (categoryName, roleId) {
    return 0;
  },
  createChannel: function (channelName, categoryId) {
    return 0;
  },
  getSemester: function () {
    return 0;
  },
  archiveCategory: function (categoryId) {
    return 0;
  },
};