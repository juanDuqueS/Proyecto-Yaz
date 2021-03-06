import ServiceService from '../services/ServiceService';
import Util from '../utils/Utils';

const util = new Util();

class ServiceController {

    static async getAllServices(req, res) {
        try {
            const allService = await ServiceService.getAllServices();
            if(allService.length > 0){
                util.setSuccess(200, 'Service returned', allService)
            } else {
                util.setSuccess(204, 'No service found');
            }
            return util.send(res); 
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addService(req, res) {
        const newService = req.body
        try {
            const createdService = await ServiceService.addService(newService);
            util.setSuccess(201, `New service created!`, createdService);
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async updateServiceById(req, res) {
        const { id } = req.params;
        const alteredService = req.body;
        if (!Number.isInteger(Number(id))) {
            util.setError(400, 'Please input a valid numeric value');
            return util.send(res);
        }
        try {
            const updateService = await ServiceService.updateServiceById(id, alteredService)
            if(updateService){
                util.setSuccess(201, `Service ${id} updated!`, updateService);
            }else{
                util.setSuccess(204, `Could not update service ${id}!`)
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async getServiceById(req, res) {
        const { id } = req.params;
        if (!Number.isInteger(Number(id))) {
            util.setError(400, 'Please input a valid numeric value');
            return util.send(res);
        }
        try {
            const returnedService = await ServiceService.getServiceById(id);
            if(returnedService){
                util.setSuccess(200, `Service ${id} returned!`, returnedService);
            }else{
                util.setSuccess(204, `Could not found service ${id}!`);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async deleteServiceById(req, res) {
        const { id } = req.params;
        if (!Number.isInteger(Number(id))) {
            util.setError(400, 'Please input a valid numeric value');
            return util.send(res);
        }
        try {
            const serviceToDelete = await ServiceService.deleteServiceById(id);
            if(serviceToDelete){
                util.setSuccess(200, `User ${req.body.name} deleted service ${id}!`, serviceToDelete);
            }else{
                util.setSuccess(204, `The service you are looking for can not be found`);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}

export default ServiceController;