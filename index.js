function getLoadPackages(size, packages) {
  const missingSpace = size - 30;
  const packagesIndex = new Map();
  let mejorPar = null;

  packages.map((i, index) => {
    const rest = missingSpace - i;
    if (packagesIndex.has(rest)) {
      const parActual = [i, rest];
      if (mejorPar === null || Math.max(...parActual) > Math.max(...mejorPar)) mejorPar = parActual;
    }
    packagesIndex.set(i, index);
  });
  return mejorPar || [];
}

const truckSize = 80;
const newPackages = [20, 40, 50, 10, 40];
const result = getLoadPackages(truckSize, newPackages);
console.log(result);
