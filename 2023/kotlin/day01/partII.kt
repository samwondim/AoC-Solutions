import java.io.File

fun solve(lines: List<String>) {

}

fun main(args : Array<String>) {
  val lineLists = File("partII.txt").readText().trim().split("\n")
  val map = hashMapOf("one" to 1, 
                    "two" to 2, 
                    "three" to 3,
                    "four" to 4,
                    "five" to 5,
                    "six" to 6, 
                    "seven" to 7,
                    "eight" to 8,
                    "nine" to 9
                    )
  val testCase = listOf(
      "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen"
  )
  solve(lineLists)
}
