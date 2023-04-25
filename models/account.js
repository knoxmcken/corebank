const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const User = require('./user');

const Account = sequelize.define('Account', {
  account_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account_number: {
    type: DataTypes.STRING,
    unique: true
  },
  // ... add other fields
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'accounts'
});

Account.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Account, { foreignKey: 'user_id' });

module.exports = Account;

