const isDict = (value: any): boolean => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export default isDict;
