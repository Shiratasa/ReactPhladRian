/* eslint-disable */
import { createRequire } from 'module';

{
  /* Values */
}
const require = createRequire(import.meta.url);
var express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

{
  /* SQL Connect */
}
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

{
  /* Receiver Post */
}
app.post('/R_regis', function(req, resp){
	const Username = req.body.Username;
	const Email = req.body.Email;
	const Image = req.body.Image;
	const Password = req.body.Password;
	const State = req.body.State;
	connection.query("INSERT INTO UserStudent (Username, Email, Image, Password, State) VALUES (?, ?, ?, ?, 1)", 
		[Username, Email, Image, Password], function(error, rows, fields){
		if(error){
			console.error('Insert failed:\n' + error.stack);
			connection.end();
			throw error;
		}
	})
})

{
  /* Donor Post */
}
app.post('/D_regis', function(req, resp){
	const Username = req.body.Username;
	const Email = req.body.Email;
	const Password = req.body.Password;
	const State = req.body.State;
	connection.query("INSERT INTO UserDonor (Username, Email, Password, State) VALUES (?, ?, ?, 1)", 
		[Username, Email, Password], function(error, rows, fields){
		if(error){
			console.error('Insert failed:\n' + error.stack);
			connection.end();
			throw error;
		}
	})
})

{
  /* Admin Get */
}
app.get('/', function(req, resp){
	connection.query("SELECT * FROM UserAdmin", function(error, rows, fields){
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

{
  /* SQL Port */
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});