package hello

import (
	"fmt"
	"math"
	"runtime"
	"strings"
	"time"

	"rsc.io/quote"
)

func add(x int, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

var c, python bool
var java = "no!"

const (
	// Create a huge number by shifting a 1 bit left 100 places.
	// In other words, the binary number that is 1 followed by 100 zeroes.
	Big = 1 << 100
	// Shift it right again 99 places, so we end up with 1<<1, or 2.
	Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
	return x * 0.1
}

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}

func Hello() {
	// lib 사용하기
	fmt.Println(quote.Go())
	fmt.Println("My favorite number is", math.Sqrt(7), math.Pi)

	// 함수
	fmt.Println("2 + 3 =", add(2, 3))

	a, b := swap("hello", "world")
	fmt.Println(a, b)

	fmt.Println(split(17))

	// 변수
	var i, j int = 42, 2
	fmt.Println(i, j, c, python, java)

	// 타입 변환
	f := float64(i)
	u := uint(f)
	fmt.Println(i, f, u)

	// 타입 추론
	i = 42            // int
	f = 3.142         // float64
	g := 0.867 + 0.5i // complex128

	fmt.Println(i, f, g)

	// 상수
	const Truth = true
	fmt.Println("Go rules?", Truth)

	// 숫자형 상수
	fmt.Println(needInt(Small))
	fmt.Println(needFloat(Small))
	fmt.Println(needFloat(Big))

	// For
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println("For 문 Sum:", sum)

	for sum < 100 {
		sum += sum
	}
	fmt.Println("For 문 Sum:", sum)

	// IF
	fmt.Println(sqrt(2), sqrt(-4))

	// Short If
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)

	// Switch
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("[Switch] %s OS X.", time.Now().Weekday())
	case "linux":
		fmt.Println("[Switch] Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("[Switch] %s.\n", os)
	}
	// 조건 없는 Switch (= If-else)
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}

	// Defer (Stack)
	defer fmt.Println("Deferred First!!")
	defer fmt.Println("Deferred Second!!")

	// Pointers
	k, h := 42, 2701

	p := &k            // point to k
	fmt.Println(p, *p) // read k through the pointer (42)
	*p = 21            // set k through the pointer
	fmt.Println(p, *p) // see the new value of k (21)

	p = &h             // point to h
	*p = *p / 37       // divide h through the pointer
	fmt.Println(p, *p) // see the new value of h (2701/37)

	// Struct
	type Vertex struct {
		X int
		Y int
	}
	v := Vertex{1, 2}
	pv := &v
	pv.X = 1e9
	fmt.Println(v, v.X)
	fmt.Printf("%p\n", pv)

	// Array & Slice
	primes := [6]int{2, 3, 5, 7, 11, 13}
	slice := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
	}
	var s []int = primes[1:4]
	fmt.Println(s, s[0:3], s[:3], s[0:], s[:])
	fmt.Println(slice)

	s = s[:0]
	printSlice("s", s)
	s = s[:4]
	printSlice("s", s)
	s = s[2:]
	printSlice("s", s)

	//// make
	ma := make([]int, 5)
	mb := make([]int, 0, 5)

	printSlice("ma", ma)
	printSlice("mb", mb)
	printSlice("mb1", mb[:2])
	printSlice("mb2", mb[2:5])

	//// slice of slice
	board := [][]string{
		{"_", "_", "_"},
		{"_", "_", "_"},
		{"_", "_", "_"},
	}

	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}

	printSlice("ma", append(ma, 1))
	printSlice("mb", append(mb, 1))

	// range
	var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
	for _, v := range pow {
		fmt.Printf("%d ", v)
	}
	println()

}
