/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(["N/currentRecord"], (currentRecord) => {
  const pageInit = (context) => {
    // Get the current record object
    const currentRec = currentRecord.get();

    // Get the value from a memo field named 'memo'
    const memoFieldValue = currentRec.getValue({
      fieldId: "memo",
    });

    // Now 'memoFieldValue' contains the value of the memo field
    console.log(`Memo Field Value: ${memoFieldValue}`);
  };

  return {
    pageInit,
  };
});
