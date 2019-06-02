"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCountDown = function useCountDown() {
  var timeToCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60 * 1000;
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  var _React$useState = _react["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      timeLeft = _React$useState2[0],
      setTimeLeft = _React$useState2[1];

  var start = _react["default"].useCallback(function (newTimeToCount) {
    return setTimeLeft(newTimeToCount !== undefined ? newTimeToCount : timeToCount);
  }, []);

  var timer = null;

  _react["default"].useEffect(function () {
    if (timeLeft === 0) {
      return;
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      var nextSecondsLeft = timeLeft - interval > 0 ? timeLeft - interval : 0;
      setTimeLeft(nextSecondsLeft);
    }, interval);
    return function () {
      return window.clearTimeout(timer);
    };
  }, [timeLeft, timer]);

  return [timeLeft, start];
};

var _default = useCountDown;
exports["default"] = _default;