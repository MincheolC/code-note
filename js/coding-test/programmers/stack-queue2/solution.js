function increase1Sec(arr) {
  return arr.map((element) => ({
    weight: element.weight,
    time: element.time + 1,
  }));
}

function solution(bridge_length, weight, truck_weights) {
  let totalTruckWeightOnBridge = 0;
  let truckListOnBridge = [];
  let totalDuration = 0;

  let w = 0;

  while (true) {
    if (truck_weights.length === 0 && truckListOnBridge.length === 0) {
      break;
    }

    const nextWeight = truck_weights[0];

    if (totalTruckWeightOnBridge + nextWeight <= weight) {
      truckListOnBridge = increase1Sec(truckListOnBridge);
      w = truck_weights.shift();
      totalTruckWeightOnBridge += w;
      truckListOnBridge.push({ weight: w, time: 1 });
      totalDuration += 1;
    } else {
      truckListOnBridge = increase1Sec(truckListOnBridge);
      totalDuration += 1;
    }

    if (truckListOnBridge[0].time === bridge_length) {
      totalTruckWeightOnBridge -= truckListOnBridge[0].weight;
      truckListOnBridge.shift();
    }
  }

  return totalDuration + 1;
}

function solution2(bridge_length, weight, truck_weights) {
  let answer = 0;
  let total_truck_weight = 0;
  let bridge_queue = [];
  let weight_queue = [];

  do {
    // 다리를 건너는 트럭 이동
    for (let i in bridge_queue) {
      bridge_queue[i]--;
    }
    if (bridge_queue[0] == 0) {
      total_truck_weight -= weight_queue.shift();
      bridge_queue.shift();
    }

    // 다리가 견딜 수 있으면 트럭 1개 올리기
    if (total_truck_weight + truck_weights[0] <= weight) {
      weight_queue.push(truck_weights[0]);
      bridge_queue.push(bridge_length);
      total_truck_weight += truck_weights.shift();
    }
    answer += 1;
  } while (bridge_queue.length > 0);

  return answer;
}
