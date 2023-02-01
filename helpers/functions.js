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
    // TODO Create category
    return 0;
  },
  createChannel: function (channelName, categoryId) {
    // TODO Create channel
    return 0;
  },
  archiveCategory: function (categoryId) {
    // TODO Archive a category
    return 0;
  },
  getSemester: function () {
    // TODO Get current semester
    return 0;
  },
};