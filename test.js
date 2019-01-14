var chai = require('chai');
var chaiHttp = require('chai-http')
var expect = chai.expect;

chai.use(chaiHttp);

describe('Walmart Item Test', ()=> {
 it('Must navigate to Walmart webpage for Item# 6000166640889', (done)=> {
    chai.request('https://www.walmart.ca').get('/en/ip/intex-metal-frame-pool/6000166640889')
    .end(function(err,res){
      describe('Verify Webpage Details', () => {
        it('Response Status Code must be 200', () => {
          expect(res).to.have.status(200)
        })
        it('Must contain logo', () => {
          expect(res.text).to.contains('logo')
        })
        it('Response Status Code must be 400', () => {
          expect(res.text).to.contains('flyer')
        })
      done();
      })
    })
  })
})