package main

import (
	"fmt"

	"example.com/hello"
	"example.com/practice01"
)

func main() {
	fmt.Println("== Tutorial 1 ==")
	hello.Hello()
	fmt.Println("\n== Practice 1 ==")
	practice01.Run()
}
