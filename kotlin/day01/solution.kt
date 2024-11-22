import java.io.File
import java.io.InputStream

fun solve(lines: List<String>): Int {
    return lines.sumOf { line ->
        val firstDigit = line.firstOrNull { it.isDigit() } ?: '0'
        val lastDigit = line.lastOrNull { it.isDigit() } ?: '0'
        val calibrationValue = "$firstDigit$lastDigit".toInt()

        calibrationValue
    }
}

fun main(args : Array<String>) {
  val inputStream: InputStream = File("example.txt").inputStream()
  val lineList = mutableListOf<String>()

  inputStream.bufferedReader().forEachLine { lineList.add(it) } 

  val testCase = listOf(
    "1abc2",
    "pqr3stu8vwx",
    "a1b2c3d4e5f",
    "treb7uchet"
  )

  println(solve(lineList))
}
