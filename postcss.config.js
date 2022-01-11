module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-preset-env')({stage: 1}),
        require('postcss-simple-vars'),
        require('cssnano'),
    ]
}