const fs = require('fs');

const FileSystem = {
    read: function (filename) {
        return fs.readFileSync(filename);
    },
    readAsync: function (filename, callback) {
        fs.readFile(filename, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            callback(data.toString()); // Convert buffer to string for readability, assuming text content
        });
    }
};

function readData(callback) {
    // const bytes = FileSystem.read('datos.txt');
    const bytes = FileSystem.readAsync('datos.txt', function (bytes) {
        callback(bytes);
    });
}
readData(function (bytes) {
    console.log(bytes);
})
console.log("------------");
