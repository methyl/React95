'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var themes = {};
themes["default"] = {
  shadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.35)',
  insetShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)',
  insetShadowLight: 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)',
  hatchedBackground: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVQYV2P8////fwYGBgZGRkZGMI0hABIFAbgEugAAQFQP/QfjEPcAAAAASUVORK5CYII=)',
  canvas: '#ffffff',
  material: '#ced0cf',
  materialDark: '#9a9e9c',
  borderDarkest: '#050608',
  borderLightest: '#ffffff',
  borderDark: '#888c8f',
  borderLight: '#dfe0e3',
  headerMaterialDark: '#000080',
  headerMaterialLight: '#1034a6',
  headerText: '#ffffff',
  text: '#050608',
  textInvert: '#ffffff',
  textDisabled: '#888c8f',
  textDisabledShadow: '#ffffff',
  inputText: '#050608',
  inputTextInvert: '#ffffff',
  inputTextDisabled: '#888c8f',
  inputTextDisabledShadow: '#ffffff',
  tooltip: '#fefbcc',
  anchor: '#1034a6',
  anchorVisited: '#440381',
  hoverBackground: '#000080',
  checkmark: '#050608',
  progress: '#000080',
  flatLight: '#d8d8d8',
  flatDark: '#9e9e9e'
};
themes.water = {
  shadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.35)',
  insetShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)',
  insetShadowLight: 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)',
  hatchedBackground: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVQYV2P8////fwYGBgZGRkZGMI0hABIFAbgEugAAQFQP/QfjEPcAAAAASUVORK5CYII=)',
  canvas: '#ffffff',
  material: '#ced0cf',
  materialDark: '#9a9e9c',
  borderDarkest: '#050608',
  borderLightest: '#ffffff',
  borderDark: '#888c8f',
  borderLight: '#dfe0e3',
  headerMaterialDark: '#72b3b4',
  headerMaterialLight: '#72b3b4',
  headerText: '#ffffff',
  text: '#050608',
  textInvert: '#ffffff',
  textDisabled: '#888c8f',
  textDisabledShadow: '#ffffff',
  inputText: '#050608',
  inputTextInvert: '#ffffff',
  inputTextDisabled: '#888c8f',
  inputTextDisabledShadow: '#ffffff',
  tooltip: '#fefbcc',
  anchor: '#72b3b4',
  anchorVisited: '#440381',
  hoverBackground: '#72b3b4',
  checkmark: '#050608',
  progress: '#72b3b4',
  flatLight: '#d8d8d8',
  flatDark: '#9e9e9e'
};
themes.coldGray = {
  shadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.35)',
  insetShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)',
  insetShadowLight: 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)',
  hatchedBackground: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVQYV2P8////fwYGBgZGRkZGMI0hABIFAbgEugAAQFQP/QfjEPcAAAAASUVORK5CYII=)',
  // background: "#CCF5AC",
  // background: "#416165",
  background: '#4C6663',
  canvas: '#c7c7df',
  material: '#a1a3ca',
  materialDark: '#6063a5',
  borderDarkest: '#010601',
  borderLightest: '#c7c7df',
  borderDark: '#5b57a1',
  borderLight: '#a4a7c8',
  headerMaterialDark: '#3B3D64',
  headerMaterialLight: '#8d88c2',
  headerText: '#010601',
  text: '#010601',
  textInvert: '#c7c7df',
  textDisabled: '#5b57a1',
  textDisabledShadow: '#c7c7df',
  inputText: '#050608',
  inputTextInvert: '#ffffff',
  inputTextDisabled: '#888c8f',
  inputTextDisabledShadow: '#ffffff',
  tooltip: '#fefbcc',
  anchor: '#8d88c2',
  anchorVisited: '#440381',
  hoverBackground: '#8d88c2',
  checkmark: '#010601',
  progress: '#8d88c2',
  flatLight: '#a4a7c8',
  flatDark: '#5b57a1'
};
themes.lilacRoseDark = {
  shadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.35)',
  insetShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)',
  insetShadowLight: 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)',
  hatchedBackground: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVQYV2P8////fwYGBgZGRkZGMI0hABIFAbgEugAAQFQP/QfjEPcAAAAASUVORK5CYII=)',
  background: '#3B3B58',
  canvas: '#dab1c7',
  material: '#b26496',
  materialDark: '#763a60',
  borderDarkest: '#190000',
  borderLightest: '#FFCAFC',
  borderDark: '#7F3163',
  borderLight: '#E597C9',
  headerMaterialDark: '#4C0030',
  headerMaterialLight: '#8d88c2',
  headerText: '#010601',
  text: '#000000',
  textInvert: '#ecbfe3',
  textDisabled: '#82416d',
  textDisabledShadow: '#ecbfe3',
  inputText: '#000000',
  inputTextInvert: '#ecbfe3',
  inputTextDisabled: '#000000',
  inputTextDisabledShadow: '#000000',
  tooltip: '#fefbcc',
  anchor: '#a65387',
  anchorVisited: '#440381',
  hoverBackground: '#713259',
  checkmark: '#010601',
  progress: '#713259',
  flatLight: '#E597C9',
  flatDark: '#7F3163'
};
themes.violetDark = {
  shadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.35)',
  insetShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.2)',
  insetShadowLight: 'inset 3px 3px 10px rgba(0, 0, 0, 0.1)',
  hatchedBackground: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVQYV2P8////fwYGBgZGRkZGMI0hABIFAbgEugAAQFQP/QfjEPcAAAAASUVORK5CYII=)',
  canvas: '#c47bcc',
  material: '#652a6d',
  materialDark: '#210e23',
  borderDarkest: '#18051a',
  borderLightest: '#c47bcc',
  borderDark: '#3c1f3e',
  borderLight: '#945b9b',
  headerMaterialDark: '#1034a6',
  headerMaterialLight: '#512155',
  text: '#c57ece',
  textInvert: '#c47bcc',
  textDisabled: '#3c1f3e',
  textDisabledShadow: '#c47bcc',
  inputText: '#18051a',
  inputTextInvert: '#c57ece',
  inputTextDisabled: '#000000',
  inputTextDisabledShadow: '#000000',
  tooltip: '#fefbcc',
  anchor: '#1034a6',
  anchorVisited: '#440381',
  hoverBackground: '#512155',
  checkmark: '#000000',
  progress: '#000080',
  flatLight: '#945b9b',
  flatDark: '#3c1f3e'
};
themes.flat = _objectSpread({}, themes["default"], {
  shadow: 'none',
  insetShadow: 'none'
});

var reset = "\n  html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nul,\nli {\n  list-style-type: none;\n}\nbutton {\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  color: black;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n\n";

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// TODO - implement styled-system
var fontSizes = {
  sm: '15px',
  md: '16px',
  lg: '17px'
};
var blockSizes = {
  sm: '27px',
  md: '35px',
  lg: '43px'
};
var padding = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.25rem'
};
var fontFamily = 'sans-serif';

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  text-decoration: underline;\n  &:visited {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledAnchor = styled__default.a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.anchor;
}, function (_ref2) {
  var size = _ref2.size;
  return size ? fontSizes[size] : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.anchorVisited;
});

var Anchor = function Anchor(_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      href = _ref4.href,
      children = _ref4.children,
      otherProps = objectWithoutProperties(_ref4, ["className", "style", "href", "children"]);

  return React__default.createElement(StyledAnchor, _extends_1({
    href: href,
    className: className,
    style: style
  }, otherProps), children);
};

Anchor.defaultProps = {
  className: '',
  style: {}
};
Anchor.propTypes = {
  className: propTypes.string,
  href: propTypes.string.isRequired,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  children: propTypes.node.isRequired
};

var createDisabledTextStyles = function createDisabledTextStyles() {
  return styled.css(["color:", ";text-shadow:1px 1px ", ";-webkit-text-fill-color:", ";"], function (_ref) {
    var theme = _ref.theme;
    return theme.textDisabled;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.textDisabledShadow;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.inputTextDisabled;
  });
};
var createBoxStyles = function createBoxStyles() {
  return styled.css(["box-sizing:border-box;display:inline-block;background-color:", ";color:", ";"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.material;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.text;
  });
}; // TODO for flat box styles add checkered background when disabled (not solid color)

