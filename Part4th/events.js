const fs = require('fs');
const { exit } = require('process');

process.on('exit', (code) => {
  console.log(`'exit' event called. Code: ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log("'unhandledRejection' event called.");
  throw reason; 
});

const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    try 
    {
      const data = fs.readFileSync(filename, 'utf8');
      resolve(data);
    } 
    catch (error)
    {
      reject(error);
    }
  });
};

readFileAsync('nonexistentfile.txt')
  .then(data => {
    console.log("File contents:", data);
  })
  .catch(error => {
    console.log("Error occurred:", error.message);
    throw new Error("Error occurred in catch handler."); 
  });


exit(3); // Exit with given code 
