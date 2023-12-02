import { readData } from '../../shared.ts';
import chalk from 'chalk';
import { getCalibrationValue } from './shared.ts';

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  return data.reduce((acc, curr) => {
    const prev = curr;
    curr = convertNumbersInString(curr);

    const calibrationValue = getCalibrationValue(curr);

    return acc + calibrationValue;
  }, 0);
}

function convertNumbersInString(string: string) {
  const numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let start = 0; start < string.length; start++) {
    for (const number of numbers) {
      const end = start + number.length;
      if (string.substring(start, end) === number) {
        string = `${string.substring(0, start)}${
          numbers.indexOf(number) + 1
        }${string.substring(start + 1, string.length)}`;
      }
    }
  }

  return string;
}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
