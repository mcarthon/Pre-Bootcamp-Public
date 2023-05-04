let numberOfCustomers = 1 + Math.floor(Math.random() * 9);

let customerArray = [];

for (let i = 0; i < numberOfCustomers; i++) {

        customerArray.push([-10 + Math.floor(Math.random() * 20), -10 + Math.floor(Math.random() * 20)]);

}

function truckLocation(matrix) {

    let sumX = 0;

    for (let m = 0; m < customerArray.length; m++) {

        sumX += customerArray[m][0];

    }

    let truckLocationX = Math.ceil(sumX/customerArray.length);

    let sumY = 0;

    for (let n = 0; n < customerArray.length; n++) {

        sumY += customerArray[n][1];

    }

    let truckLocationY = Math.ceil(sumY/customerArray.length);

    return [truckLocationX, truckLocationY];

}

console.log(truckLocation(customerArray));
