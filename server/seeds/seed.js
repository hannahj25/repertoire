const connection = require('../config/connection');
const User = require('../models/User');
const {faker} = require('@faker-js/faker');
const { Item } = require('../models');


const statuses = ['learning', 'to_learn', 'learned']

function createItem(payload){


    const body = {
        title: faker.name.jobTitle(),
        composer: faker.name.findName(),
        genre: faker.music.genre(),
        status: faker.helpers.arrayElement(statuses),
        deadline: new Date(),
        notes: faker.lorem.sentence(),
        ...payload,
    }

    return Item.create(body);

}

async function createMultipleItems(num=3){
    const created = [];
    for (let index = 0; index < num; index++) {
        const item = await createItem();
        created.push(item);
    }
    return created;
}
// Uses fakerjs to create dummy users
connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Item.deleteMany({});
    for (let index = 0; index < 10; index++) {
      const user = await User.create({
          username: faker.internet.userName(), 
          email: faker.internet.email(),
          password: 'password123'
        });

      const items = await createMultipleItems(3);

      user.items = items.map(item => item._id);
      await user.save();
    }
})