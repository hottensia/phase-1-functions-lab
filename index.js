// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    let hq = 42
    if (hq <= pickup) {
        return pickup - hq
    }
    else return hq - pickup
}
function distanceFromHqInFeet(pickup) {
    let hq = 42
    if (hq <= pickup) {
        return (pickup - hq) * 264
    }
    else return (hq - pickup) * 264
}
function distanceTravelledInFeet(start, destination) {
    if (start < destination)
        return (destination - start) * 264
    else return (start - destination) * 264
}
function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination)
    if (dist <= 400)
        return (0)
    else if (dist > 400 && dist <= 2000)
        return ((dist - 400) * 0.02)
    else if (dist > 2000 && dist <= 2500)
        return (25)
    else  (dist >2500)
    return ('cannot travel that far')
}