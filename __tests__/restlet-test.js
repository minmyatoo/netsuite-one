const restletModule = require("../src/FileCabinet/SuiteScripts/restlet");

describe("SuiteScript RESTlet Functions", () => {
  it("should handle GET requests", () => {
    const requestParams = {};

    const response = restletModule.get(requestParams);

    expect(response.status).toBe(200);
    expect(response.body).toBe("Hello, RESTlet World!");
  });

  it("should handle POST requests", () => {
    const requestBody = { data: "example" };

    const response = restletModule.post(requestBody);

    expect(response.status).toBe(200);
    expect(response.body).toBe('POST request received with data: {"data":"example"}');
  });

  // You can add more test cases for other scenarios as needed
});
