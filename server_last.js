const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = express.Router();
const PORT = 4000;


//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/brainhub', {
	useNewUrlParser: true 
});

const connection = mongoose.connection;

connection.once('open', function () {
	console.log("Mongo database connection established sucessfully");
})

//Schema for mongoose
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    surname: { type: String, required: true, unique: true },
    mail: String,
    date: Date 
});

let User = mongoose.model('User', userSchema);

//Routes
app.use(bodyParser.json());
app.use('Users', Routes);

// app.get('/', function(req, res) {
// 	res.send('working');
// });

Routes.route('/').get(function(req, res) {
	User.find(function(err, Users) {
		if (err) {
			console.log(err);
		} else {
			res.json(Users);
		}
	});
});

Routes.route('/add').post(function(req, res) {
	let user = new userSchema(req.body);
	user.save()
		.then(user => {
			res.status(200).json({'user': 'user added sucessfully'});
		})
		.catch(err => {
			res.status(400).send('adding new user faild');
		});
});

// app.use('Users', Routes);

app.listen(PORT, function() {
	console.log('API is running on port ' + PORT);
});










//instancje klasy User
// const kenny = new User({
//     name: 'Kenny',
//     username: 'Kenny_the_boy',
//     password: 'password'
// });

// kenny.manify(function(err, name) {
//     if (err) throw err;
//     console.log('Twoje nowe imię to: ' + name);
// });


// const findAllUsers = function() {
//     // find all users
//     return User.find({}, function(err, res) {
//         if (err) throw err;
//         console.log('Actual database records are ' + res);
//     });
// }

// Promise.all(kenny.save())
//     .then(findAllUsers)
//     .catch(console.log.bind(console))