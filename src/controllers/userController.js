const fs = require("fs");
const FILE_PATH = `${__dirname}/../data/names.json`;

const getUsers = (req, res, next) => {
	fs.readFile(FILE_PATH, (err, data) => {
		if (err) throw err;

		const users = JSON.parse(data);

		const userData = {
			firstName: users[Math.floor(Math.random() * users.length)].firstName,
			lastName: users[Math.floor(Math.random() * users.length)].lastName,
		};

		res.status(200).json({ ...userData });

		next();
	});
};

module.exports = {
	getUsers,
};
