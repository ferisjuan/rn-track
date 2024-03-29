const mongoose = require('mongoose')
const bycript = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bycript.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bycript.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bycript.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      return resolve(isMatch);
    })
  })
}

module.exports = mongoose.model('User', userSchema)
