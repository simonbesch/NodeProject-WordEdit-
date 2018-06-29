import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email:{type:String},
  username: {type: String, index: true},
  name:{type:String},
  profileimage:{type:String},
  ouvrage: {type: String},
  type:{type:String}

})

const User = mongoose.model('User', UserSchema)

export { User }
