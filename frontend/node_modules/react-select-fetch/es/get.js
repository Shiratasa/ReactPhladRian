import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import qs from 'qs';
export var stringifyParams = function stringifyParams(params) {
  return qs.stringify(params, {
    arrayFormat: 'repeat'
  });
};
export var getPure = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(fetchParam, stringifyParamsParam, url, params) {
    var paramsStr, response, responseJSON;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
export var get = function get(url, params) {
  return getPure(fetch, stringifyParams, url, params);
};