var createFlatBoxStyles = function createFlatBoxStyles() {
  return styled.css(["position:relative;box-sizing:border-box;display:inline-block;color:", ";background:", ";border:2px solid ", ";outline:2px solid ", ";outline-offset:-4px;"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.text;
  }, function (_ref7) {
    var theme = _ref7.theme,
        isDisabled = _ref7.isDisabled;
    return isDisabled ? theme.flatLight : theme.canvas;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.canvas;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.flatDark;
  });
};
var createBorderStyles = function createBorderStyles() {
  var invert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return invert ? styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref10) {
    var theme = _ref10.theme;
    return theme.borderDarkest;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.borderDarkest;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.borderLightest;
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.borderLightest;
  }, function (_ref14) {
    var shadow = _ref14.shadow,
        theme = _ref14.theme;
    return shadow && "".concat(theme.shadow, ", ");
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.borderDark;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.borderLight;
  }) : styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";box-shadow:", " inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref17) {
    var theme = _ref17.theme;
    return theme.borderLightest;
  }, function (_ref18) {
    var theme = _ref18.theme;
    return theme.borderLightest;
  }, function (_ref19) {
    var theme = _ref19.theme;
    return theme.borderDarkest;
  }, function (_ref20) {
    var theme = _ref20.theme;
    return theme.borderDarkest;
  }, function (_ref21) {
    var shadow = _ref21.shadow,
        theme = _ref21.theme;
    return shadow && "".concat(theme.shadow, ", ");
  }, function (_ref22) {
    var theme = _ref22.theme;
    return theme.borderLight;
  }, function (_ref23) {
    var theme = _ref23.theme;
    return theme.borderDark;
  });
};
var createWellBorderStyles = function createWellBorderStyles() {
  var invert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return invert ? styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";"], function (_ref24) {
    var theme = _ref24.theme;
    return theme.borderDark;
  }, function (_ref25) {
    var theme = _ref25.theme;
    return theme.borderDark;
  }, function (_ref26) {
    var theme = _ref26.theme;
    return theme.borderLightest;
  }, function (_ref27) {
    var theme = _ref27.theme;
    return theme.borderLightest;
  }) : styled.css(["border-style:solid;border-width:2px;border-left-color:", ";border-top-color:", ";border-right-color:", ";border-bottom-color:", ";"], function (_ref28) {
    var theme = _ref28.theme;
    return theme.borderLightest;
  }, function (_ref29) {
    var theme = _ref29.theme;
    return theme.borderLightest;
  }, function (_ref30) {
    var theme = _ref30.theme;
    return theme.borderDark;
  }, function (_ref31) {
    var theme = _ref31.theme;
    return theme.borderDark;
  });
};

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  ", ";\n  ", ";\n\n  position: ", ";\n  top: 0;\n  right: 0;\n  left: auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledAppBar = styled__default.header(_templateObject$1(), createBorderStyles(), createBoxStyles(), function (props) {
  return props.fixed ? 'fixed' : 'absolute';
});

var AppBar = function AppBar(_ref) {
  var fixed = _ref.fixed,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      shadow = _ref.shadow,
      otherProps = objectWithoutProperties(_ref, ["fixed", "children", "className", "style", "shadow"]);

  return React__default.createElement(StyledAppBar, _extends_1({
    fixed: fixed,
    style: style,
    className: className,
    shadow: shadow
  }, otherProps), children);
};

AppBar.defaultProps = {
  shadow: true,
  fixed: true,
  style: {},
  className: ''
};
AppBar.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number]),
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  fixed: propTypes.bool
};

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  display: block;\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  box-sizing: border-box;\n  object-fit: contain;\n  height: calc(", " - 2px);\n  width: calc(", " - 2px);\n  border-radius: ", ";\n  overflow: hidden;\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledAvatar = styled__default.div(_templateObject$2(), function () {
  return blockSizes.md;
}, function () {
  return blockSizes.md;
}, function (_ref) {
  var square = _ref.square;
  return square ? 0 : '50%';
}, function (_ref2) {
  var noBorder = _ref2.noBorder,
      theme = _ref2.theme;
  return !noBorder && "\n    border-top: 2px solid ".concat(theme.borderDark, ";\n    border-left: 2px solid ").concat(theme.borderDark, ";\n    border-bottom: 2px solid ").concat(theme.borderLightest, ";\n    border-right: 2px solid ").concat(theme.borderLightest, ";\n    background: ").concat(theme.material, ";\n  ");
}, function (_ref3) {
  var src = _ref3.src;
  return !src && "\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: bold;\n    font-size: 1rem;\n  ";
});
var SlyledAvatarIMG = styled__default.img(_templateObject2());

var Avatar = function Avatar(_ref4) {
  var children = _ref4.children,
      noBorder = _ref4.noBorder,
      square = _ref4.square,
      src = _ref4.src,
      alt = _ref4.alt,
      otherProps = objectWithoutProperties(_ref4, ["children", "noBorder", "square", "src", "alt"]);

  return React__default.createElement(StyledAvatar, _extends_1({
    noBorder: noBorder,
    square: square
  }, otherProps), src ? React__default.createElement(SlyledAvatarIMG, {
    src: src,
    alt: alt
  }) : children);
};

Avatar.defaultProps = {
  square: false,
  noBorder: false,
  src: undefined,
  children: null,
  alt: ''
};
Avatar.propTypes = {
  square: propTypes.bool,
  noBorder: propTypes.bool,
  children: propTypes.node,
  src: propTypes.string,
  alt: propTypes.string
};

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  box-sizing: border-box;\n  height: ", ";\n  width: 5px;\n  border-top: 2px solid ", ";\n  border-left: 2px solid ", ";\n  border-bottom: 2px solid ", ";\n  border-right: 2px solid ", ";\n  background: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBar = styled__default.div(_templateObject$3(), function (props) {
  return blockSizes[props.size];
}, function (_ref) {
  var theme = _ref.theme;
  return theme.borderLightest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderLightest;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderDark;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderDark;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.material;
});

var Bar = function Bar(_ref6) {
  var size = _ref6.size,
      className = _ref6.className,
      style = _ref6.style,
      otherProps = objectWithoutProperties(_ref6, ["size", "className", "style"]);

  return React__default.createElement(StyledBar, _extends_1({
    size: size,
    className: className,
    style: style
  }, otherProps));
};

Bar.defaultProps = {
  size: 'md',
  className: '',
  style: {}
};
Bar.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  size: propTypes.oneOf(['sm', 'md', 'lg'])
};

function _templateObject$4() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var commonButtonStyles = styled.css(["position:relative;display:inline-flex;align-items:center;justify-content:center;height:", ";width:", ";padding:", ";font-size:", ";&:active{padding-top:", ";}padding-top:", ";"], function (_ref) {
  var size = _ref.size;
  return blockSizes[size];
}, function (_ref2) {
  var fullWidth = _ref2.fullWidth,
      square = _ref2.square,
      size = _ref2.size;
  return fullWidth ? '100%' : square ? blockSizes[size] : 'auto';
}, function (_ref3) {
  var square = _ref3.square;
  return square ? 0 : "0 ".concat(padding.sm);
}, fontSizes.md, function (_ref4) {
  var isDisabled = _ref4.isDisabled;
  return !isDisabled && '2px';
}, function (_ref5) {
  var active = _ref5.active,
      isDisabled = _ref5.isDisabled;
  return active && !isDisabled && '2px';
});
var StyledButton = styled__default.button(_templateObject$4(), function (_ref6) {
  var variant = _ref6.variant;
  return variant === 'flat' ? styled.css(["", " "], createFlatBoxStyles()) : variant === 'menu' ? styled.css(["", ";border:2px solid transparent;&:hover{", "}&:active{", "}", " ", ""], createBoxStyles(), function (_ref7) {
    var isDisabled = _ref7.isDisabled,
        active = _ref7.active;
    return !isDisabled && !active && createWellBorderStyles(false);
  }, function (_ref8) {
    var isDisabled = _ref8.isDisabled;
    return !isDisabled && createWellBorderStyles(true);
  }, function (_ref9) {
    var active = _ref9.active;
    return active && createWellBorderStyles(true);
  }, function (_ref10) {
    var isDisabled = _ref10.isDisabled;
    return isDisabled && createDisabledTextStyles();
  }) : styled.css(["", ";", " ", " &:active{", "}", ""], createBoxStyles(), function (_ref11) {
    var active = _ref11.active;
    return active ? createBorderStyles(true) : createBorderStyles(false);
  }, function (_ref12) {
    var active = _ref12.active,
        theme = _ref12.theme;
    return active && "background-image: ".concat(theme.hatchedBackground, ";");
  }, function (_ref13) {
    var isDisabled = _ref13.isDisabled;
    return !isDisabled && createBorderStyles(true);
  }, function (_ref14) {
    var isDisabled = _ref14.isDisabled;
    return isDisabled && createDisabledTextStyles();
  });
}, commonButtonStyles);

