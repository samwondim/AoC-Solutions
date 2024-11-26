import java.io.File
import java.io.InputStream

fun solvePartOne(): Int {
  val lineList = File("part_one.txt").readText().trim().split("\n")

  return lineList.sumOf { line ->
      val firstDigit = line.firstOrNull { it.isDigit() } ?: '0'
      val lastDigit = line.lastOrNull { it.isDigit() } ?: '0'
      val calibrationValue = "$firstDigit$lastDigit".toInt()

      calibrationValue
  }
}

fun solvePartTwo(): Int {
  val lineList = File("part_two.txt").readText().trim().split("\n")
  val book = hashMapOf<String, Int>
            (
              "one" to 1,
              "two" to 2,
              "three" to 3,
              "four" to 4,
              "five" to 5,
              "six" to 6,
              "seven" to 7,
              "eight" to 8,
              "nine" to 9
            )

  return lineList.sumOf { line ->
    var slow = 0
    var fast = 0

    while (fast < line.count()) {
      if()
    }

  }
}

fun main(args : Array<String>) {
  println(solvePartOne())
  println(solvePartTwo())
}
