open Belt
let commands = Node.Fs.readFileAsUtf8Sync("src/2021/02/input.txt") -> Js.String2.split("\n")


type acc = {
  horizontal: int,
  depth: int
}

let result = commands
  -> Array.map(v => {
    let cmdAndNum = Js.String2.split(v, " ")
    (Array.getExn(cmdAndNum, 0), Array.getExn(cmdAndNum, 1))
  })
  -> Array.map(((cmd, num)) => (cmd, Int.fromString(num)))
  -> Array.keep(((cmd, num)) => {
   switch (cmd, num) {
   | (_, Some(num)) => true
   | (_, None) => false
   } 
  })
  -> Array.reduce({ horizontal: 0, depth: 0 }, (acc, (cmd, num)) => {
    switch (cmd, num) {
      | ("forward", Some(num)) => { ...acc, horizontal: acc.horizontal + num }
      | ("up", Some(num)) => { ...acc, depth: acc.depth - num }
      | ("down", Some(num)) => { ...acc, depth: acc.depth + num }
    }
  })

Js.log(result.horizontal * result.depth)




