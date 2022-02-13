const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userdata = [
	{
		username: 'person1',
		email: 'person1@go.com',
		password: 'password1234'
	},
	{
		username: 'person2',
		email: 'person2@gp.co.uk',
		password: 'password1234'
	},
	{
		username: 'person3',
		email: 'person3@test.com',
		password: 'password1234'
	},
	{
		username: 'person4',
		email: 'person4@hotmail.co.uk',
		password: 'password123'
	},
	{
		username: 'person5',
		email: 'person5@hotmail.com',
		password: 'password1234'
	},
	{
		username: 'person6',
		email: 'person6@gmail.co.uk',
		password: 'password1234'
	},

];
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;