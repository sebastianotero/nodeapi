// DID NOT HAVE ENOUGH TIME TO FINISH TESTS!


process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let should = chai.should();

chai.use(chaiHttp);

    
  /*
  * Test the /POST route
  */
  describe('POST', () => {
      it('it should..', (done) => {
        let parameters = {
            longitude: 151.1957362,
            latitude: -33.8670522,
            customer: "Paris FCU"
        }
        chai.request(server)
            .post('/')
            .send(parameters)
            .end((err, res) => {
                res.should.have.status(200);
                // res.body.should.be.a('object');
                // res.body.should.have.property('errors');
                // res.body.errors.should.have.property('pages');
                // res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });
