export class GalaticAge {

  constructor(name, month, day, year, planet, gender) {
    this.name = name
    this.day = day
    this.month = month
    this.year = year
    this.planet = planet
    this.gender = gender
    this.todayDate = new Date();
    this.maleExpectancyValues = {0:76.5, 30:47.81, 60:21.04, 65:17.18, 70:13.68, 100:2}
    this.femaleExpectancyValues = {0:80.8, 30:51.61, 60:23.81, 65:19.71, 70:15.92, 100:2.3}
    this.xyCoor = []
    this.slope = []
  }

   daysInMonth (month) {
     let date = new Date(1990, month, 0).getDate();
     return date
    }

    monthsToDays(month){
    let i = month
    let totalDays = 0
    while (i > 0) {
      let days= 0
      days = new Date(1990, i, 0).getDate();
      totalDays = totalDays + days
      i-=1
    }
    return totalDays;
  }

   daysToHours(days){
     days = days * 24
     return days
   }

   hoursToSec(hours){
   hours = hours * 60 * 60
   return hours
   }

   yearsToSec(years){
   years = years * 31557600
   return years
   }

   totalSecondsLived(){
    const years = this.todayDate.getFullYear() -this.year;
    let seconds = this.yearsToSec(years);
    let days = this.day;
    const monthDays = this.monthsToDays(this.month-1);
    days += monthDays;
    const hours = this.daysToHours(days);
    const seconds2 = this.hoursToSec(hours);
    const total = seconds + seconds2;
    return total
  }

   mercuryYears(years) {
     years = years / .24
     years = parseFloat(years.toFixed(2))
     return years
   }

   venusYears(years) {
     years = years / .62
     years = parseFloat(years.toFixed(2))
     return years
   }

   marsYears(years) {
     years = years / 1.88
     years = parseFloat(years.toFixed(2))
     return years
   }

   jupitorYears(years) {
     years = years / 11.86
     years = parseFloat(years.toFixed(2))
     return years
   }

   xyslope(x1,y1,x2,y2) {
     let xyslope = (y2 - y1) / (x2 - x1)
     return parseFloat(xyslope.toFixed(2))
   }

   findY2(x1,x2,y1,slope) {
     let y2 = ((x2-x1)*slope)+y1
     return y2
   }

   loopObject(obj){
     // obj = this.maleExpectancyValues
     for (let key in obj) {
       if (obj.hasOwnProperty(key)) {
           console.log(key + " -> " + obj[key]);
           const k = parseInt(key);
           const v = obj[key]
           const slope = [k,(v+k).toFixed(2)]
           this.xyCoor.push(slope)
           console.log("y values---"+this.xyCoor)
       }
      }
    }

    loopArray(array1){
      for ( let i = 0; i<array1.length-1 ; i++) {
        let x1 = array1[i][0]
        let y1 = parseFloat(array1[i][1])
        let xx2 = array1[i+1][0]
        let yy2 = parseFloat(array1[i+1][1])

        let m = this.slope(x1,y1,xx2,yy2)
        this.slope.push(m)
        console.log("MMM"+m)

      }
    }

    lifeCalc(){
      console.log(this.xyCoor.length)
      for (let i = 0; i< this.xyCoor.length ; i++) {
        console.log("here")
        console.log(this.xyCoor[i][0])
        if (this.age >= this.xyCoor[i][0] && this.age < this.xyCoor[i+1][0]){

          console.log(parseFloat(this.xyCoor[i][1]))
          let slope = this.slope[i]
          let x1 = this.xyCoor[i][0]
          let x2 = this.age
          let y1 = parseFloat(this.xyCoor[i][1])
          const age = this.findY2(x1,x2,y1,slope)
          console.log(age)
          return age
        }
      }
    }

   overAverageLifeSpan(age){
     if (age > 76.5){
       return age - 76.5
     } else return 76.5 - age
   }


}
