import { GalaticAge } from './../src/galaticAge.js';

describe ('GalaticAge', function () {
  let person;
  let test;

    beforeEach(function() {
      person = new GalaticAge ("Nick",9,99,9999,"sun")

    });

    it ('displays user given name and age', function() {
      test = new GalaticAge("Nick",1,11,111,"earf");
      expect(test.name).toEqual("Nick");
      expect(test.planet).toEqual("earf");
  });

    it ('state user birthday on earth', function() {
      test = new GalaticAge("Nick",1,11,111,"earf");
      expect(test.month).toEqual(1);
      expect(test.day).toEqual(11);
      expect(test.year).toEqual(111);
  });

    it ('store and return todays date', function() {
      let testDate = new Date;
      console.log(test.todayDate.getDate())
      console.log(test.todayDate.getMonth())
      console.log(test.todayDate.getFullYear())

      expect(test.todayDate.getDate()).toEqual(testDate.getDate());
      expect(test.todayDate.getMonth()).toEqual(testDate.getMonth());
      expect(test.todayDate.getFullYear()).toEqual(testDate.getFullYear());
  });

  it ('should test yearsToDays(years) to see if it returns the number of days for the number of years inputted', function() {
    console.log(person)
    let years = 10;
      console.log(person.yearsToDays(10))
    let days = person.yearsToDays(10);
    expect(days).toEqual(3650);
  });


});
