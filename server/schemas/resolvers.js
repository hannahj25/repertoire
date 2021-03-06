const { AuthenticationError } = require('apollo-server-express');
const { Item } = require('../models');
const User = require('../models/User');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
  
      user: async (parent, { userId }, context) => {
          if (!context.user) {
              throw new AuthenticationError('User not logged in.')
          }
        return User.findOne({ _id: userId });
      },

      getItems: async (parent, {}, context) => {
        if (!context.user) {
            throw new AuthenticationError('User not logged in.')
        }
        return User.findById(context.user._id).populate("items")
        .then((user) => user.items);
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
  
      
      removeUser: async (parent, { userId }) => {
        return User.findOneAndDelete({ _id: userId });
      },
      
    },
  };

  module.exports = resolvers;