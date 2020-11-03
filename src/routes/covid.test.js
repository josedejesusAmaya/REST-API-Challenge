const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    it('Responds with "Hello, World"', done => {
      request(app)
        .get('/api')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect("Hello, World")
        .expect(200, done)
        
    });
});

describe('GET /api/info"', () => {
  it('Responds a JSON with three variables', done => {
    request(app)
        .get('/api/info')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
        
  });

  it('Responds with 500 error', done => {
    request(app)
        .get('/api/infos')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done)
        
  });
});
