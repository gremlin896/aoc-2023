export interface Game {
  id: number;
  sets: GameSet[];
}

export interface GameSet {
  red: number;
  blue: number;
  green: number;
}

export function mapRowToGame(row: string): Game {
  const idString = row.substring(row.indexOf(' ') + 1, row.indexOf(':'));
  const setsString = row.substring(row.indexOf(': ') + 2);

  const sets: GameSet[] = setsString
    .split('; ')
    .map((set) => set.split(', '))
    .map((set) =>
      set.reduce(
        (acc, curr) => {
          const [count, colour] = curr.split(' ');

          acc[colour] = +count;

          return acc;
        },
        { red: 0, blue: 0, green: 0 },
      ),
    );

  return {
    id: +idString,
    sets,
  };
}
