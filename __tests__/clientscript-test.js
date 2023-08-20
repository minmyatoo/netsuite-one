// Import your client script module
import { pageInit } from "../src/FileCabinet/SuiteScripts/clientscript"; // Replace with the actual path to your client script

// Mock the N/currentRecord module
jest.mock("N/currentRecord", () => ({
  get: jest.fn(() => ({
    getValue: jest.fn((options) => {
      if (options.fieldId === "memo") {
        return "Test Memo Value"; // Simulate the memo field value
      }
      return null; // Handle other field IDs if needed
    }),
  })),
}));

describe("Client Script Tests", () => {
  it("should log the memo field value", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    // Call the pageInit function
    pageInit({});

    // Expect that the console.log function was called with the expected value
    expect(consoleLogSpy).toHaveBeenCalledWith("Memo Field Value: Test Memo Value");

    // Restore the console.log function
    consoleLogSpy.mockRestore();
  });
});
