import writeData from './utils/io.js';

export function generateReportData(logFn) {
  const data = 'Dummy data';
  if (logFn) logFn(data);

  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error('No data received!');
  }
  await writeData(data, 'data.txt');
}
