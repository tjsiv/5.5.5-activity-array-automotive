//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){

        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        super(make, model, year, color, mileage)
    }
    loadPassengers (num){
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " doesn't have enough room.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start(){
        if (this.fuel > 0){
            console.log("Vroom!! Engine on")
            return this.start = true;
        } else{
            console.log("No fuel")
            return this.start = false;
        }

    
    }
    serviceCheck(){
        if (this.mileage > 30000){
            this.scheduleService = true;
            return this.scheduleService;
        }
        

    }
}




//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
let myCar = new Car('Mercury', 'sedan', '2024', 'Red', 10000)
let myNewCar = new Car('Mercury', 'sedan', '2018', 'blue', 50000)
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.serciveCheck()

myNewCar.start()
myNewCar.loadPassenger(4)
myNewCar.stop()
myNewCar.serciveCheck()

console.log(myCar)
console.log(myNewCar)