"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var isSafe = function (report) {
    var levels = report.split(" ").map(Number);
    var diffs = levels.slice(1).map(function (level, i) { return level - levels[i]; });
    var validDiffs = diffs.every(function (diff) { return Math.abs(diff) >= 1 && Math.abs(diff) <= 3; });
    if (!validDiffs) {
        return false;
    }
    var monoIncreasing = diffs.every(function (diff) { return diff > 0; });
    var monoDecreasing = diffs.every(function (diff) { return diff < 0; });
    return monoIncreasing || monoDecreasing;
};
var partOne = function (fileName) {
    var contents = fs.readFileSync(fileName, 'utf8');
    var reports = contents.trim().split("\n");
    console.log(reports.filter(isSafe).length);
};
var partTwo = function (fileName) {
};
partOne("part_one.txt");
// partTwo("part_two.txt");