var Button = function Button(_ref15) {
  var type = _ref15.type,
      onClick = _ref15.onClick,
      style = _ref15.style,
      disabled = _ref15.disabled,
      fullWidth = _ref15.fullWidth,
      size = _ref15.size,
      square = _ref15.square,
      active = _ref15.active,
      variant = _ref15.variant,
      className = _ref15.className,
      children = _ref15.children,
      otherProps = objectWithoutProperties(_ref15, ["type", "onClick", "style", "disabled", "fullWidth", "size", "square", "active", "variant", "className", "children"]);

  return React__default.createElement(StyledButton, _extends_1({
    type: type,
    variant: variant,
    onClick: disabled ? undefined : onClick,
    style: style,
    isDisabled: disabled,
    fullWidth: fullWidth,
    size: size,
    square: square,
    active: active,
    className: className // onTouchStart below to enable button :active style on iOS
    ,
    onTouchStart: function onTouchStart() {
      return '';
    }
  }, otherProps), children);
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  style: {},
  disabled: false,
  fullWidth: false,
  size: 'md',
  square: false,
  active: false,
  variant: 'default',
  className: ''
};
Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  fullWidth: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  square: propTypes.bool,
  active: propTypes.bool,
  variant: propTypes.oneOf(['default', 'menu', 'flat']),
  className: propTypes.string,
  children: propTypes.node.isRequired
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function _templateObject$5() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  padding: 2px;\n\n  border-style: solid;\n  border-width: 2px;\n  border-left-color: ", ";\n  border-top-color: ", ";\n  border-right-color: ", ";\n  border-bottom-color: ", ";\n\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    content: '';\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n\n    border-style: solid;\n    border-width: 2px;\n    border-left-color: ", ";\n    border-top-color: ", ";\n    border-right-color: ", ";\n    border-bottom-color: ", ";\n\n    pointer-events: none;\n    ", "\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCutout = styled__default.div(_templateObject$5(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderDark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderLightest;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderLightest;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderDarkest;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderDarkest;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.borderLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderLight;
}, function (_ref9) {
  var shadow = _ref9.shadow,
      theme = _ref9.theme;
  return console.log(theme) || shadow && "box-shadow:".concat(theme.insetShadow, ";");
}); // add padding prop ?

var Cutout = function Cutout(_ref10) {
  var className = _ref10.className,
      style = _ref10.style,
      children = _ref10.children,
      shadow = _ref10.shadow,
      otherProps = objectWithoutProperties(_ref10, ["className", "style", "children", "shadow"]);

  return React__default.createElement(StyledCutout, _extends_1({
    shadow: shadow,
    className: className,
    style: style
  }, otherProps), children);
};

Cutout.defaultProps = {
  shadow: true,
  className: '',
  children: null,
  style: {}
};
Cutout.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  children: propTypes.node,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n  background: ", ";\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  ", "\n  background: ", ";\n  box-shadow: ", ";\n  &:before {\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  z-index: -99;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  padding-left: calc(", " + ", ");\n  margin: ", " 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  font-size: ", ";\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var checkboxSize = '20px';
var StyledLabel = styled__default.label(_templateObject$6(), checkboxSize, padding.sm, padding.sm, fontSizes.md, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});
var StyledInput = styled__default.input(_templateObject2$1());

var createCheckmarkSymbol = function createCheckmarkSymbol(_ref) {
  var checked = _ref.checked;
  return checked && styled.css(["&:after{content:'';display:block;position:absolute;left:50%;top:calc(50% - 1px);width:3px;height:7px;border:solid ", ";border-width:0 3px 3px 0;transform:translate(-50%,-50%) rotate(45deg);}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.checkmark;
  });
};

var sharedCheckmarkStyles = styled.css(["position:absolute;top:50%;left:0;transform:translateY(-50%);width:", ";height:", ";", ""], checkboxSize, checkboxSize, function (props) {
  return createCheckmarkSymbol(props);
});
var StyledCheckmark = styled__default(Cutout)(_templateObject3(), sharedCheckmarkStyles, function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
}, function (_ref4) {
  var shadow = _ref4.shadow,
      theme = _ref4.theme;
  return shadow ? theme.insetShadowLight : 'none';
});
var StyledFlatCheckmark = styled__default.div(_templateObject4(), createFlatBoxStyles(), sharedCheckmarkStyles, function (_ref5) {
  var theme = _ref5.theme,
      isDisabled = _ref5.isDisabled;
  return isDisabled ? theme.flatLight : theme.canvas;
});

var Checkbox = function Checkbox(_ref6) {
  var onChange = _ref6.onChange,
      label = _ref6.label,
      disabled = _ref6.disabled,
      variant = _ref6.variant,
      value = _ref6.value,
      checked = _ref6.checked,
      defaultChecked = _ref6.defaultChecked,
      name = _ref6.name,
      className = _ref6.className,
      style = _ref6.style,
      shadow = _ref6.shadow,
      otherProps = objectWithoutProperties(_ref6, ["onChange", "label", "disabled", "variant", "value", "checked", "defaultChecked", "name", "className", "style", "shadow"]);

  var Checkmark = variant === 'flat' ? StyledFlatCheckmark : StyledCheckmark;
  var Input;

  if (defaultChecked || checked === undefined) {
    var _useState = React.useState(defaultChecked || false),
        _useState2 = slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    var handleChange = function handleChange(e) {
      var newState = e.target.checked;
      setState(newState);
      if (onChange) onChange(e);
    };

    Input = React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledInput, _extends_1({
      onChange: disabled ? undefined : handleChange,
      readOnly: disabled,
      type: "checkbox",
      value: value,
      checked: state,
      name: name
    }, otherProps)), React__default.createElement(Checkmark, {
      checked: state,
      isDisabled: disabled,
      shadow: shadow
    }));
  } else {
    Input = React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledInput, _extends_1({
      onChange: disabled ? undefined : onChange,
      readOnly: disabled,
      type: "checkbox",
      value: value,
      checked: checked,
      name: name
    }, otherProps)), React__default.createElement(Checkmark, {
      checked: checked,
      isDisabled: disabled,
      shadow: shadow
    }));
  }

  return React__default.createElement(StyledLabel, {
    isDisabled: disabled,
    className: className,
    style: style
  }, label, Input);
};

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  variant: 'default',
  shadow: true,
  onChange: function onChange() {},
  checked: false,
  style: {},
  defaultChecked: false,
  className: ''
};
Checkbox.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  defaultChecked: propTypes.bool,
  className: propTypes.string
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _templateObject$7() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  padding: 2px;\n  ", "\n  ", "\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWindow = styled__default.div(_templateObject$7(), createBorderStyles(), createBoxStyles());

var Window = function Window(_ref) {
  var shadow = _ref.shadow,
      className = _ref.className,
      children = _ref.children,
      otherProps = objectWithoutProperties(_ref, ["shadow", "className", "children"]);

  return React__default.createElement(StyledWindow, _extends_1({
    shadow: shadow,
    className: className
  }, otherProps, {
    swag: true
  }), children);
};

Window.defaultProps = {
  shadow: true,
  className: '',
  children: null
};
Window.propTypes = {
  shadow: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node
};

