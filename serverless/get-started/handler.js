'use strict';

module.exports.helloWorld = async (event) => {
  console.log("Hello World!");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World!',
      },
      null,
      2
    ),
  };
};
