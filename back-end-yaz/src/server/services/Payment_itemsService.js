import database from '.../src/models';

class Payment_itemsService {
  static async getAllPayment_itemss() {
    try {
      return await database.Payment_items.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addPayment_items(newPayment_items) {
    try {
      return await database.Payment_items.create(newPayment_items);
    } catch (error) {
      throw error;
    }
  }

  static async updatePayment_itemsById(id, updatePayment_items) {
    try {
      const payment_itemsToUpdate = await database.Payment_items.findOne({
        where: { id_payment_item: Number(id_payment_item) }
      });

      if (payment_itemsToUpdate) {
        await database.Payment_items.update(updatePayment_items, { where: { id_payment_item: Number(id_payment_item) } });

        return updatePayment_items;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getPayment_itemsById(id) {
    try {
      const returnedPayment_items = await database.Payment_items.findOne({
        where: { id_payment_item: Number(id_payment_item) }
      });

      return returnedPayment_items;
    } catch (error) {
      throw error;
    }
  }

  static async deletePayment_itemsById(id) {
    try {
      const payment_itemsToDelete = await database.Payment_items.findOne({ where: { id_payment_item: Number(id_payment_item) } });

      if (payment_itemsToDelete) {
        const deletedPayment_items = await database.Payment_items.destroy({
          where: { id_payment_item: Number(id_payment_item) }
        });
        return deletedPayment_items;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default Payment_itemsService;