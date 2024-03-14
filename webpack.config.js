import path from 'path'

export default {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve('public/js'),
    },
}