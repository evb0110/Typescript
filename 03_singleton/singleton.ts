class SingleCar {
    static car = { color: 'red' }

    static get new(): SingleCar {
        let car = SingleCar.car;
        if (car) {
            return car;
        } else {
            return new SingleCar;
        }
    }
}

const car1: SingleCar = SingleCar.new;
const car2: SingleCar = SingleCar.new;
console.log(car1 === car2)
