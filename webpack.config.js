module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  loaders: [
    {
      test: /\.(jsx|js)/,
      loaders: [
        'babel'
      ],
      include: 'index.js',
      query: {
        presets: [
          'es2015'
        ]
      }
    }
  ],
  devServer: {
    contentBase: ''
  },
  watch: true
}
