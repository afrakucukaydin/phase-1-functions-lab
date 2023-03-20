function distanceFromHqInBlocks (pickup) {
    let headquarters = 42;
    let distance = headquarters - pickup;
    if (distance < 0) {
        distance = distance * -1;
      }
    return distance;
}

function distanceFromHqInFeet (pickup) {
    let blockDistance = distanceFromHqInBlocks(pickup);
    let feetDistance = blockDistance * 264;
    return feetDistance;
}

function distanceTravelledInFeet(start, destination) {  
    let blockDistance = destination - start;
    if (blockDistance < 0) {
        blockDistance = blockDistance * -1;
      }
    let feetDistance = blockDistance * 264;
    return feetDistance;
}

function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    
    if (feetDistance <= 400) {
        return 0;
      } else if (feetDistance <= 2000) {
        let price = (feetDistance - 400) * 0.02;
        return price;
      } else if (feetDistance <= 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
  }