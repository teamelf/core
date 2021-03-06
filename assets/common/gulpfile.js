/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const gulp = require('teamelf-gulp');

gulp({
  files: [
    './bower_components/es6-micro-loader/dist/system-polyfill.min.js',
    './bower_components/babel-polyfill/browser-polyfill.js',
    './bower_components/react/react.production.min.js',
    './bower_components/react/react-dom.production.min.js',
    './bower_components/jQuery/dist/jquery.min.js',
    './bower_components/lodash/lodash.js',
    './node_modules/react-router-dom/umd/react-router-dom.min.js',
    './bower_components/moment/min/moment-with-locales.min.js',
    './bower_components/marked/marked.min.js',
    './bower_components/axios/dist/axios.min.js',
    './node_modules/antd/dist/antd.min.js',
    './bower_components/crypto-js/crypto-js.js'
  ],
  modules: {
    'teamelf/common': './js/**/*.js'
  },
  output: './dist/common.js'
}, {
  files: [
    './node_modules/antd/dist/antd.min.css',
    './bower_components/loaders.css/loaders.min.css'
  ],
  modules: ['./less/**/*.less'],
  output: './dist/common.css'
});
