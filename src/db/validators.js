const Role = require('../models/role');
const User = require('../models/user');

const isRoleValid = async (role = '') => {
  if (!(await Role.findOne({ role }))) {
    throw new Error(`Role ${role} is not registered in BD`);
  }
};

const emailExits = async (email = '') => {
  if (await User.findOne({ email })) {
    throw new Error(`This email '${email}' is already registered.`);
  }
};

module.exports = {
  isRoleValid,
  emailExits,
};
