import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import { useAsyncPaginateBase } from 'react-select-async-paginate';
import { useMapToAsyncPaginate } from './useMapToAsyncPaginate';
export var useSelectFetchBasePure = function useSelectFetchBasePure(useMapToAsyncPaginateParam, useAsyncPaginateParam, params) {
  var deps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var mappedParams = useMapToAsyncPaginateParam(params);
  var result = useAsyncPaginateParam(_objectSpread(_objectSpread({}, params), mappedParams), deps);
  return result;
};
export var useSelectFetchBase = function useSelectFetchBase(params) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return useSelectFetchBasePure(useMapToAsyncPaginate, useAsyncPaginateBase, params, deps);
};