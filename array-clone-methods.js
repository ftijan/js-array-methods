forEach = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i, array)
    }
}

map = function(array, cb) {
    const results = []
    for (let i = 0; i < array.length; i++) {
        results.push(cb(array[i], i, array))
    }

    return results
}

filter = function(array, cb) {
    const results = []
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i], i, array)) results.push(array[i])
    }

    return results
}

reduce = function(array, cb, initialValue) {
    let currentValue = initialValue
    for (let i = 0; i < array.length; i++) {
        if(initialValue == null && i === 0) {
            currentValue = array[i]
        } else {
            currentValue =  cb(currentValue, array[i], i, array)
        }        
    }

    return currentValue
}

some = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i], i, array)) return true
    }

    return false
}

every = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if(!cb(array[i], i, array)) return false
    }

    return true
}

flat = function(array, depth = 1) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i]) && depth > 0) {
            result.push(...flat(array[i], depth - 1))
        } else {
            result.push(array[i])
        }
    }

    return result
}

find = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i], i, array)) return array[i]
    }

    return undefined
}

module.exports = {
    forEach,
    map,
    filter,
    reduce,
    some,
    every,
    flat,
    find
}