function _templateObject$8() {
  var data = taggedTemplateLiteral(["\n  height: 33px;\n  line-height: 33px;\n  padding: 0 ", ";\n  margin-right: 2px;\n  margin-bottom: 4px;\n\n  font-weight: bold;\n  color: ", ";\n\n  background: linear-gradient(\n    to right,\n    ", ",\n    ", "\n  );\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var SlyledWindowHeader = styled__default.div(_templateObject$8(), padding.sm, function (_ref) {
  var theme = _ref.theme;
  return theme.textInvert;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.headerMaterialDark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.headerMaterialLight;
});

var WindowHeader = function WindowHeader(_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      children = _ref4.children,
      otherProps = objectWithoutProperties(_ref4, ["className", "style", "children"]);

  return React__default.createElement(SlyledWindowHeader, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

WindowHeader.defaultProps = {
  className: '',
  style: {},
  children: null
};
WindowHeader.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  children: propTypes.node
};

function _templateObject$9() {
  var data = taggedTemplateLiteral(["\n  padding: ", ";\n  margin-right: 2px;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWindowContent = styled__default.div(_templateObject$9(), padding.md);

var WindowContent = function WindowContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledWindowContent, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

WindowContent.defaultProps = {
  className: '',
  style: {},
  children: null
};
WindowContent.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  children: propTypes.node
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  width: 100%;\n  padding-left: ", ";\n\n  height: calc(", " - 4px);\n  line-height: calc(", " - 4px);\n  font-size: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  font-size: ", ";\n  position: absolute;\n  transform: translateY(100%);\n  left: 0px;\n  background: ", ";\n  padding: 2px;\n  border-top: none;\n  cursor: default;\n  z-index: 99;\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 0px;\n  height: 0px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  display: inline-block;\n  border-top: 6px solid ", ";\n  ", ":active & {\n    margin-top: 2px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n  width: 30px;\n  padding: 0;\n  z-index: 1;\n  flex-shrink: 0;\n  ", "\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  width: 100%;\n  padding-left: ", ";\n  overflow: hidden;\n  white-space: nowrap;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var sharedWrapperStyles = styled.css(["height:", ";display:flex;align-items:center;justify-content:space-between;background:", ";color:", ";font-size:", ";"], blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputText;
}, fontSizes.md);
var StyledSelectWrapper = styled__default(Cutout)(_templateObject$a(), sharedWrapperStyles);
var StyledFlatSelectWrapper = styled__default.div(_templateObject2$2(), createFlatBoxStyles(), sharedWrapperStyles);
var StyledSelectContent = styled__default.div(_templateObject3$1(), padding.sm);
var StyledDropdownButton = styled__default(Button)(_templateObject4$1(), function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'flat' ? styled.css(["height:calc(100% - 4px);margin-right:2px;"]) : styled.css(["height:100%;border-left-color:", ";border-top-color:", ";box-shadow:inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.borderLight;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.borderLight;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.borderLightest;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.borderDark;
  });
});
var StyledDropdownIcon = styled__default.span(_templateObject5(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.text;
}, StyledDropdownButton);
var StyledDropdownList = styled__default.ul(_templateObject6(), fontSizes.md, function (_ref9) {
  var theme = _ref9.theme;
  return theme.canvas;
}, function (_ref10) {
  var variant = _ref10.variant;
  return variant === 'flat' ? styled.css(["bottom:2px;width:100%;border:2px solid ", ";"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.flatDark;
  }) : styled.css(["box-shadow:", ";bottom:-2px;width:calc(100% - 2px);border:2px solid ", ";"], function (_ref12) {
    var shadow = _ref12.shadow,
        theme = _ref12.theme;
    return shadow ? theme.shadow : 'none';
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.borderDarkest;
  });
});
var StyledDropdownListItem = styled__default.li(_templateObject7(), padding.sm, blockSizes.md, blockSizes.md, fontSizes.md, function (_ref14) {
  var theme = _ref14.theme;
  return theme.inputText;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.hoverBackground;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.inputTextInvert;
});

var Select = function Select(_ref17) {
  var items = _ref17.items,
      selectedIndex = _ref17.selectedIndex,
      shadow = _ref17.shadow,
      variant = _ref17.variant,
      width = _ref17.width,
      height = _ref17.height,
      className = _ref17.className,
      onChange = _ref17.onChange,
      style = _ref17.style,
      otherProps = objectWithoutProperties(_ref17, ["items", "selectedIndex", "shadow", "variant", "width", "height", "className", "onChange", "style"]);

  var _useState = React.useState(selectedIndex),
      _useState2 = slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var handleSelect = function handleSelect(i) {
    if (onChange) onChange(items[i].value);
    setIndex(i);
  };

  var Wrapper = variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper;
  return React__default.createElement(Wrapper, _extends_1({
    className: className,
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: _objectSpread$1({}, style, {
      width: width || 'auto'
    }),
    shadow: shadow
  }, otherProps), React__default.createElement(StyledSelectContent, null, items.length ? items[index].label : ''), React__default.createElement(StyledDropdownButton, {
    variant: variant
  }, React__default.createElement(StyledDropdownIcon, null)), open && React__default.createElement(StyledDropdownList, {
    shadow: shadow,
    variant: variant,
    style: height && {
      overflowY: 'scroll',
      height: height
    }
  }, items.map(function (item, i) {
    return React__default.createElement(StyledDropdownListItem // eslint-disable-next-line
    , {
      key: i,
      onClick: function onClick() {
        return handleSelect(i);
      }
    }, item.label);
  })));
};

Select.defaultProps = {
  style: {},
  shadow: true,
  variant: 'default',
  selectedIndex: 0,
  className: '',
  width: null,
  height: null,
  onChange: null
};
Select.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  className: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.number,
  selectedIndex: propTypes.number,
  shadow: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  style: propTypes.shape([propTypes.string, propTypes.number]),
  onChange: propTypes.func
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3$2() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 0 ", ";\n  outline: none;\n  border: none;\n  background: none;\n  font-size: ", ";\n  font-family: ", ";\n  ", "\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  height: ", ";\n  ", "\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = taggedTemplateLiteral(["\n  height: ", ";\n  background: ", ";\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWrapper = styled__default(Cutout)(_templateObject$b(), blockSizes.md, function (_ref) {
  var theme = _ref.theme,
      isDisabled = _ref.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
});
var StyledFlatWrapper = styled__default.div(_templateObject2$3(), blockSizes.md, createFlatBoxStyles());
var StyledTextInput = styled__default.input(_templateObject3$2(), padding.sm, fontSizes.md, fontFamily, function (_ref2) {
  var disabled = _ref2.disabled,
      variant = _ref2.variant;
  return variant !== 'flat' && disabled && createDisabledTextStyles();
});

var TextField = function TextField(_ref3) {
  var onChange = _ref3.onChange,
      disabled = _ref3.disabled,
      variant = _ref3.variant,
      type = _ref3.type,
      style = _ref3.style,
      shadow = _ref3.shadow,
      className = _ref3.className,
      width = _ref3.width,
      otherProps = objectWithoutProperties(_ref3, ["onChange", "disabled", "variant", "type", "style", "shadow", "className", "width"]);

  var Wrapper = variant === 'flat' ? StyledFlatWrapper : StyledWrapper;
  return React__default.createElement(Wrapper, {
    width: width,
    shadow: shadow,
    isDisabled: disabled,
    style: _objectSpread$2({}, style, {
      width: width || 'auto'
    }),
    className: className
  }, React__default.createElement(StyledTextInput, _extends_1({
    onChange: disabled ? undefined : onChange,
    readOnly: disabled,
    disabled: disabled,
    variant: variant,
    type: type
  }, otherProps)));
};

TextField.defaultProps = {
  disabled: false,
  type: 'text',
  shadow: true,
  variant: 'default',
  style: {},
  width: null,
  onChange: function onChange() {},
  className: ''
};
TextField.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  shadow: propTypes.bool,
  type: propTypes.string,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4$2() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) ", ";\n  width: 0px;\n  height: 0px;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  display: inline-block;\n  border-top: 4px solid ", ";\n  ", ":active & {\n    margin-top: 2px;\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = taggedTemplateLiteral(["\n  height: 50%;\n  width: 30px;\n  padding: 0;\n  flex-shrink: 0;\n\n  ", "\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = taggedTemplateLiteral(["\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin-left: 2px;\n  margin-top: ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var StyledNumberFieldWrapper = styled__default.div(_templateObject$c());
var StyledButtonWrapper = styled__default.div(_templateObject2$4(), blockSizes.md, function (_ref) {
  var variant = _ref.variant;
  return variant === 'default' ? '-2px' : '0';
});
var StyledButton$1 = styled__default(Button)(_templateObject3$3(), function (_ref2) {
  var isFlat = _ref2.isFlat;
  return !isFlat && styled.css(["border-left-color:", ";border-top-color:", ";box-shadow:inset 1px 1px 0px 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.borderLight;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.borderLight;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.borderLightest;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.borderDark;
  });
});
var StyledButtonIcon = styled__default.span(_templateObject4$2(), function (props) {
  return props.invert && 'rotateZ(180deg)';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.text;
}, StyledButton$1);

var NumberField =
/*#__PURE__*/
function (_React$Component) {
  inherits(NumberField, _React$Component);

  function NumberField() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, NumberField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(NumberField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      // eslint-disable-next-line
      value: parseInt(_this.props.value, 10) || 0
    });

    defineProperty(assertThisInitialized(_this), "add", function (addValue) {
      var value = _this.state.value;
      var onChange = _this.props.onChange;

      var newValue = _this.normalize(value + addValue);

      onChange(newValue);

      _this.setState({
        value: newValue
      });
    });

    defineProperty(assertThisInitialized(_this), "handleChange", function (e) {
      var newValue = e.target.value === '-' ? '-' : _this.normalize(e.target.value); // eslint-disable-next-line

      newValue = newValue ? newValue : newValue === 0 ? 0 : '';

      if (e.target.validity.valid) {
        var onChange = _this.props.onChange;

        _this.setState({
          value: newValue
        });

        onChange(newValue);
      }
    });

    defineProperty(assertThisInitialized(_this), "normalize", function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      if (min && value < min) return min;
      if (max && value > max) return max;
      return parseInt(value, 10);
    });

    return _this;
  }

  createClass(NumberField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          disableKeyboardInput = _this$props2.disableKeyboardInput,
          className = _this$props2.className,
          variant = _this$props2.variant,
          width = _this$props2.width,
          style = _this$props2.style;
      var value = this.state.value;
      return React__default.createElement(StyledNumberFieldWrapper, {
        className: className,
        style: _objectSpread$3({}, style, {
          width: width || 'auto'
        })
      }, React__default.createElement(TextField, {
        value: value,
        variant: variant,
        onChange: disabled || disableKeyboardInput ? undefined : this.handleChange,
        readOnly: disabled || disableKeyboardInput,
        disabled: disabled,
        type: "tel",
        pattern: "^-?[0-9]\\d*\\.?\\d*$",
        width: "100%"
      }), React__default.createElement(StyledButtonWrapper, null, React__default.createElement(StyledButton$1, {
        isFlat: variant === 'flat',
        variant: variant,
        disabled: disabled,
        onClick: function onClick() {
          return _this2.add(1);
        }
      }, React__default.createElement(StyledButtonIcon, {
        invert: true
      })), React__default.createElement(StyledButton$1, {
        isFlat: variant === 'flat',
        variant: variant,
        disabled: disabled,
        onClick: function onClick() {
          return _this2.add(-1);
        }
      }, React__default.createElement(StyledButtonIcon, null))));
    }
  }]);

  return NumberField;
}(React__default.Component);

