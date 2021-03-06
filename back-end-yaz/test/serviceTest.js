const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = "http://localhost:3000";

describe("Service Test", function () {
    describe("Get 'all services' endpoint", function () {
        it("Should return all services", function (done) {
            chai.request(url)
                .get('/services')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Insert a 'service' endpoint", function () {
        it('Should insert a service', function (done) {
            chai.request(url)
                .post('/services')
                .send({
                    id_service: 123456789, id_client: 1, client_name: "Juanito", worker_name: "Pepito", service_date_start: "2008-11-11 13:23:44",
                    service_date_end: "2008-11-11 13:23:44", service_color: "Red", service_name: "blower", service_status: "Open"
                })
                .end(function (err, res) {
                    expect(res).to.have.status(201);
                    done();
                });
        });
    });

    describe("Get 'one service' endpoint", function () {
        it("Should return a service with id 123456789", function (done) {
            chai.request(url)
                .get('/services/id=123456789')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe("Update 'one service' endpoint", () => {
        it('Should update the service status', (done) => {
            chai.request(url)
                .put('/services/id=123456789')
                .send({ service_status: "closed" })
                .end(function (err, res) {
                    expect(res.body.data).to.have.property('service_status').to.be.equal("closed");
                    expect(res).to.have.status(201);
                    done();
                });
        });
    });

    describe("Delete 'one service' endpoint", () => {
        it('Should delete the service with id 123456789', (done) => {
            chai.request(url)
                .del('/services/id=123456789')
                .end(function (err, res) {
                    expect(res.body.data).to.be.equal(1);
                    expect(res).to.have.status(200)
                    done();
                });
        });
    });
});
