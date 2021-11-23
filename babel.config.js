const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  ['module-resolver', {
    alias: { '^@/(.+)': './src/\\1' },
    extensions: ['.android.js', '.ios.js', '.js', '.json', '.native']
  }]
];

// if (process.env.NODE_ENV === 'production') {
//   plugins.unshift('transform-remove-console');
// }

module.exports = { presets, plugins };