export class LifeExpectancy {
  constructor(age,gender) {
    this.age = age
    this.gender= gender
    this.maleExpectancyValues = {0:76.5, 30:47.81, 60:21.04, 65:17.18, 70:13.68, 100:2}
    this.femaleExpectancyValues = {0:80.8, 30:51.61, 60:23.81, 65:19.71, 70:15.92, 100:2.3}
    this.xyCoor = []
    this.slope = []
  }


  slope(x1,y1,x2,y2) {
    let slope = (y2 - y1) / (x2 - x1)
    return slope.toFixed(2)
  }

  findY2(x1,x2,y1,slope) {
    let y2 = ((x2-x1)*slope)+y1
    return y2
  }

  loopObject(obj){
    obj = this.maleExpectancyValues
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
