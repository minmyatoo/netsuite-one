/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */

define([], function () {
  /**
   * Function to handle GET requests
   * @param {Object} requestParams - The HTTP request parameters
   * @returns {Object} - The HTTP response
   */
  function handleGet(requestParams) {
    try {
      // Your GET logic here
      const response = 'Hello, RESTlet World!';

      return {
        status: 200,
        body: response,
      };
    } catch (e) {
      return {
        status: 500,
        body: {
          error: e.toString(),
        },
      };
    }
  }

  /**
   * Function to handle POST requests
   * @param {Object} requestBody - The HTTP request body
   * @returns {Object} - The HTTP response
   */
  function handlePost(requestBody) {
    try {
      // Your POST logic here
      // For example, you can process the data in the requestBody
      const response = 'POST request received with data: ' + JSON.stringify(requestBody);

      return {
        status: 200,
        body: response,
      };
    } catch (e) {
      return {
        status: 500,
        body: {
          error: e.toString(),
        },
      };
    }
  }

  // Define the public functions that are accessible via HTTP methods
  return {
    get: handleGet,
    post: handlePost,
  };
});
