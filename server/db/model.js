const Joi = require('joi');
const db = require('./connections');

const schema = Joi.object().keys({
  self   : Joi.string().alphanum().required(),
  target : Joi.string().alphanum().required(),
  message: Joi.string().required(),
  public : Joi.boolean().required()
});

const messages = db.get('messages');

function getAll() {
  return messages.find({
    "public": true
  });
}

function get(name) {
  return messages.find({
    "target": name
  })
}

function post(msg) {
  const output = Joi.validate(msg, schema);
  if (output.error == null) {
    return messages.insert(msg);
  } else {
    return Promise.reject(output.error);
  }
}

function deleteMsg(id) {
  const dbid = id._id;
  return messages.remove({
    "_id": dbid
  })
}

module.exports = {
  getAll, get, post, deleteMsg
};