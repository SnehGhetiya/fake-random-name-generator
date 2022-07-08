const app = require("./src/index");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`);
});
