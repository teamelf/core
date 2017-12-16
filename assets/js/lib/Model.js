/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class AbstractModel {
  constructor (props) {
    if (new.target === AbstractModel) {
      throw new Error('AbstractModel cannot be instanced directly!');
    }

    /**
     * model's attributes
     *
     * @type {Object}
     * @private
     */
    this._attributes = {};

    /**
     * the fetching api url
     * @type {String}
     * @private
     */
    this._url = ''
  }

  /**
   * getter & setter of _attributes
   */
  get attributes () {
    return this._attributes;
  }
  set attributes (attributes) {
    this._attributes = attributes
  }

  /**
   * getter & setter of _url
   */
  get url () {
    return this._url;
  }
  set url (url) {
    this._url = url
  }

  /**
   * fetch data from api
   *
   * @returns {Promise}
   */
  fetch () {
    throw new Error('AbstractModel@fetch must be implemented by subclass')
  }

  /**
   * sync new created model with api
   *
   * @returns {Promise}
   */
  create () {
    throw new Error('AbstractModel@create must be implemented by subclass')
  }

  /**
   * sync modified model with api
   *
   * @returns {Promise}
   */
  update () {
    throw new Error('AbstractModel@update must be implemented by subclass')
  }

  /**
   * sync deleted model with api
   *
   * @returns {Promise}
   */
  delete () {
    throw new Error('AbstractModel@delete must be implemented by subclass')
  }
}

