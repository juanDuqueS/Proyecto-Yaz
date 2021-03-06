const item = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    id_item: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_description: {
      type: DataTypes.STRING,
    },
    item_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });

  item.sync({logging: true });
  return item;
};

export default item;