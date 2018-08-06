import { LifeExpectancy } from './../src/lifeExpectancy.js';

describe ('LifeExpectancy', function () {
  let person;


    beforeEach(function() {
      person = new GalaticAge (27, "male")

    });

    it ('displays user given age and gender', function() {
      expect(person.age).toEqual("Nick");
      expect(person.gender).toEqual("male");
  });
