#!/usr/bin/env node

/* Oto Brglez <otobrglez@gmail.com> */

const assert = require('assert'), https = require('https'), http = require('http'), querystring = require('querystring');

assert(process.argv[2] !== 'node', "Missing mid-way points!");
let midwayPoints = process.argv.slice(2).map((val, index) => val.replace(" ","+"));

const DISTANCE_PROVIDERS = {
  'google': function (midwayPoints, callback) {
    let queryString = querystring.encode({origins: midwayPoints[0], destinations: midwayPoints.slice(1).join('|')});
    https.get(`https://maps.googleapis.com/maps/api/distancematrix/json?${queryString}`, (response)=> {
      let body = '';
      response.on('data', (dataToJSON) => body += dataToJSON);
      response.on('end', ()=> DISTANCE_RESOLVERS.google(JSON.parse(body), callback));
    });
  }
};

const DISTANCE_RESOLVERS = {
  'google': function (response, callback) {
    return callback(response.destination_addresses.map((address, i) =>{
      let element = response.rows[0].elements[i];
      return {address: address, distance: element.distance, duration: element.duration };
    }));
  }
};

const distanceMatrix = function (midwayPoints, callback, provider = 'google') {
  return DISTANCE_PROVIDERS[provider](midwayPoints, callback);
};

/* Use like this */
distanceMatrix(midwayPoints, (data) => {
  console.log(data);
});

module.exports = {
  distanceMatrix: distanceMatrix,
  DISTANCE_PROVIDERS: DISTANCE_PROVIDERS,
  DISTANCE_RESOLVERS:DISTANCE_PROVIDERS
};
