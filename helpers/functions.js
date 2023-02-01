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
    // return guildId.roles.cache.find(role => role.name === roleName);
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