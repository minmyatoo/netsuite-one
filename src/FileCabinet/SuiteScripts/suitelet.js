/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(["N/ui/serverWidget"], function (serverWidget) {
  function onRequest(context) {
    if (context.request.method === "GET") {
      // Create a form
      var form = serverWidget.createForm({
        title: "My Suitelet Form",
      });

      // Add a field to the form
      var textField = form.addField({
        id: "my_text_field",
        label: "Text Field",
        type: serverWidget.FieldType.TEXT,
      });

      // Add a submit button
      form.addSubmitButton({
        label: "Submit",
      });

      // Send the form to the client
      context.response.writePage(form);
    }
  }

  return {
    onRequest: onRequest,
  };
});
