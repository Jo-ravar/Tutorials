const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    linkedin: {
      id: String,
      token: String,
      email: String,
      name: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
