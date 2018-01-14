/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default (object, method, callback) => {
  const original = object[method];

  object[method] = (...args) => {
    const value = original ? original.apply(this, args) : undefined;

    callback.apply(this, [value].concat(args));

    return value;
  };

  Object.assign(object[method], original);
};
