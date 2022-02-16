"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "example@example.com",
        password: "123456",
        firstName: "Cao",
        lastName: "Tuong",
        address: "USA",
        phonenumber: "0923429423",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
