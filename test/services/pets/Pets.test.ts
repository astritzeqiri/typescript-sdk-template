import nock from 'nock';

import { Petstoresdk } from '../../../src';

import { PetsService } from '../../../src/services/pets/Pets';

describe('test PetsService object', () => {
  it('should be an object', () => {
    expect(typeof PetsService).toBe('function');
  });
});

describe('test Pets', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Petstoresdk({});

    nock.cleanAll();
  });

  describe('test listPets', () => {
    test('test api call', () => {
      const scope = nock('http://petstore.swagger.io/v1')
        .get('/pets?limit=4')
        .reply(200, { data: {} });
      return sdk.pets.listPets({ limit: 4 }).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createPets', () => {
    test('test api call', () => {
      const scope = nock('http://petstore.swagger.io/v1').post('/pets').reply(200, { data: {} });
      return sdk.pets.createPets({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test showPetById', () => {
    test('test api call', () => {
      const scope = nock('http://petstore.swagger.io/v1')
        .get('/pets/dolorum')
        .reply(200, { data: {} });
      return sdk.pets.showPetById('dolorum').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('http://petstore.swagger.io/v1')
        .get('/pets/odit')
        .reply(200, { data: {} });
      return expect(async () => await sdk.pets.showPetById()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('http://petstore.swagger.io/v1')
        .get('/pets/expedita')
        .reply(404, { data: {} });
      return expect(async () => await sdk.pets.showPetById('expedita')).rejects.toThrow();
    });
  });
});