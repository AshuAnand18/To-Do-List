const mongoose = require('mongoose');
// connect to the database
mongoose.connect('mongodb+srv://ash07:bwWyTqKl32S19RP5@cluster0.uhl6sv5.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('successfully connected');
}).catch((e) => {
    console.log('Database not connected');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));
db.once('open', function() {
    console.log('Connected to Database');
});
module.exports = db;
