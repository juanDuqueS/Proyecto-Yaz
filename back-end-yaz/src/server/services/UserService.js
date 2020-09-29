import database from '.../src/models';

class UserService {
  static async getAllUsers() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUserById(id, updateUser) {
    try {
      const userToUpdate = await database.User.findOne({
        where: { id_user: Number(id_user) }
      });

      if (userToUpdate) {
        await database.User.update(updateUser, { where: { id_user: Number(id_user) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const returnedUser = await database.User.findOne({
        where: { id_user: Number(id_user) }
      });

      return returnedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserById(id) {
    try {
      const userToDelete = await database.User.findOne({ where: { id_user: Number(id_user) } });

      if (userToDelete) {
        const deletedUser = await database.User.destroy({
          where: { id_user: Number(id_user) }
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;