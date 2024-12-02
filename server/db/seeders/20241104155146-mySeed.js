'use strict';
const bcrypt = require('bcrypt');
const { Post, User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        username: 'Alex',
        email: '111@111',
        password: bcrypt.hashSync('111', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Bob',
        email: '222@222',
        password: bcrypt.hashSync('222', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Carl',
        email: '333@333',
        password: bcrypt.hashSync('333', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Post.bulkCreate([
      {
        title: 'Neo 3000',
        desc: 'Золотая палитра листьев, тихий шелест ветра, запах сырой земли и свежескошенной травы.',
        url: 'https://sun9-5.userapi.com/impg/0Hb5eX-VHnNbPj5QPEI2kdFJUGLfU9ekZJUSoQ/LsYwZA-BRgI.jpg?size=403x604&quality=95&sign=f5acfb7a9043c52f6dfa6eee41bab325&type=album',
        userId: null,
      },
      {
        title: 'ChikenKiller',
        desc: 'Красочные пейзажи парка, уютные скамейки, дети, играющие в опавших листьях, и вечера, наполненные ароматом свежесваренного чая.',
        url: 'https://sun9-5.userapi.com/impg/0Hb5eX-VHnNbPj5QPEI2kdFJUGLfU9ekZJUSoQ/LsYwZA-BRgI.jpg?size=403x604&quality=95&sign=f5acfb7a9043c52f6dfa6eee41bab325&type=album',
        userId: null,
      },
      {
        title: 'Dude',
        desc: 'Подготовка к зиме, сбор урожая, закаты, окрашивающие небо в теплые тона, и уютные вечера у камина.',
        url: 'https://sun9-5.userapi.com/impg/0Hb5eX-VHnNbPj5QPEI2kdFJUGLfU9ekZJUSoQ/LsYwZA-BRgI.jpg?size=403x604&quality=95&sign=f5acfb7a9043c52f6dfa6eee41bab325&type=album',
        userId: null,
      },
      {
        title: 'Bob Marley',
        desc: 'Подготовка к зиме, сбор урожая, закаты, окрашивающие небо в теплые тона, и уютные вечера у камина.',
        url: 'https://sun9-5.userapi.com/impg/0Hb5eX-VHnNbPj5QPEI2kdFJUGLfU9ekZJUSoQ/LsYwZA-BRgI.jpg?size=403x604&quality=95&sign=f5acfb7a9043c52f6dfa6eee41bab325&type=album',
        userId: null,
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
