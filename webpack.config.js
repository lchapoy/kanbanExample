module.exports = {
 entry: [
 './source/app.js'
 ],
 output: {
 path: __dirname+"/public",
 filename: "bundle.js"
 },
 module: {
	loaders: [{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
			presets: ['es2015','stage-0','react']
		}
	}]
 },
   devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
};