const app = require("../src/app");
const request = require("supertest");

beforeAll(() => {
  console.log("before all")
})

afterAll(() => {
  console.log("afterAll")
})

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })

    it('Should retrieve the data', async done => {
        const res = await request(app).get('/')

        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('message')
        done()
    });
  })

  describe('Search for data', () => {

    it('POSITIVE Search Central term should success ', async done => {
        const res = await request(app).get('/api/v1/data/getData?search=Central')
        expect(res.status).toEqual(200)
        expect(res.body.responseCount).toBeGreaterThan(0)
        done()
    });

    it('POSITIVE With incorrect query term should not give error ', async done => {
      const res = await request(app).get('/api/v1/data/getData?ae=213123')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toBeGreaterThan(0)
      done()
    }); 

    it('POSITIVE With incorrect search term should provide all 0 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?search="Central')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(0)
      done()
    }); 

    it('POSITIVE With search term "voluptatum" should provide all 14 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?search=voluptatum')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(14)
      done()
    }); 

    it('POSITIVE With search term "voluptatum", limit 10 should provide only 10 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?search=voluptatum&limit=10')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(10)
      done()
    }); 

    it('POSITIVE With search term "voluptatum", limit 10, offset 7 should provide only 7 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?search=voluptatum&limit=10&skip=7')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(7)
      done()
    }); 
    
    it('POSITIVE With search term "voluptatum", limit 10, offset 7, orderby=dateLastEdited should provide only 7 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?sortBy=datelastedited&orderBy=desc&search=voluptatum&limit=10&skip=7')
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(7)
      expect(res.body.response[0].datelastedited).toEqual('2018-06-04T22:18:43.495Z')
      done()
    }); 

    it('NEGATIVE With search term "voluptatum", limit 10 should provide only 10 records ', async done => {
      const res = await request(app).get('/api/v1/data/getData?s')
      console.log(res)
      expect(res.status).toEqual(200)
      expect(res.body.responseCount).toEqual(100)
      done()
    }); 


  })