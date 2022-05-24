const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
    {
      username: {
          type: String,
          required: true,
          unique: true,
          trim: true
      },
      email: {
          type: String,
          required: true,
          unique: true,
          validate: [validateEmail, 'Please fill a valid email address.']
  
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
      },
      items: [
          {type: Schema.Types.ObjectId,
          ref: "Item"}
      ]


    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

 userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  const User = model('User', userSchema);

module.exports = User;