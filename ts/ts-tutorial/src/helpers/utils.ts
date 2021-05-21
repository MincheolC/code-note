export function calculateProfits(price: number) {
  const commissionPlans = [{
    from: 1,
    to: 500000,
    commissionPercentage: 20,
  }, {
    from: 500001,
    to: 1000000,
    commissionPercentage: 10,
  }, {
    from: 1000001,
    to: Infinity,
    commissionPercentage: 5,
  }];

  let sum = 0;

  for (let i = 0; i < commissionPlans.length; i += 1) {
    const { from, to, commissionPercentage } = commissionPlans[i];
    if ((price - from) < 0) {
      break;
    }

    if (price > to) {
      sum += (to - from + 1) * (1 - commissionPercentage/100);
    } else {
      sum += (price - from + 1) * (1 - commissionPercentage/100);
    }
  }
  return sum;
}
