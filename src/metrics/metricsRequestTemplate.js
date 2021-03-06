/*
 * Copyright 2017 Banco Bilbao Vizcaya Argentaria, S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const config = require('nconf');
const path = require('path');

config.argv()
  .env()
  .file(path.resolve(__dirname, '../../config/config.json'));

exports.getTemplate = function () {
  var template = {
    Namespace: 'AWS/ApplicationELB',
    Period: 60,

    StartTime: new Date(new Date().getTime() - config.get('START_TIME_LAPSE')),
    EndTime: new Date(new Date().getTime() - config.get('END_TIME_LAPSE')),

    Statistics: ['Sum']
  };

  return template;
};