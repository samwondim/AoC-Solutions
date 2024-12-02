
import * as fs from 'fs';

const isSafe = (report: string): boolean => {
  const levels = report.split(" ").map(Number);
  const diffs = levels.slice(1).map((level, i) => level - levels[i]);

  const validDiffs = diffs.every(diff => Math.abs(diff) >= 1 && Math.abs(diff) <= 3);
  if (!validDiffs) {
    return false;
  }

  const monoIncreasing = diffs.every(diff => diff > 0);
  const monoDecreasing = diffs.every(diff => diff < 0);

  return monoIncreasing || monoDecreasing;
}
const partOne = (fileName: string) => {
  const contents: string = fs.readFileSync(fileName, 'utf8');
  const reports = contents.trim().split("\n");

  console.log(reports.filter(isSafe).length);
}

const isSafeII = (report: string): boolean => {
  const levels = report.split(" ").map(Number);

  if (isSafe(report)) return true;
  for (let i = 0; i < levels.length; i++) {
    const modedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    const modedReport = modedLevels.join(" ");

    if (isSafe(modedReport)) {
      return true;
    }
  }

  return false;
}

const partTwo = (fileName: string) => {
  const contents: string = fs.readFileSync(fileName, 'utf8');
  const reports = contents.trim().split("\n");

  console.log(reports.filter(isSafeII).length)

}
// partOne("part_one.txt");
partTwo("part_two.txt");
