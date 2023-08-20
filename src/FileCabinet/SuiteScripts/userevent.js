/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(["N/record"], (record) => {
  const beforeSubmit = (context) => {
    const { newRecord, type, UserEventType } = context;
    const currentRecord = newRecord;

    if (type === UserEventType.CREATE) {
      currentRecord.setValue({
        fieldId: "custbody_custom_field",
        value: "New Record Value",
      });
    }
  };

  return {
    beforeSubmit,
  };
});
