const mongoose = require( 'mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [ true, "First Name must be specified"]
    },
    lastName:{
        type: String,
        required: [ true, "Last Name must be specified"]
    },
    email:{
        type: String,
        required: [ true, "Email must be specified"],
        unique: [ true, "Only one email address per user"]
    },
    password:{
        type: String,
        required: [ true, "Password must be specified"]
    },
    cellPhone:{
        type: String,
        unique: [ true, "Only one phone number per user"],
        required: [ true, "A cell phone number must be specified"]
    },
    repairRequests: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Account",
        }
    ],

},
{
    timestamps: true
})

module.exports = mongoose.model( "User", userSchema)