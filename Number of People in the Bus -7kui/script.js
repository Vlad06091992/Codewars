var number = function(busStops){
  let passengers = 0
  for(i = 0; i < busStops.length; i++){
    passengers += busStops[i][0]
    passengers -= busStops[i][1]
  }
  return passengers
}

  console.log(number([[10,1],[4,3],[5,3]]))



