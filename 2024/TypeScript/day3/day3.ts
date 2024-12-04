import * as fs from 'fs';

function parseInstruction(mem: string): [number, number][] {

  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let matches: [number, number][] = [];
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(mem)) !== null) {
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);

    matches.push([x, y]);
  }

  return matches;
}

function part_one(fileName: string): void {
  const content = fs.readFileSync(fileName, 'utf8');
  let sum: number = 0;

  const instructions = parseInstruction(content);
  sum = instructions.reduce((sum, [x, y]) => sum + x * y, 0);

  console.log(sum);
}

part_one("part_one.txt");

