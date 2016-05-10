/**
 * api.js
 *
 * offers basic api
 */

/**
 * fetch api
 * @see https://www.npmjs.com/package/node-fetch
 *
 *  {
    method: 'GET'
    , headers: {}        // request header. format {a:'1'} or {b:['1','2','3']}
    , redirect: 'follow' // set to 'manual' to extract redirect headers, `error` to reject redirect
    , follow: 20         // maximum redirect count. 0 to not follow redirect
    , timeout: 0         // req/res timeout in ms. 0 to disable (os limit still applies), timeout reset on redirect
    , compress: true     // support gzip/deflate content encoding. false to disable
    , size: 0            // maximum response body size in bytes. 0 to disable
    , body: empty        // request body. can be a string, buffer, readable stream
    , agent: null        // http.Agent instance, allows custom proxy, certificate etc.
  }
 */
import fetch from 'node-fetch'

// ------------------------------------
// Constants
// ------------------------------------
const BASE_URL = __DEV__ ? 'localhost:8079' : 'www.connectify.com'
const API = {

  searchEntity: query => fetch(BASE_URL + '/search/' + query, {
    method: 'GET'
  }),

  createEntity: (query, data) => fetch(BASE_URL + '/search/' + query, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),

  getEntity: id => fetch(BASE_URL + '/entity/' + id, {
    method: 'GET'
  }),

  deleteEntity: id => fetch(BASE_URL + '/entity/' + id, {
    method: 'DELETE'
  }),

  updateEntity: (id, data) => fetch(BASE_URL + '/entity/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export default API
