import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'PhladRian_Database',
});

connection.connect(function(error){
	if(error){
		console.error('Connection failed:\n' + error.stack);
		connection.end();
		throw error;
	}
	else{
		console.log('Connected as id: ' + connection.threadId);
	}
})

app.post('/R_regis', function(req, resp){
	const Username = req.body.Username;
	const Email = req.body.Email;
	const Image = req.body.Image;
	const Password = req.body.Password;

	connection.query("INSERT INTO UserStudent (Username, Email, Image, Password) VALUES (?, ?, ?, ?)", 
		[Username, Email, Image, Password], function(error, rows, fields){
		if(error){
			console.error('Insert failed:\n' + error.stack);
			connection.end();
			throw error;
		}
	})
})

app.get('/', function(req, resp){
	connection.query("SELECT * FROM UserStudent", function(error, rows, fields){
		if(error){
			console.error('Query failed:\n' + error.stack);
			connection.end();
			throw error;
		}
		else{
			rows.forEach(result => {
				resp.json(result);
			});
		}
	})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});