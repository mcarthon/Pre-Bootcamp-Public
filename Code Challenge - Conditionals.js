let currentTime = Math.floor(Math.random() * 23);

let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let randomIndex = Math.floor(Math.random() * 6);

let currentDay = daysOfTheWeek[randomIndex];

let randomSelectionIndex = Math.floor(Math.random() * 2);

let threeToSixEven = ["Ice Cream", "Cookies", "Candy"];

let threeToSixOdd = ["Hot Chocolate", "Tea", "Cake"];

let randomThreeToSixEven = threeToSixEven[randomSelectionIndex];

let randomThreeToSixOdd = threeToSixOdd[randomSelectionIndex];

if (currentTime < 10) {

    console.log("Latte");

}

else if (currentTime < 15) {

    console.log("Hot Chocolate");

}

else if (currentTime < 18) {

    if (currentTime % 2 == 0) {

        if (randomThreeToSixEven === "Ice Cream") {

            if (currentDay === "Wednesday") {

                console.log("StrawBerry Ice Cream");

            }

            else {

                console.log("Vanilla Ice Cream");

            }

        }

        else {

            console.log(randomThreeToSixEven);

        }

    }

    else {

        console.log(randomThreeToSixOdd);

    }

}

else if (currentTime < 22) {

    if (currentDay === "Wednesday") {

        console.log("StrawBerry Ice Cream");

    }

    else {

        console.log("Vanilla Ice Cream");

    }

}

else {

    console.log("Sleep");

}

