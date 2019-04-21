const path = require('path');

module.exports = {
    entry: './src/js/index.js', // which file to start from
    output: {
        // location where you want to store the bundled file
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
}