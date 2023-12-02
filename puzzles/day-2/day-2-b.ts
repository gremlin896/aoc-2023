import { readData } from '../../shared.ts';
import chalk from 'chalk';
import { GameSet, mapRowToGame } from './shared.ts';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);

  const games = data.map(mapRowToGame);

  return games.reduce((acc, curr) => {
    const { red, green, blue }: GameSet = curr.sets.reduce(
      (acc, curr) => {
        return {
          red: Math.max(acc.red, curr.red),
          green: Math.max(acc.green, curr.green),
          blue: Math.max(acc.blue, curr.blue),
        };
      },
      { red: 0, green: 0, blue: 0 },
    );

    return acc + red * green * blue;
  }, 0);
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
