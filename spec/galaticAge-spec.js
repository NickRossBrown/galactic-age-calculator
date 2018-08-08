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

  it ('find the number of seconds someone for every year that peron lived', function() {
    const person1 = new GalaticAge("Nick",4,27,1990,"earf");
    expect(person1.totalSecondsLived()).toEqual(892489686);
  });

  it ('should test mercuryYears calculation from earth years into Mercury years ', function() {
    years = person.mercuryYears(21)
    expect(years).toEqual(87.5);
  });

  it ('should test Venus years calculation from earth years', function() {
    years = person.venusYears(21)
    expect(years).toEqual(33.87);
  });

  it ('should test Mars years calculation from earth years', function() {
    years = person.marsYears(21)
    expect(years).toEqual(11.17);
  });

  it ('should test Jupitor years calculation from earth years', function() {
    years = person.jupitorYears(21)
    expect(years).toEqual(1.77);
  });

  it ('calculates the slope knowing two points', function() {
    let x1 = 6
    let x2 = 2
    let y1 = 3
    let y2 = 6
    const slope = person.xyslope(x1,y1,x2,y2)
    expect(slope).toEqual(-.75);
  });

  it ('find the 4th value given a slope and 3 out of 4 values of two points', function() {
    let x1 = 1
    let x2 = 2
    let y1 = 1
    let slope = 1
    const y2 = person.findY2(x1,y1,x2,slope)
    expect(y2).toEqual(2);
  });

  it ('lopos through an obects value to return an array of rays for x,y corrdiantes', function() {
    let ob = person.maleExpectancyValues
    expect(person.xyCoor).toEqual([])
    const y2 = person.loopObject(ob)
    expect(person.xyCoor).toEqual([ [ 0, '76.50' ], [ 30, '77.81' ], [ 60, '81.04' ], [ 65, '82.18' ], [ 70, '83.68' ], [ 100, '102.00' ] ]);
  });


  it ('loops through the xycood array to find an save the slope between the points and saves them to this.slope', function() {
    expect(person.slope).toEqual([])
    const slope = person.loopArray(person.xyCoor)
    expect(age).toEqual(81.61);

  });

  it ('calculates the years life given age', function() {
    const age = person2.lifeCalc()
    expect(age).toEqual(81.61);

  });

  it ('returns the number of age someone is over the average life', function() {
    overAverageLifeSpan(80)
    expect(age).toEqual(3.5);
  });

  it ('determine how many expected earth years a male user has outlived over expected life expectancy or returns false if they are below' , function() {
    let over = person.overAverageLifeSpan(83)
    expect(over).toEqual(6.5);
    over = person.overAverageLifeSpan(71.5)
    expect(over).toEqual(5);
  });


});
