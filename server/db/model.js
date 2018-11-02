const Joi = require('joi');
const db = require('./connections');

const schema = Joi.object().keys({
  self   : Joi.string().required(),
  target : Joi.string().required().regex(/\//ig, { invert: true }),
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
  var n = new RegExp(name,'i');
  return messages.find({
    "target": n
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