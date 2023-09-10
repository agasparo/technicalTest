/**
 * Returns the index of the first available table in the given array, else returns -1
 */

const findAvailableTable = (tables: boolean[]): number =>
  tables.findIndex((table: boolean) => table);

/**
 * Testing zone
 */

const tests = () => {
  emptyTableTest();
  allFalseTableTest();
  allTrueTableTest();
  basicTableTest();
};

const emptyTableTest = () => {
  const testResult = findAvailableTable([]) === -1 ? "[OK]" : "KO";

  console.log(`emptyTableTest -> ${testResult}`);
};

const allFalseTableTest = () => {
  const testResult =
    findAvailableTable([false, false, false]) === -1 ? "[OK]" : "KO";

  console.log(`allFalseTableTest -> ${testResult}`);
};

const allTrueTableTest = () => {
  const testResult =
    findAvailableTable([true, true, true]) === 0 ? "[OK]" : "KO";

  console.log(`allTrueTableTest -> ${testResult}`);
};

const basicTableTest = () => {
  const testResult =
    findAvailableTable([false, true, false]) === 1 ? "[OK]" : "KO";

  console.log(`allTrueTableTest -> ${testResult}`);
};

tests();
