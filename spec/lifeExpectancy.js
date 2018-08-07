mport { LifeExpectancy } from './../src/lifeExpectancy.js';

describe ('LifeExpectancy', function () {
  let person;


    beforeEach(function() {
      person = new LifeExpectancy (27, "male")
    });

    it ('displays user given age and gender', function() {
      expect(person.age).toEqual("Nick");
      expect(person.gender).toEqual("male");
    });


    it ('calculates the slope knowing two points', function() {
      let x1 = 6
      let x2 = 2
      let y1 = 3
      let y2 = 6
      const slope = person.slope(x1,y1,x2,y2)
      expect(slope).toEqual(-.75);
    });


    it ('find the 4th value given a slope and 3 out of 4 values of two points', function() {
      let x1 = 6
      let x2 = 2
      let y1 = 3
      let slope = .5
      const y2 = person.findY2(x1,y1,x2,slope)
      expect(y2).toEqual(1);
    });

    it ('lopos through an obects value to return an array of rays for x,y corrdiantes', function() {
      let array = person.maleExpectancyValues
      const y2 = person.loopArray(array)
      expect(y2).toEqual(1);
    });

    it ('calculates the years life given age', function() {
      person2 = new LifeExpectancy (30, "male")
      const age = person2.lifeCalc()
      expect(age).toEqual(81.61);

    });

    it ('returns the number of age someone is over the average life', function() {
      overAverageLifeSpan(80)
      expect(age).toEqual(3.5);
    });



  });
