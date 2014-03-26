var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Stop = new Schema({
    stop_id    : String,
    datestop   : Date,
    race       : String,
    xcoord     : Number,
    ycoord 		 : Number,
    frisked    : String,
    searched   : String,
    updated_at : Date
});
 
mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/express-todo' );