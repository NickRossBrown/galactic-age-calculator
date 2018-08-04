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
    let years = 10;
    let days = person.yearsToDays(10);
    expect(days).toEqual(3650);
  });

  it ('should test monthToDays(month) to see if it returns the number of days for the inputted month', function() {
    let days = person.daysInMonth(10);
    expect(days).toEqual(31);
  });

  it ('should test monthsToDays(month) to see if it returns the number of days for every month during the year from the inputted month', function() {
    let days = person.monthsToDays(10);
    console.log(days)
    expect(days).toEqual(304);
  });

  it ('should test daysToHours(days) calcuation from changing days into hours ', function() {
    let hours = person.daysToHours(31) ;
    expect(hours).toEqual(744);
  });

  it ('should test hoursToSec(hours) calculation from changing hours into seconds ', function() {
    let seconds = person.hoursToSec(2);
    expect(seconds).toEqual(7200);
  });

  it ('should test mercuryYears(years calculation from earth years into Mercury years ', function() {
    let years = person.mercuryYears(21)
    console.log(years)
    expect(years).toEqual(5.04);
  });

  it ('should test Venus years calculation from earth years', function() {
    let years = person.venusYears(1)
    console.log(years)
    expect(years).toEqual();
  });

  it ('should test Mars years calculation from earth years', function() {
    let years = person.marsYears(1)
    console.log(years)
    expect(years).toEqual();
  });

  it ('should test Jupitor years calculation from earth years', function() {
    let years = person.jupitorYears(1)
    console.log(years)
    expect(years).toEqual();
  });

  it ('determine how many expected earth years a user had to live on earth' , function() {
    let years = person.jupitorYears(1)
    console.log(years)
    expect(years).toEqual();
  });

  it ('determine how many expected earth years a user has outlived' , function() {
    let years = person.jupitorYears(1)
    console.log(years)
    expect(years).toEqual();
  });



});
