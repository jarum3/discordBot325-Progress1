/* eslint-disable no-unused-vars */
module.exports = {
  createRole: function (guild, roleName, color) {
    // Create a new role
    guild.roles.create({
      name: roleName,
      color: color,
    })
      .then(role => console.log('Role created: ' + role.name))
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
  appendRoleToDisk: function (role, file) {
    // TODO Write data passed as an object to JSON, append to file given.
    return 0;
  },
  isColor: function (strColor) {
    const { Colors } = require('discord.js');
    const RegExp = /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i; // Regex to check if the input is a valid hex code.
    return Object.keys(Colors).includes(this.capitalizeString(strColor)) || RegExp.test(strColor);
  },
  capitalizeString: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};