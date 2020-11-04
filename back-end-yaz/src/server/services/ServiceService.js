import models from '../src/models';

class ServiceService {
  static async getAllServices() {
    try {
      return await models.service.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addService(newService) {
    try {
      return await models.service.create(newService);
    } catch (error) {
      throw error.errors[0].message.toString();
    }
  }

  static async updateServiceById(id, updateService) {
    try {
      const serviceToUpdate = await models.service.findOne({
        where: { id_service: Number(id) }
      });

      if (serviceToUpdate) {
        await models.service.update(updateService, { where: { id_service: Number(id) } });

        return updateService;
      }
      return null;
    } catch (error) {
      throw error.errors[0].message.toString();
    }
  }

  static async getServiceById(id) {
    try {
      const returnedService = await models.service.findOne({
        where: { id_service: Number(id) }
      });

      return returnedService;
    } catch (error) {
      throw error.errors[0].message.toString();
    }
  }

  static async deleteServiceById(id) {
    try {
      const serviceToDelete = await models.service.findOne({ where: { id_service: Number(id) } });

      if (serviceToDelete) {
        const deletedService = await models.service.destroy({
          where: { id_service: Number(id) }
        });
        return deletedService;
      }
      return null;
    } catch (error) {
      throw error.errors[0].message.toString();
    }
  }
}

export default ServiceService;