defineProperty(NumberField, "propTypes", {
  variant: propTypes.oneOf(['default', 'flat']),
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  min: propTypes.number,
  max: propTypes.number,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  disableKeyboardInput: propTypes.bool,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
});

defineProperty(NumberField, "defaultProps", {
  variant: 'default',
  disabled: false,
  min: null,
  max: null,
  width: null,
  disableKeyboardInput: false,
  className: '',
  style: {}
});

function _templateObject$d() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: ", ";\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToolbar = styled__default.div(_templateObject$d(), function (props) {
  return props.noPadding ? '0px' : '4px';
});

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      noPadding = _ref.noPadding,
      otherProps = objectWithoutProperties(_ref, ["children", "className", "style", "noPadding"]);

  return React__default.createElement(StyledToolbar, _extends_1({
    noPadding: noPadding,
    className: className,
    style: style
  }, otherProps), children);
};

Toolbar.defaultProps = {
  noPadding: false,
  style: {},
  className: ''
};
Toolbar.propTypes = {
  style: propTypes.shape([propTypes.string, propTypes.number]),
  className: propTypes.string,
  children: propTypes.node.isRequired,
  noPadding: propTypes.bool
};

function _templateObject5$1() {
  var data = taggedTemplateLiteral(["\n  cursor: pointer;\n\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    border: 2px dashed\n      ", ";\n  }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = taggedTemplateLiteral(["\n  text-align: center;\n  height: 1.5em;\n  line-height: 1.5em;\n  width: 14.28%;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  background: ", ";\n  color: #dfe0e3;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = taggedTemplateLiteral(["\n  width: 234px;\n  margin: 1rem 0;\n  background: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var Calendar = styled__default(Cutout)(_templateObject$e(), function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
});
var WeekDays = styled__default.div(_templateObject2$5(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.materialDark;
});
var Dates = styled__default.div(_templateObject3$4());
var DateItem = styled__default.div(_templateObject4$3());
var DateItemContent = styled__default.span(_templateObject5$1(), function (_ref3) {
  var active = _ref3.active,
      theme = _ref3.theme;
  return active ? theme.hoverBackground : 'transparent';
}, function (_ref4) {
  var active = _ref4.active,
      theme = _ref4.theme;
  return active ? theme.textInvert : 'initial';
}, function (_ref5) {
  var theme = _ref5.theme,
      active = _ref5.active;
  return active ? 'none' : theme.materialDark;
});

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}

var DatePicker =
/*#__PURE__*/
function (_Component) {
  inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    classCallCheck(this, DatePicker);

    _this = possibleConstructorReturn(this, getPrototypeOf(DatePicker).call(this, props));

    defineProperty(assertThisInitialized(_this), "convertDateToState", function (date) {
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      return {
        day: day,
        month: month,
        year: year
      };
    });

    defineProperty(assertThisInitialized(_this), "handleMonthSelect", function (month) {
      return _this.setState({
        month: month
      });
    });

    defineProperty(assertThisInitialized(_this), "handleYearSelect", function (year) {
      return _this.setState({
        year: year
      });
    });

    defineProperty(assertThisInitialized(_this), "handleDaySelect", function (day) {
      return _this.setState({
        day: day
      });
    });

    defineProperty(assertThisInitialized(_this), "handleAccept", function () {
      var _this$state = _this.state,
          year = _this$state.year,
          month = _this$state.month,
          day = _this$state.day;
      var onAccept = _this.props.onAccept;
      var date = new Date(year, month, day);
      onAccept(date);
    });

    var initialDate = _this.convertDateToState(props.date || new Date());

    _this.state = initialDate;
    return _this;
  }

  createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var day = this.state.day;
      var _this$state2 = this.state,
          month = _this$state2.month,
          year = _this$state2.year;
      var _this$props = this.props,
          shadow = _this$props.shadow,
          className = _this$props.className,
          onAccept = _this$props.onAccept,
          onCancel = _this$props.onCancel;
      var months = [{
        value: 0,
        label: 'January'
      }, {
        value: 1,
        label: 'February'
      }, {
        value: 2,
        label: 'March'
      }, {
        value: 3,
        label: 'April'
      }, {
        value: 4,
        label: 'May'
      }, {
        value: 5,
        label: 'June'
      }, {
        value: 6,
        label: 'July'
      }, {
        value: 7,
        label: 'August'
      }, {
        value: 8,
        label: 'September'
      }, {
        value: 9,
        label: 'October'
      }, {
        value: 10,
        label: 'November'
      }, {
        value: 11,
        label: 'December'
      }]; // eslint-disable-next-line

      var dayPickerItems = Array.apply(null, {
        length: 35
      });
      var firstDayIndex = dayIndex(year, month, 1);
      var daysNumber = daysInMonth(year, month);
      day = day < daysNumber ? day : daysNumber;
      dayPickerItems.forEach(function (item, i) {
        if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
          var dayNumber = i - firstDayIndex + 1;
          dayPickerItems[i] = React__default.createElement(DateItem // eslint-disable-next-line
          , {
            key: i,
            onClick: function onClick() {
              _this2.handleDaySelect(dayNumber);
            }
          }, React__default.createElement(DateItemContent, {
            active: dayNumber === day
          }, dayNumber));
        } else {
          dayPickerItems[i] = React__default.createElement(DateItem // eslint-disable-next-line
          , {
            key: i
          });
        }
      });
      return React__default.createElement(Window, {
        style: {
          margin: 20
        },
        className: className,
        shadow: shadow
      }, React__default.createElement(WindowHeader, null, React__default.createElement("span", {
        role: "img",
        "aria-label": "\uD83D\uDCC6"
      }, "\uD83D\uDCC6"), "Date"), React__default.createElement(WindowContent, null, React__default.createElement(Toolbar, {
        noPadding: true,
        style: {
          justifyContent: 'space-between'
        }
      }, React__default.createElement(Select, {
        items: months,
        selectedIndex: month,
        onChange: this.handleMonthSelect,
        width: 128,
        height: 200
      }), React__default.createElement(NumberField, {
        value: year,
        disableKeyboardInput: true,
        onChange: this.handleYearSelect,
        width: 100
      })), React__default.createElement(Calendar, null, React__default.createElement(WeekDays, null, React__default.createElement(DateItem, null, "S"), React__default.createElement(DateItem, null, "M"), React__default.createElement(DateItem, null, "T"), React__default.createElement(DateItem, null, "W"), React__default.createElement(DateItem, null, "T"), React__default.createElement(DateItem, null, "F"), React__default.createElement(DateItem, null, "S")), React__default.createElement(Dates, null, dayPickerItems)), React__default.createElement(Toolbar, {
        noPadding: true,
        style: {
          justifyContent: 'space-between'
        }
      }, React__default.createElement(Button, {
        fullWidth: true,
        onClick: onCancel || undefined,
        disabled: !onCancel
      }, "Cancel"), React__default.createElement(Button, {
        fullWidth: true,
        onClick: onAccept ? this.handleAccept : undefined,
        disabled: !onAccept
      }, "OK"))));
    }
  }]);

  return DatePicker;
}(React.Component);

defineProperty(DatePicker, "propTypes", {
  className: propTypes.string,
  shadow: propTypes.bool,
  onAccept: propTypes.func,
  onCancel: propTypes.func,
  date: propTypes.instanceOf(Date)
});

