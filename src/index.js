(function(global) {
  'use strict';
  // Quick console polyfill
  if (!global.console) global.console = {};
  var con = global.console;
  if (typeof con['log'] !== 'function') con['log'] = function () {};

  var colors = {
    red: '#f44336',
    pink: '#e91e63',
    purple: '#9c27b0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    grey: '#9E9E9E',
    blueGrey: '#607D8B'
  };

  var generateRandomScope = function (scope) {
    var key = Math.floor(Math.random() * (Object.keys(colors).length));
    con.defineScope(scope, Object.keys(colors)[key]);
  };

  var scopes = {};

  con.theme_dark = false;

  con.defineScope = function (scope, color, css) {
    color = color || ((con.theme_dark === true) ? '#ffffff' : '#000000');
    css = css || '';
    color = (0 !== color.indexOf('#')) ? colors[color] : color;
    scopes[scope] = 'color:' + color + ';' + css;
  };

  con.defineScopes = function (scopes) {
    [].forEach.call(scopes, function (values, scope) {
      var color = values.color || undefined;
      var css = values.css || '';
      con.defineScope(scope, color, background, css);
    });
  };

  con.scope = function () {
    var args = Array.from(arguments);
    var scope = args[0];
    args[0] = '%c' + args[0];
    if (scopes[scope] === undefined) {
      generateRandomScope(scope);
    }
    args.splice(1, 0, scopes[scope]);
    con.log.apply(con, args);
  };
})(typeof window === 'undefined' ? this : window);
