const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  { firstName: {
      type: String,
      trim: true,
      maxlength: 25
    },

 lastName: {
      type: String,
      trim: true,
      maxlength: 25
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
   
    minit: {
      type: String,
      trim: true,
      maxlength: 25
    },
    phoneNumber:{
        type: String
    },
    properties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'properties'
      }
    ]
  },

  { timestamps: true }
)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the password should not be revealed
      delete returnedObject.password
    }
  })
  const User  = mongoose.model('user', userSchema)
  module.exports = User