defineProperty(DatePicker, "defaultProps", {
  shadow: true,
  className: '',
  onAccept: null,
  onCancel: null,
  date: null
});

function _templateObject$f() {
  var data = taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDivider = styled__default.hr(_templateObject$f(), function (_ref) {
  var vertical = _ref.vertical,
      theme = _ref.theme,
      size = _ref.size;
  return vertical ? "\n    height: ".concat(blockSizes[size], ";\n    border-left: 2px solid ").concat(theme.borderDark, ";\n    border-right: 2px solid ").concat(theme.borderLightest, ";\n    margin: 0;\n    ") : "\n    width: 100%;\n    border-bottom: 2px solid ".concat(theme.borderLightest, ";\n    border-top: 2px solid ").concat(theme.borderDark, ";\n    margin: 0;\n    ");
});

var Divider = function Divider(_ref2) {
  var vertical = _ref2.vertical,
      className = _ref2.className,
      style = _ref2.style,
      otherProps = objectWithoutProperties(_ref2, ["vertical", "className", "style"]);

  return React__default.createElement(StyledDivider, _extends_1({
    vertical: vertical,
    as: vertical ? 'div' : 'hr',
    className: className,
    style: style
  }, otherProps));
};

Divider.defaultProps = {
  size: 'md',
  vertical: false,
  className: '',
  style: {}
};
Divider.propTypes = {
  vertical: propTypes.bool,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject3$5() {
  var data = taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: ", ";\n  transform: translateY(calc(-50% - 2px));\n  padding: 0 ", ";\n\n  font-size: ", ";\n  background: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  border: 2px solid\n    ", ";\n  padding: ", ";\n  margin-top: ", ";\n  font-size: ", ";\n  color: ", ";\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFieldset = styled__default.fieldset(_templateObject$g(), function (_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return variant === 'flat' ? theme.flatDark : theme.borderLightest;
}, padding.md, padding.sm, fontSizes.md, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant !== 'flat' && styled.css(["box-shadow:-1px -1px 0 1px ", ",inset -1px -1px 0 1px ", ";"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.borderDark;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.borderDark;
  });
});
var StyledLegend = styled__default.legend(_templateObject2$6(), padding.sm, padding.sm, fontSizes.md, function (_ref6) {
  var theme = _ref6.theme,
      variant = _ref6.variant;
  return variant === 'flat' ? theme.canvas : theme.material;
});
var StyledFieldsetContent = styled__default.div(_templateObject3$5(), function (props) {
  return props.isDisabled && createDisabledTextStyles();
});

var Fieldset = function Fieldset(_ref7) {
  var label = _ref7.label,
      disabled = _ref7.disabled,
      variant = _ref7.variant,
      children = _ref7.children,
      className = _ref7.className,
      style = _ref7.style,
      otherProps = objectWithoutProperties(_ref7, ["label", "disabled", "variant", "children", "className", "style"]);

  return React__default.createElement(StyledFieldset, _extends_1({
    isDisabled: disabled,
    variant: variant,
    style: style,
    className: className
  }, otherProps), label && React__default.createElement(StyledLegend, {
    variant: variant
  }, label), React__default.createElement(StyledFieldsetContent, {
    isDisabled: disabled
  }, children));
};

Fieldset.defaultProps = {
  disabled: false,
  variant: 'default',
  label: null,
  className: '',
  style: {},
  children: null
};
Fieldset.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.node]),
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  children: propTypes.node,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat'])
};

var base64hourglass = "url('data:image/gif;base64,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')";

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2$7() {
  var data = taggedTemplateLiteral(["\n  display: block;\n  background: ", ";\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer = styled__default.span(_templateObject$h());
var StyledHourglass = styled__default.span(_templateObject2$7(), base64hourglass);

var Hourglass = function Hourglass(_ref) {
  var size = _ref.size,
      className = _ref.className,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["size", "className", "style"]);

  return React__default.createElement(StyledContainer, _extends_1({
    className: className,
    style: _objectSpread$4({}, style, {
      width: size || '30px',
      height: size || '30px'
    })
  }, otherProps), React__default.createElement(StyledHourglass, null));
};

Hourglass.defaultProps = {
  size: '30px',
  className: '',
  style: {}
};
Hourglass.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$i() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  width: ", ";\n  padding: 2px 4px 4px 2px;\n  ", "\n  ", "\n  /* display: ", "; */\n  ", "\n  list-style: none;\n  position: relative;\n\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}

var createListPositionStyles = function createListPositionStyles(_ref) {
  var _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? 'bottom' : _ref$verticalAlign,
      _ref$horizontalAlign = _ref.horizontalAlign,
      horizontalAlign = _ref$horizontalAlign === void 0 ? 'left' : _ref$horizontalAlign;
  return "\n    position: absolute;\n    ".concat(verticalAlign === 'bottom' ? 'bottom: 0;' : 'top: 0;', "\n    ").concat(horizontalAlign === 'left' ? 'left: 0;' : 'right: 0;', "\n\n    transform: translate(0, ").concat(verticalAlign === 'top' ? '-100%' : '100%', ")\n  ");
};

var StyledList = styled__default.ul(_templateObject$i(), function (props) {
  return props.fullWidth ? '100%' : 'auto';
}, createBorderStyles(), createBoxStyles(), function (props) {
  return props.inline ? 'inline-flex' : 'inline-block';
}, function (props) {
  return props.inline && "\n    align-items: center;\n    display: inline-flex;\n  ";
}, function (props) {
  return (props.horizontalAlign || props.verticalAlign) && createListPositionStyles;
});

var List = function List(_ref2) {
  var inline = _ref2.inline,
      shadow = _ref2.shadow,
      className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children,
      fullWidth = _ref2.fullWidth,
      verticalAlign = _ref2.verticalAlign,
      horizontalAlign = _ref2.horizontalAlign,
      otherProps = objectWithoutProperties(_ref2, ["inline", "shadow", "className", "style", "children", "fullWidth", "verticalAlign", "horizontalAlign"]);

  return React__default.createElement(StyledList, _extends_1({
    inline: inline,
    verticalAlign: verticalAlign,
    horizontalAlign: horizontalAlign,
    shadow: shadow,
    fullWidth: fullWidth,
    className: className,
    style: style
  }, otherProps), children);
};

List.defaultProps = {
  style: {},
  fullWidth: false,
  shadow: true,
  inline: false,
  className: '',
  children: null,
  verticalAlign: undefined,
  horizontalAlign: undefined
};
List.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  fullWidth: propTypes.bool,
  inline: propTypes.bool,
  shadow: propTypes.bool,
  children: propTypes.node,
  verticalAlign: propTypes.oneOf(['top', 'bottom']),
  horizontalAlign: propTypes.oneOf(['left', 'right'])
};

function _templateObject$j() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  display: block;\n  position: relative;\n  height: ", ";\n  width: ", ";\n  padding: 0 ", ";\n\n  white-space: nowrap;\n  text-align: ", ";\n  line-height: ", ";\n  color: ", ";\n\n  &:hover {\n    ", "\n\n    cursor: default;\n  }\n  ", "\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var StyledListItem = styled__default.li(_templateObject$j(), function (props) {
  return blockSizes[props.size];
}, function (props) {
  return props.square ? blockSizes[props.size] : 'auto';
}, padding.sm, function (props) {
  return props.square ? 'center' : 'left';
}, function (props) {
  return blockSizes[props.size];
}, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme,
      isDisabled = _ref2.isDisabled;
  return !isDisabled && "\n        color: ".concat(theme.textInvert, ";\n        background: ").concat(theme.hoverBackground, ";\n      ");
}, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});

var ListItem = function ListItem(_ref3) {
  var size = _ref3.size,
      disabled = _ref3.disabled,
      square = _ref3.square,
      className = _ref3.className,
      style = _ref3.style,
      children = _ref3.children,
      onClick = _ref3.onClick,
      otherProps = objectWithoutProperties(_ref3, ["size", "disabled", "square", "className", "style", "children", "onClick"]);

  return React__default.createElement(StyledListItem, _extends_1({
    size: size,
    isDisabled: disabled,
    square: square,
    className: className,
    style: style,
    onClick: disabled ? undefined : onClick
  }, otherProps), children);
};

