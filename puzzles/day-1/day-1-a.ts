import { readData } from '../../shared.ts';
import chalk from 'chalk';
import { getCalibrationValue } from './shared.ts';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);

  return data.reduce((acc, curr) => {
    const calibrationValue = getCalibrationValue(curr);

    return acc + calibrationValue;
  }, 0);
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
