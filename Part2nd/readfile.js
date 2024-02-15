import { readFile } from 'fs/promises';

async function readPoem() {
  try {
    const data = await readFile('Part2/poem.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

readPoem();
