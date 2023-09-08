/**
 * Returns the index of the first available table in the given array, else returns -1
 */

const findAvailableTableAsync = (tables: boolean[]) =>
  new Promise<number>((resolve) =>
    resolve(tables.findIndex((table: boolean) => table))
  );

/**
 * Testing zone
 */

const asyncTests = () => {
  emptyTableAsyncTest();
  allFalseTableAsyncTest();
  allTrueTableAsyncTest();
  basicTableAsyncTest();
};

const emptyTableAsyncTest = async () => {
  const testResult = (await findAvailableTableAsync([])) === -1 ? "[OK]" : "KO";

  console.log(`emptyTableTest -> ${testResult}`);
};

const allFalseTableAsyncTest = async () => {
  const testResult =
    (await findAvailableTableAsync([false, false, false])) === -1
      ? "[OK]"
      : "KO";

  console.log(`allFalseTableTest -> ${testResult}`);
};

const allTrueTableAsyncTest = async () => {
  const testResult =
    (await findAvailableTableAsync([true, true, true])) === 0 ? "[OK]" : "KO";

  console.log(`allTrueTableTest -> ${testResult}`);
};

const basicTableAsyncTest = async () => {
  const testResult =
    (await findAvailableTableAsync([false, true, false])) === 1 ? "[OK]" : "KO";

  console.log(`allTrueTableTest -> ${testResult}`);
};

asyncTests();
