export const createLeadReference = () => {
  const seed = new Uint32Array(1);

  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(seed);
    return `AQ-${1000 + (seed[0] % 9000)}`;
  }

  return `AQ-${Math.floor(1000 + Math.random() * 9000)}`;
};
