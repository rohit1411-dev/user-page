import chai, { should } from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'node:test';
import express from 'express';

const app = express();


chai.should();
chai.use(chaiHttp);

describe('it should test Task Rest API', () => {
    describe('Test Get API', () => {
        it('should test GET API', (done) => {
            chai.request(app).get('/api/task/all/:userId')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        });
    })
})