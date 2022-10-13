const mongoose = require( 'mongoose')

const repairSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [ true, "Account must belong to a user"]
    },
    title:{
        type: String,
        required: [ true, "Title must be specified"]
    },
    description:{
        type: String,
        required: [true, "Description must be specified"]
    },
},
{
    timestamps: true
})

module.exports = mongoose.model( "Repair", repairSchema)