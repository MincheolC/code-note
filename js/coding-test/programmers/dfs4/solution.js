function findRoutes(tickets, city, routes, available) {
  if (tickets.length === 0) {
    return available.push(routes);
  }

  tickets.forEach((ticket, index) => {
    const copied = [...tickets];
    if (ticket[0] === city) {
      const [[from, to]] = copied.splice(index, 1);
      findRoutes(copied, to, [...routes, to], available);
    }
  });
}

function solution(tickets) {
  const available = [];
  findRoutes(tickets, 'ICN', ['ICN'], available);
  return available.sort()[0];
}
