"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.getPure = exports.stringifyParams = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _qs = _interopRequireDefault(require("qs"));

var stringifyParams = function stringifyParams(params) {
  return _qs["default"].stringify(params, {
    arrayFormat: 'repeat'
  });
};

exports.stringifyParams = stringifyParams;

var getPure = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fetchParam, stringifyParamsParam, url, params) {
    var paramsStr, response, responseJSON;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            paramsStr = stringifyParamsParam(params);
            _context.next = 3;
            return fetchParam("".concat(url, "?").concat(paramsStr), {
              credentials: 'same-origin'
            });

          case 3:
            response = _context.sent;

            if (!(response.status >= 400)) {
              _context.next = 6;
              break;
            }

            throw new Error('Failed to fetch');

          case 6:
            _context.next = 8;
            return response.json();

          case 8:
            responseJSON = _context.sent;
            return _context.abrupt("return", responseJSON);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPure(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPure = getPure;

var get = function get(url, params) {
  return getPure(fetch, stringifyParams, url, params);
};

exports.get = get;