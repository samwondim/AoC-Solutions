import * as fs from 'fs';


const parseInput = (content: string) => {
  let vals = content.split('\n');
  let l1: Array<number> = [];
  let l2: Array<number> = [];

  for (let i = 0; i < vals.length; i++) {
    const temp = vals[i].split(/\s+/);
    l1.push(parseInt(temp[0]));
    l2.push(parseInt(temp[1]));
  }

  return [l1.sort(), l2.sort()];
}


const partOne = (fileName: string) => {
  const contents: string = fs.readFileSync(fileName, 'utf8').trim();
  const parsed = parseInput(contents);
  let loc1: Array<number> = parsed[0];
  let loc2: Array<number> = parsed[1];

  let acc: number = 0;
  for (let i = 0; i < loc1.length; i++) {
    acc += Math.abs(loc1[i] - loc2[i]);
  }
  console.log(acc);
}

const partTwo = (fileName: string) => {

  const contents: string = fs.readFileSync(fileName, 'utf8').trim();
  const parsed = parseInput(contents);
  let loc1: Array<number> = parsed[0];
  let loc2: Array<number> = parsed[1];

  let book = new Map<number, number>();

  for (const a of loc2) {
    book.set(a, (book.get(a) || 0) + 1);
  }

  let acc: number = 0;
  for (const a of loc1) {
    if (book.has(a)) {
      acc += a * book.get(a)!;
    }
  }

  console.log(acc);
}

// partOne("part_one.txt");
// partTwo("part_two.txt");
