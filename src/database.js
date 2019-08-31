// import mongoose from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/edu');

const studentSchema = mongoose.Schema({
	name: String,
	age: Number
});

const Student = mongoose.model('Student', studentSchema);

const s1 = new Student({
	name: 'jack',
	age: 18
});

s1.save( (err, result) => {
	console.log(result);
});