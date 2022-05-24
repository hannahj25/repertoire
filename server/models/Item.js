const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
      


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