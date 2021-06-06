'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactSwipeable = require('react-swipeable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwipeWrapper = function SwipeWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      delta = _ref.delta,
      onSwiping = _ref.onSwiping,
      onSwiped = _ref.onSwiped;

  var swipeHandlers = (0, _reactSwipeable.useSwipeable)({
    delta: delta,
    onSwiping: onSwiping,
    onSwiped: onSwiped
  });
  return _react2.default.createElement(
    'div',
    _extends({}, swipeHandlers, { className: className }),
    children
  );
};

SwipeWrapper.propTypes = {
  children: _propTypes.node.isRequired,
  className: _propTypes.string,
  delta: _propTypes.number,
  onSwiped: _propTypes.func,
  onSwiping: _propTypes.func
};

SwipeWrapper.defaultProps = {
  className: '',
  delta: 0,
  onSwiping: function onSwiping() {},
  onSwiped: function onSwiped() {}
};

exports.default = SwipeWrapper;