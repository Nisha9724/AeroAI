let total_people = document.querySelector("#people")
let total_bus = document.querySelector("#bus")
let output = document.querySelector("#output")

function updatePeopleValue() {                                // capturing dynamic values for number of people
    console.log("total people: ", total_people.value)
}

function updateBusValue() {                                   // capturing dynamic values for number of bus
    console.log("total Bus: ", total_bus.value)
}

// If number of people(a) is more, it will return a and if number of people are less, it will return b.
function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function do_allocation() {
    var number_of_people = total_people.value
    var number_of_buses = total_bus.value

// number of buses presented in an array 
    let ans = Array(number_of_buses).fill(0);
    let first = 0, second = 1;
    for (let i = 0; i < number_of_buses; i++) {
        ans[i] = min(number_of_people, first + second);
        number_of_people -= min(number_of_people, first + second);
        first = second;
        second = ans[i];
        if (number_of_people === 0) {
            break;
        }
    }

    console.log("ans: ", ans)
    output.innerHTML = JSON.stringify(ans)
    return ans;
}





