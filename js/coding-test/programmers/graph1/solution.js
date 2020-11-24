function solution(n, edge) {
  const visitedNode = new Set();
  const neighborNodes = new Map();

  edge.forEach(([s, d]) => {
    const snode = neighborNodes.get(s);
    const dnode = neighborNodes.get(d);

    if (snode) {
      neighborNodes.set(s, [...snode, d]);
    } else {
      neighborNodes.set(s, [d]);
    }

    if (dnode) {
      neighborNodes.set(d, [...dnode, s]);
    } else {
      neighborNodes.set(d, [s]);
    }
  });

  let next = {
    node: 1,
    depth: 0,
  };
  const queue = [];
  const nodesByDepth = [[1]];
  visitedNode.add(next.node);

  while (visitedNode.size < n) {
    const nodes = neighborNodes.get(next.node);
    const temp = [];

    // eslint-disable-next-line no-loop-func
    nodes.forEach((node) => {
      if (!visitedNode.has(node)) {
        visitedNode.add(node);
        queue.push({
          depth: next.depth + 1,
          node,
        });
        temp.push(node);
      }
    });

    if (nodesByDepth[next.depth + 1]) {
      nodesByDepth[next.depth + 1] = nodesByDepth[next.depth + 1].concat(temp);
    } else {
      nodesByDepth.push(temp);
    }
    next = queue.shift();
  }
  return nodesByDepth.pop().length;
}
