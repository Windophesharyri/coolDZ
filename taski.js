// 1)
function isNumberInRange(number) {
    if (number > 0 && number < 10) {
        return true
    }
    else {
        return false
    }
}

numbersArray = [25, 5, 4, -2, -20, 0, 1, 4]
for (let i = 0; i < numbersArray.length; i++) {
    console.log(isNumberInRange(numbersArray[i]))
}

// 2)
function ageSort(number) {
    message = number
    if (number >= 1 && number <= 17) {
        message = number + " - ребёнок"
        return message        
    }
    if (number >= 18 && number <= 30) {
        message = number + " - молодой"
        return message        
    }
    if (number >= 30 && number <= 55) {
        message = number + " - зрелый"
        return message        
    }
    if (number > 55) {
        message = number + " - старый"
        return message        
    }
}

for (let i = 0; i < 100; i++) {
    console.log(ageSort(i))
}

// 3)
function ArraySort(array) {
    clearArray = []
    badValues = [true, false, "", null, undefined]
    for (let i = 0; i < array.length; i++) {
        if (badValues.includes(array[i])) {
            continue
        }
        else {
            clearArray.push(array[i])             
        }        
    }
    return clearArray
}

values = ["Nation", 56, false, undefined, '', 0, null, 1, "not null", true]
console.log(ArraySort(values));

// 4)
function ArrayClear(array) {
    clearArray = []
    for (let i = 0; i < array.length; i++) {
        if (clearArray.includes(array[i])) {
            continue
        }
        else {
            clearArray.push(array[i])
        }
    }
    return clearArray
}

Data = [1, 5, 1, 1, "abc", "abc", "dict", 1]
console.log(ArrayClear(Data));