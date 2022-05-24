const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        composer: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,

        },
        deadline: {
           type: Date,

        },
        notes: {
            type: String,

        },


    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );


const Item = model('Item', itemSchema);

module.exports = Item;