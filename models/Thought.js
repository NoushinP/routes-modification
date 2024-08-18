const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatMyDate = require('./utils/data.js');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:timeFormat => formatMyDate(timeFormat)
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughts = model('thought', thoughtSchema);

module.exports = thoughts;
