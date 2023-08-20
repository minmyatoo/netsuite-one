// Import the modules and functions you need for testing
const serverWidget = require("N/ui/serverWidget");
const { onRequest } = require("../src/FileCabinet/SuiteScripts/suitelet"); // Replace with the actual path to your Suitelet script

// Mock the NetSuite serverWidget module
jest.mock("N/ui/serverWidget");

describe("Suitelet Tests", () => {
  // Mock the Suitelet context object
  const mockContext = {
    request: {
      method: "GET",
    },
    response: {
      writePage: jest.fn(),
    },
  };

  // Mock the serverWidget.createForm method
  const mockCreateForm = jest.fn();

  // Mock the serverWidget.addField method
  const mockAddField = jest.fn();

  // Mock the serverWidget.addSubmitButton method
  const mockAddSubmitButton = jest.fn();

  beforeAll(() => {
    // Set up the serverWidget module mocks
    serverWidget.createForm = mockCreateForm;
    serverWidget.createForm.mockReturnValue({
      addField: mockAddField,
      addSubmitButton: mockAddSubmitButton,
    });
  });

  it("should create a form with a text field and a submit button", () => {
    // Call the onRequest function with the mock context
    onRequest(mockContext);

    // Assertions
    expect(mockCreateForm).toHaveBeenCalledWith({
      title: "My Suitelet Form",
    });

    expect(mockAddField).toHaveBeenCalledWith({
      id: "my_text_field",
      label: "Text Field",
      type: serverWidget.FieldType.TEXT,
    });

    expect(mockAddSubmitButton).toHaveBeenCalledWith({
      label: "Submit",
    });

    expect(mockContext.response.writePage).toHaveBeenCalled();
  });
});
