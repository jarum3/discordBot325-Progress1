/* eslint-disable no-unused-vars */
module.exports = {
  createRole: function (guild, roleName, color) {
    // Create a new role
    guild.roles.create({
      name: roleName,
      color: color,
    })
      .then(console.log())
      .catch(console.error());
    return guild.roles.cache.find(role => role.name === roleName);
  },
  createCategory: function (categoryName, roleId) {
    // TODO
    return 0;
  },
  createChannel: function (channelName, categoryId) {
    // TODO
    return 0;
  },
  getSemester: function () {
    // TODO
    return 0;
  },
  archiveCategory: function (categoryId) {
    // TODO
    return 0;
  },
};