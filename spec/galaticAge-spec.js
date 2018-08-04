import { GalaticAge } from './../src/galaticAge.js';

describe ('GalaticAge', function () {
  let person;
  let test;
  let years;
  let days;
  let months;
  let seconds;
  let hours;

    beforeEach(function() {
      person = new GalaticAge ("Nick",9,99,9999,"sun")
      years = 0

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
      expect(test.todayDate.getDate()).toEqual(testDate.getDate());
      expect(test.todayDate.getMonth()).toEqual(testDate.getMonth());
      expect(test.todayDate.getFullYear()).toEqual(testDate.getFullYear());
  });

  it ('should test yearsToDays(years) to see if it returns the number of days for the number of years inputted', function() {
    years = 10;
    days = person.yearsToDays(10);
    expect(days).toEqual(3650);
  });

  it ('should test monthToDays(month) to see if it returns the number of days for the inputted month', function() {
    days = person.daysInMonth(10);
    expect(days).toEqual(31);
  });

  it ('should test monthsToDays(month) to see if it returns the number of days for every month during the year from the inputted month', function() {
    days = person.monthsToDays(10);
    expect(days).toEqual(304);
  });

  it ('should test daysToHours(days) calcuation from changing days into hours ', function() {
    hours = person.daysToHours(31) ;
    expect(hours).toEqual(744);
  });

  it ('should test hoursToSec(hours) calculation from changing hours into seconds ', function() {
    seconds = person.hoursToSec(2);
    expect(seconds).toEqual(7200);
  });

  it ('should test hoursToSec(hours) calculation from changing hours into seconds ', function() {
    seconds = person.hoursToSec(2);
    expect(seconds).toEqual(7200);
  });

  it ('should test yearsToSec calculation from changing hours into seconds ', function() {
    seconds = person.yearsToSec(2);
    expect(seconds).toEqual(31557600*2);
  });

  it ('find the number of seconds someone has lived during a calendar year', function() {
    const person1 = new GalaticAge("Nick",4,27,1990,"earf");
    days = person1.day
    let monthDays = person1.monthsToDays(person1.month-1)
    days += monthDays
    hours = person1.daysToHours(days)
    seconds = person1.hoursToSec(hours)
    expect(seconds).toEqual(10108800);
  });


  it ('find the number of seconds someone for every year that peron lived', function() {
    const person1 = new GalaticAge("Nick",4,27,1990,"earf");
    let testDate = new Date;
    years = testDate.getFullYear() - person1.year
    seconds = person1.yearsToSec(years)
    days = person1.day
    let monthDays = person1.monthsToDays(person1.month-1)
    days += monthDays
    hours = person1.daysToHours(days)
    const seconds2 = person1.hoursToSec(hours)
    const total = seconds + seconds2
    expect(total).toEqual(892080000);
  });

  it ('should test mercuryYears calculation from earth years into Mercury years ', function() {
    years = person.mercuryYears(21)
    expect(years).toEqual(87.2);
  });

  it ('should test Venus years calculation from earth years', function() {
    years = person.venusYears(21)
    expect(years).toEqual(31.5);
  });

  it ('should test Mars years calculation from earth years', function() {
    years = person.marsYears(21)
    expect(years).toEqual(11.1);
  });

  it ('should test Jupitor years calculation from earth years', function() {
    years = person.jupitorYears(21)
    expect(years).toEqual(1.77);
  });

  it ('knowing a only a persons age and gender, it calculates the general expected life expectancy for a male' , function() {
    let yearsLeft = person.maleLifeExpectancy(30);
    expect(yearsLeft).toEqual(77.81);
    yearsLeft = person.maleLifeExpectancy(60);
    expect(yearsLeft).toEqual(81.04);
    yearsLeft = person.maleLifeExpectancy(65);
    expect(yearsLeft).toEqual(81.04);
    yearsLeft = person.maleLifeExpectancy(70);
    expect(yearsLeft).toEqual(83.68);
    yearsLeft = person.maleLifeExpectancy(100);
    expect(yearsLeft).toEqual(102);
  });

  it ('determine how many expected earth years a male user has outlived over expected life expectancy or returns false if they are below' , function() {
    let over = person.overAverageLifeSpan(83)
    expect(over).toEqual(6.5);
    over = person.overAverageLifeSpan(71.5)
    expect(over).toEqual(5);
  });

  // it ('knowing a only a persons age and gender, it calculates the general expected life expectancy for a female' , function() {
  //   let yearsLeft = person.femaleLifeExpectancy(83.81)
  //   expect(years).toEqual();
  // });


  // it ('determine how many expected earth years a female user has outlived over expected life expectancy' , function() {
  //   let years = person.yearsPastAverageFemaleLifeExpectancy(95)
  //   let age = 100
  //   // console.log(years)
  //   expect(years).toEqual(100-80.8);
  // });



});
