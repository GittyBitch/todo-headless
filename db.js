const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	dialect: 'sqlite',
	storage: 'database.sqlite'
});

const TodoItem = sequelize.define('TodoItem', {
	title: DataTypes.STRING,
	description: DataTypes.STRING,
	date: DataTypes.DATE,
	status: {
		type: Sequelize.ENUM,
		values: ['open', 'in progress', 'finished']
	}
});

async function syncDatabase() {
	try {
		await sequelize.sync();
		console.log("All models were synchronized successfully.");
	} catch (error) {
		console.error('Error in synchronizing the database:', error);
	}
}

module.exports = {
	sequelize: sequelize,
	TodoItem: TodoItem,
	syncDatabase: syncDatabase
};

