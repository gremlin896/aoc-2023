import { readData } from '../../shared.ts';
import chalk from 'chalk';
import { mapRowToGame } from './shared.ts';

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);

  const games = data.map(mapRowToGame);

  return games.reduce((acc, curr) => {
    const isPossible = curr.sets.every(
      (set) =>
        set.red <= MAX_RED && set.blue <= MAX_BLUE && set.green <= MAX_GREEN,
    );

    return isPossible ? acc + curr.id : acc;
  }, 0);
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
