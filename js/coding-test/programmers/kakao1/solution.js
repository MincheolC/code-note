function sorting(a, b) {
  const { aDate: aa, dDate: ad, pay: ap } = a;
  const { aDate: ba, dDate: bd, pay: bp } = b;

  if (aa !== ba) return aa - ba;
  if (ap !== bp) return bp - ap;
  if (ad !== bd) return bd - ad;
  return true;
}

function solution(offers) {
  const offersObj = offers.map((offer) => {
    const [aDate, dDate, pay] = offer.split(" ");
    return {
      aDate: parseInt(aDate.split("/").join(""), 10),
      dDate: parseInt(dDate.split("/").join(""), 10),
      pay: parseInt(pay, 10),
    };
  });

  let bestOffer = offersObj.shift();
  while (offersObj.length > 0) {
    const queue = [];

    for (let i = 0; i < offersObj.length; i += 1) {
      if (offersObj[i].aDate > bestOffer.dDate) break;
      queue.push(offersObj.shift());
    }
    if (queue.length === 0) return bestOffer.pay;
    queue.sort(sorting);
    bestOffer = queue[0];
  }
}
