import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { useCallback, useMemo } from 'react';
import { get as defaultGet } from './get';
export var defaultResponseMapper = function defaultResponseMapper(response) {
  return response;
};
export var useMapToAsyncPaginatePure = function useMapToAsyncPaginatePure(useCallbackParam, useMemoParam, selectFetchParams) {
  var url = selectFetchParams.url,
      _selectFetchParams$qu = selectFetchParams.queryParams,
      queryParams = _selectFetchParams$qu === void 0 ? {} : _selectFetchParams$qu,
      _selectFetchParams$se = selectFetchParams.searchParamName,
      searchParamName = _selectFetchParams$se === void 0 ? 'search' : _selectFetchParams$se,
      _selectFetchParams$pa = selectFetchParams.pageParamName,
      pageParamName = _selectFetchParams$pa === void 0 ? 'page' : _selectFetchParams$pa,
      _selectFetchParams$of = selectFetchParams.offsetParamName,
      offsetParamName = _selectFetchParams$of === void 0 ? 'offset' : _selectFetchParams$of,
      _selectFetchParams$ma = selectFetchParams.mapResponse,
      mapResponse = _selectFetchParams$ma === void 0 ? defaultResponseMapper : _selectFetchParams$ma,
      _selectFetchParams$ge = selectFetchParams.get,
      get = _selectFetchParams$ge === void 0 ? defaultGet : _selectFetchParams$ge,
      _selectFetchParams$in = selectFetchParams.initialPage,
      initialPage = _selectFetchParams$in === void 0 ? 1 : _selectFetchParams$in,
      _selectFetchParams$de = selectFetchParams.defaultInitialPage,
      defaultInitialPage = _selectFetchParams$de === void 0 ? 2 : _selectFetchParams$de;
  var additional = useMemoParam(function () {
    return {
      page: initialPage
    };
  }, [initialPage]);
  var defaultAdditional = useMemoParam(function () {
    return {
      page: defaultInitialPage
    };
  }, [defaultInitialPage]);
  var loadOptions = useCallbackParam( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(search, prevOptions, _ref) {
      var page, params, responseRaw, hasError, response;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _ref.page;
              params = _objectSpread(_objectSpread({}, queryParams), {}, _defineProperty({}, searchParamName, search));

              if (pageParamName) {
                params[pageParamName] = page;
              }

              if (offsetParamName) {
                params[offsetParamName] = prevOptions.length;
              }

              hasError = false;
              _context.prev = 5;
              _context.next = 8;
              return get(url, params);

            case 8:
              responseRaw = _context.sent;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);
              hasError = true;

            case 14:
              if (!hasError) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", {
                options: [],
                hasMore: false
              });

            case 16:
              response = mapResponse(responseRaw, {
                search: search,
                prevPage: page,
                prevOptions: prevOptions
              });
              return _context.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
                additional: {
                  page: page + 1
                }
              }));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 11]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(), [url, queryParams, searchParamName, pageParamName, offsetParamName, mapResponse, get]);
  return {
    loadOptions: loadOptions,
    additional: additional,
    defaultAdditional: defaultAdditional
  };
};
export var useMapToAsyncPaginate = function useMapToAsyncPaginate(params) {
  return useMapToAsyncPaginatePure(useCallback, useMemo, params);
};