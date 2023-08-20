// Import the function to be tested
import { beforeSubmit } from "../src/FileCabinet/SuiteScripts/userevent"; // Replace with the actual path to your User Event Script module

describe("User Event Script Tests", () => {
  it("should set the custom field value on a new record", () => {
    // Create a mock context object
    const context = {
      type: "create",
      UserEventType: {
        CREATE: "create",
      },
      newRecord: {
        setValue: jest.fn(),
      },
    };

    // Call the beforeSubmit function
    beforeSubmit(context);

    // Assert that setValue was called with the expected arguments
    expect(context.newRecord.setValue).toHaveBeenCalledWith({
      fieldId: "custbody_custom_field",
      value: "New Record Value",
    });
  });

  it("should not set the custom field value on an edit", () => {
    // Create a mock context object for an edit event
    const context = {
      type: "edit",
      UserEventType: {
        EDIT: "edit",
      },
      newRecord: {
        setValue: jest.fn(),
      },
    };

    // Call the beforeSubmit function
    beforeSubmit(context);

    // Assert that setValue was not called
    expect(context.newRecord.setValue).not.toHaveBeenCalled();
  });
});