ListItem.defaultProps = {
  style: {},
  disabled: false,
  size: 'lg',
  square: false,
  onClick: null,
  className: '',
  children: null
};
ListItem.propTypes = {
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  disabled: propTypes.bool,
  square: propTypes.bool,
  children: propTypes.node,
  onClick: propTypes.func
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3$6() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n\n  top: -2px;\n  left: 2px;\n  width: calc(100% - 4px);\n  line-height: ", ";\n\n  color: ", ";\n  background: ", ";\n  clip-path: polygon(\n    0 0,\n    ", "% 0,\n    ", "% 100%,\n    0 100%\n  );\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = taggedTemplateLiteral(["\n  width: calc(100% - 4px);\n  line-height: ", ";\n  background: ", ";\n  color: #000;\n  margin-left: 2px;\n  margin-top: -2px;\n  color: ", ";\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  height: ", ";\n  position: relative;\n  text-align: center;\n  padding: 0;\n  overflow: hidden;\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default(Cutout)(_templateObject$k(), blockSizes.md);
var WhiteBar = styled__default.div(_templateObject2$8(), blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});
var BlueBar = styled__default.div(_templateObject3$6(), blockSizes.md, function (_ref3) {
  var theme = _ref3.theme;
  return theme.textInvert;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.progress;
}, function (_ref5) {
  var percent = _ref5.percent;
  return percent;
}, function (_ref6) {
  var percent = _ref6.percent;
  return percent;
});

var ProgressBar = function ProgressBar(_ref7) {
  var width = _ref7.width,
      percent = _ref7.percent,
      shadow = _ref7.shadow,
      style = _ref7.style;
  return React__default.createElement(Wrapper, {
    style: _objectSpread$5({}, style, {
      width: width
    }),
    shadow: shadow
  }, React__default.createElement(WhiteBar, null, percent, "%"), React__default.createElement(BlueBar, {
    percent: percent
  }, percent, "%"));
};

ProgressBar.defaultProps = {
  width: '100%',
  percent: 0,
  shadow: true,
  style: {}
};
ProgressBar.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  percent: propTypes.number,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  shadow: propTypes.bool
};

function _templateObject4$4() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n  outline: none;\n  background: ", ";\n  &:before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n    border: 2px solid ", ";\n    border-radius: 50%;\n  }\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = taggedTemplateLiteral(["\n\n  ", "\n  background: ", ";\n\n  box-shadow: ", ";\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n    border-radius: 50%;\n    box-shadow: none;\n  }\n\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n\n  position: relative;\n  padding-left: calc(", " + ", ");\n  margin: ", " 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  font-size: ", ";\n  ", "\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var radioSize = '20px';
var StyledLabel$1 = styled__default.label(_templateObject$l(), radioSize, padding.sm, padding.sm, fontSizes.md, function (props) {
  return props.isDisabled && createDisabledTextStyles();
});
var StyledInput$1 = styled__default.input(_templateObject2$9());

var createCheckmarkSymbol$1 = function createCheckmarkSymbol(_ref) {
  var checked = _ref.checked;
  return checked && styled.css(["&:after{position:absolute;content:'';display:inline-block;top:50%;left:50%;width:6px;height:6px;transform:translate(-50%,-50%);border-radius:50%;background:", ";}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.checkmark;
  });
};

var sharedCheckmarkStyles$1 = styled.css(["position:absolute;top:50%;left:0;transform:translateY(-50%);width:", ";height:", ";border-radius:50%;", ""], radioSize, radioSize, function (props) {
  return createCheckmarkSymbol$1(props);
}); // had to overwrite box-shadow for StyledCheckmark since the default made checkbox too dark

var StyledCheckmark$1 = styled__default(Cutout)(_templateObject3$7(), sharedCheckmarkStyles$1, function (_ref3) {
  var theme = _ref3.theme,
      isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
}, function (_ref4) {
  var shadow = _ref4.shadow,
      theme = _ref4.theme;
  return shadow ? theme.insetShadowLight : 'none';
});
var StyledFlatCheckmark$1 = styled__default.div(_templateObject4$4(), createFlatBoxStyles(), sharedCheckmarkStyles$1, function (_ref5) {
  var theme = _ref5.theme,
      isDisabled = _ref5.isDisabled;
  return isDisabled ? theme.flatLight : theme.canvas;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.flatDark;
});

var Radio = function Radio(_ref7) {
  var onChange = _ref7.onChange,
      label = _ref7.label,
      disabled = _ref7.disabled,
      variant = _ref7.variant,
      value = _ref7.value,
      checked = _ref7.checked,
      name = _ref7.name,
      className = _ref7.className,
      style = _ref7.style,
      shadow = _ref7.shadow,
      otherProps = objectWithoutProperties(_ref7, ["onChange", "label", "disabled", "variant", "value", "checked", "name", "className", "style", "shadow"]);

  var Checkmark = variant === 'flat' ? StyledFlatCheckmark$1 : StyledCheckmark$1;
  return React__default.createElement(StyledLabel$1, {
    isDisabled: disabled,
    className: className,
    style: style
  }, label, React__default.createElement(StyledInput$1, _extends_1({
    onChange: disabled ? undefined : onChange,
    readOnly: disabled,
    type: "radio",
    value: value,
    checked: checked,
    name: name
  }, otherProps)), React__default.createElement(Checkmark, {
    checked: checked,
    isDisabled: disabled,
    shadow: shadow
  }));
};

Radio.defaultProps = {
  checked: false,
  label: '',
  disabled: false,
  variant: 'default',
  shadow: true,
  className: '',
  style: {}
};
Radio.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  checked: propTypes.bool,
  disabled: propTypes.bool,
  shadow: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  style: propTypes.shape([propTypes.string, propTypes.number]),
  className: propTypes.string
};

function _templateObject$m() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n  position: relative;\n  height: ", ";\n  line-height: ", ";\n  padding: 0 ", ";\n  border-bottom: none;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  margin-bottom: -2px;\n  cursor: default;\n  color: ", ";\n  ", "\n  &:after {\n    content: '';\n    position: absolute;\n    width: calc(100% - 4px);\n    height: 4px;\n\n    background: ", ";\n    bottom: -2px;\n    left: 2px;\n  }\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTab = styled__default.div(_templateObject$m(), createBoxStyles(), createBorderStyles(), blockSizes.md, blockSizes.md, padding.sm, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (props) {
  return props.active && "\n    z-index: 1;\n    height: calc(".concat(blockSizes.md, " + 4px);\n    top: -4px;\n    margin-bottom: -6px;\n    padding: 0 calc(").concat(padding.sm, " + 8px);\n    margin-left: -8px;\n    margin-right: -8px;\n  ");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.material;
});

var Tab = function Tab(_ref3) {
  var value = _ref3.value,
      _onClick = _ref3.onClick,
      active = _ref3.active,
      children = _ref3.children,
      className = _ref3.className,
      style = _ref3.style,
      otherProps = objectWithoutProperties(_ref3, ["value", "onClick", "active", "children", "className", "style"]);

  return React__default.createElement(StyledTab, _extends_1({
    className: className,
    active: active,
    style: style
  }, otherProps, {
    onClick: function onClick() {
      return _onClick(value);
    }
  }), children);
};

Tab.defaultProps = {
  onClick: function onClick() {},
  active: false,
  children: null,
  className: '',
  style: {}
};
Tab.propTypes = {
  value: propTypes.number.isRequired,
  onClick: propTypes.func,
  active: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$n() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  left: 8px;\n  text-align: left;\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTabs = styled__default.nav(_templateObject$n());

var Tabs = function Tabs(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["value", "onChange", "children", "className", "style"]);

  var childrenWithProps = React__default.Children.map(children, function (child) {
    var tabProps = {
      active: child.props.value === value,
      onClick: onChange
    };
    return React__default.cloneElement(child, tabProps);
  });
  return React__default.createElement(StyledTabs, _extends_1({
    className: className,
    style: style
  }, otherProps), childrenWithProps);
};

Tabs.defaultProps = {
  value: 0,
  onChange: function onChange() {},
  children: null,
  className: '',
  style: {}
};
Tabs.propTypes = {
  value: propTypes.number,
  onChange: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$o() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n  position: relative;\n  display: block;\n  height: 100%;\n  padding: ", ";\n  padding-top: calc(1.5 * ", ");\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTabBody = styled__default.div(_templateObject$o(), createBoxStyles(), createBorderStyles(), padding.md, padding.md);

var TabBody = function TabBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["children", "className", "style"]);

  return React__default.createElement(StyledTabBody, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

TabBody.defaultProps = {
  children: null,
  className: '',
  style: {}
};
TabBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject2$a() {
  var data = taggedTemplateLiteral(["\n  &:before {\n    box-shadow: none;\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = taggedTemplateLiteral(["\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTable = styled__default.table(_templateObject$p());
var StyledCutout$1 = styled__default(Cutout)(_templateObject2$a());

var Table = function Table(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledCutout$1, null, React__default.createElement(StyledTable, _extends_1({
    className: className,
    style: style
  }, otherProps), children));
};

Table.defaultProps = {
  children: null,
  className: '',
  style: {}
};
Table.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$q() {
  var data = taggedTemplateLiteral(["\n  background: ", ";\n  display: table-row-group;\n  box-shadow: ", ";\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTableBody = styled__default.tbody(_templateObject$q(), function (_ref) {
  var theme = _ref.theme;
  return theme.canvas;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.insetShadow;
});

var TableBody = function TableBody(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      style = _ref3.style,
      otherProps = objectWithoutProperties(_ref3, ["className", "children", "style"]);

  return React__default.createElement(StyledTableBody, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

TableBody.defaultProps = {
  children: null,
  className: '',
  style: {}
};
TableBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$r() {
  var data = taggedTemplateLiteral(["\n  padding: 0 ", ";\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTd = styled__default.td(_templateObject$r(), padding.sm);

var TableDataCell = function TableDataCell(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledTd, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

TableDataCell.defaultProps = {
  children: null,
  className: '',
  style: {}
};
TableDataCell.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$s() {
  var data = taggedTemplateLiteral(["\n  display: table-header-group;\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTableHead = styled__default.thead(_templateObject$s());

var TableHead = function TableHead(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      otherProps = objectWithoutProperties(_ref, ["className", "children", "style"]);

  return React__default.createElement(StyledTableHead, _extends_1({
    className: className,
    style: style
  }, otherProps), children);
};

TableHead.defaultProps = {
  children: null,
  className: '',
  style: {}
};
TableHead.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$t() {
  var data = taggedTemplateLiteral(["\n  ", "\n  padding: 0 ", ";\n  display: table-cell;\n  vertical-align: inherit;\n  background: ", ";\n  &:active {\n    ", "\n    border-left: none;\n    border-top: none;\n  }\n  border-left: none;\n  border-top: none;\n  cursor: default;\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}

var StyledHeadCell = styled__default.th(_templateObject$t(), createBorderStyles(), padding.sm, function (_ref) {
  var theme = _ref.theme;
  return theme.material;
}, createBorderStyles(true));

var TableHeadCell = function TableHeadCell(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      style = _ref2.style,
      onClick = _ref2.onClick,
      otherProps = objectWithoutProperties(_ref2, ["className", "children", "style", "onClick"]);

  return React__default.createElement(StyledHeadCell, _extends_1({
    className: className,
    style: style,
    onClick: onClick,
    onTouchStart: function onTouchStart() {
      return '';
    }
  }, otherProps), children);
};

TableHeadCell.defaultProps = {
  onClick: function onClick() {},
  children: null,
  className: '',
  style: {}
};
TableHeadCell.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject$u() {
  var data = taggedTemplateLiteral(["\n  color: inherit;\n  display: table-row;\n  height: calc(", " - 2px);\n  line-height: calc(", " - 2px);\n  vertical-align: middle;\n  outline: none;\n\n  color: ", ";\n  ", "\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTr = styled__default.tr(_templateObject$u(), blockSizes.md, blockSizes.md, function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme,
      head = _ref2.head;
  return !head && "&:hover {\n      background: ".concat(theme.hoverBackground, ";\n      color: ").concat(theme.textInvert, "\n    }");
});

var TableRow = function TableRow(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      style = _ref3.style,
      head = _ref3.head,
      otherProps = objectWithoutProperties(_ref3, ["className", "children", "style", "head"]);

  return React__default.createElement(StyledTr, _extends_1({
    head: head,
    className: className,
    style: style
  }, otherProps), children);
};

TableRow.defaultProps = {
  head: false,
  children: null,
  className: '',
  style: {}
};
TableRow.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  head: propTypes.bool
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3$8() {
  var data = taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: ", ";\n  outline: none;\n  border: none;\n  background: none;\n  resize: none;\n  font-size: ", ";\n  font-family: ", ";\n\n  ", "\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  min-height: ", ";\n  ", "\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  min-height: ", ";\n  padding: 0;\n  background: ", ";\n"]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTextAreaWrapper = styled__default(Cutout)(_templateObject$v(), blockSizes.md, function (_ref) {
  var theme = _ref.theme,
      isDisabled = _ref.isDisabled;
  return isDisabled ? theme.material : theme.canvas;
});
var StyledFlatTextAreaWrapper = styled__default.div(_templateObject2$b(), blockSizes.md, createFlatBoxStyles());
var StyledTextArea = styled__default.textarea(_templateObject3$8(), padding.sm, fontSizes.md, fontFamily, function (_ref2) {
  var disabled = _ref2.disabled,
      variant = _ref2.variant;
  return variant !== 'flat' && disabled && createDisabledTextStyles();
});

var TextArea = function TextArea(_ref3) {
  var onChange = _ref3.onChange,
      disabled = _ref3.disabled,
      variant = _ref3.variant,
      width = _ref3.width,
      height = _ref3.height,
      style = _ref3.style,
      className = _ref3.className,
      shadow = _ref3.shadow,
      otherProps = objectWithoutProperties(_ref3, ["onChange", "disabled", "variant", "width", "height", "style", "className", "shadow"]);

  var Wrapper = variant === 'flat' ? StyledFlatTextAreaWrapper : StyledTextAreaWrapper;
  return React__default.createElement(Wrapper, {
    style: _objectSpread$6({}, style, {
      width: width || '100%',
      height: height || 'auto'
    }),
    className: className,
    isDisabled: disabled,
    shadow: shadow
  }, React__default.createElement(StyledTextArea, _extends_1({
    width: width,
    height: height,
    readOnly: disabled,
    onChange: disabled ? undefined : onChange,
    disabled: disabled,
    variant: variant
  }, otherProps)));
};

TextArea.defaultProps = {
  shadow: true,
  variant: 'default',
  style: {},
  width: null,
  height: null,
  onChange: function onChange() {},
  disabled: false,
  className: ''
};
TextArea.propTypes = {
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  disabled: propTypes.bool,
  variant: propTypes.oneOf(['default', 'flat']),
  className: propTypes.string,
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number])
};

function _templateObject2$c() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$w() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -4px;\n  left: 50%;\n  z-index: 10;\n  transform: translate(-50%, 100%);\n  display: ", ";\n  padding: 4px;\n  border: 1px solid ", ";\n  background: ", ";\n  box-shadow: ", ";\n  text-align: center;\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var Tip = styled__default.span(_templateObject$w(), function (props) {
  return props.show ? 'block' : 'none';
}, function (_ref) {
  var theme = _ref.theme;
  return theme.borderDarkest;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tooltip;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.shadow;
});
var Wrapper$1 = styled__default.div(_templateObject2$c());

var Tooltip = function Tooltip(_ref4) {
  var children = _ref4.children,
      text = _ref4.text,
      delay = _ref4.delay,
      className = _ref4.className,
      style = _ref4.style,
      otherProps = objectWithoutProperties(_ref4, ["children", "text", "delay", "className", "style"]);

  var _useState = React.useState(false),
      _useState2 = slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = slicedToArray(_useState3, 2),
      delayTimer = _useState4[0],
      setDelayTimer = _useState4[1];

  var handleEnter = function handleEnter() {
    var timer = setTimeout(function () {
      setShow(true);
    }, delay);
    setDelayTimer(timer);
  };

  var handleLeave = function handleLeave() {
    clearTimeout(delayTimer);
    setShow(false);
  };

  return React__default.createElement(Wrapper$1, {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave
  }, React__default.createElement(Tip, _extends_1({
    show: show,
    className: className,
    style: style
  }, otherProps), text), children);
};

Tooltip.defaultProps = {
  delay: 1000,
  className: '',
  style: {}
};
Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  delay: propTypes.number
};

/* common */

exports.Anchor = Anchor;
exports.AppBar = AppBar;
exports.Avatar = Avatar;
exports.Bar = Bar;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Cutout = Cutout;
exports.DatePicker = DatePicker;
exports.Divider = Divider;
exports.Fieldset = Fieldset;
exports.Hourglass = Hourglass;
exports.List = List;
exports.ListItem = ListItem;
exports.NumberField = NumberField;
exports.Progress = ProgressBar;
exports.Radio = Radio;
exports.Select = Select;
exports.Tab = Tab;
exports.TabBody = TabBody;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableDataCell = TableDataCell;
exports.TableHead = TableHead;
exports.TableHeadCell = TableHeadCell;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TextArea = TextArea;
exports.TextField = TextField;
exports.Toolbar = Toolbar;
exports.Tooltip = Tooltip;
exports.Window = Window;
exports.WindowContent = WindowContent;
exports.WindowHeader = WindowHeader;
exports.reset = reset;
exports.themes = themes;
