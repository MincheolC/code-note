fun main() {
    val list: List<Int> = listOf(1,2,3,4)
    println(list.first())
    println( list.drop(1))
    println(Math.cos(1.0))

    val words = "The quick brown fox jumps over the lazy dog".split(" ")
    val wordsSequence = words.asSequence()
    val lengthsSequence = wordsSequence.filter { println("filter: $it"); it.length > 3 }
        .map { println("length: ${it.length}"); it.length }
        .take(4)
    println(lengthsSequence.toList())
}

fun add(n: Int): Int {
    return when {
        n < 0 -> 0
        else -> n + add(n-1)
    }
}
