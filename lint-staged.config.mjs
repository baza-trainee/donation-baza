export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.{js,jsx,ts,tsx,json,md,scss}': ['prettier --write'],
};
