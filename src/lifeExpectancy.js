export class LifeExpectancy {
  constructor(age,gender) {
    this.age = age
    this.gender= gender
    this.maleExpectancyValues = {0:76.5, 30:47.81, 60:21.04, 65:17.18, 70:13.68, 100:2}
    this.femaleExpectancyValues = {0:80.8, 30:51.61, 60:23.81, 65:19.71, 70:15.92, 100:2.3}
    this.maleSlope = []
    this.maleM = []
  }

}
