"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Component that displays a window modal. With props you can change the message inside the modal, the button'CSS style,
 * the container modal's CSS style ands the modal's CSS style.
 * @namespace
 * @property {Object} containerModalStyle An object with CSS properties customized to modify the CSS style of modal's container
 * @property {Function} closeModal Function that closes the modal when user clicks on the shutdown button 
 * @property {String} textModal Text that is displaying inside the modal
 * @property {Object} styleModal An object with CSS properties customized to modify the CSS style of the modal
 * @property {Object} styleButton An object with CSS properties customized to modify the CSS style of shutdown button
 * @returns {JSX.Element} A JSX element containing the modal component 
 */

function Modal(_ref) {
  let {
    containerModalStyle,
    closeModal,
    textModal,
    styleModal,
    styleButton
  } = _ref;
  (0, _react.useEffect)(() => {
    function escapeKeyManagement(event) {
      if (event.code === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown', escapeKeyManagement);
    return function () {
      document.removeEventListener('keydown', escapeKeyManagement);
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerModal",
    style: containerModalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: styleModal
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modalButton",
    style: styleButton,
    onClick: closeModal
  }, "X"), /*#__PURE__*/_react.default.createElement("p", null, textModal)));
}
var _default = Modal;
exports.default = _default;