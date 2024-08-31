(this["webpackJsonplms-portal"] = this["webpackJsonplms-portal"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\App.js";



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: SITE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_URL", function() { return SITE_URL; });
const SITE_URL = 'https://127.0.0.1/moucasa';

/***/ }),

/***/ "./src/Theme.js":
/*!**********************!*\
  !*** ./src/Theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");

const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({
  palette: {
    // primary: {
    //   main: '#90323D',
    // },
    // secondary: {
    //   main: '#A9CBB7',
    // },
    // background: {
    //   default: '#EFECCA',
    // },
    // warning: {
    //   main: '#303633',
    // },
    primary: {
      main: '#ffffff '
    },
    secondary: {
      main: '#ffffff'
    },
    background: {
      default: '#ffffff'
    },
    warning: {
      main: '#ffffff'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/auth/auth0-provider-with-history.js":
/*!*************************************************!*\
  !*** ./src/auth/auth0-provider-with-history.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _auth0_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth0-config */ "./src/auth0-config.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\auth\\auth0-provider-with-history.js";

// import { useNavigate } from 'react-router-dom';


const Auth0ProviderWithHistory = ({
  children
}) => {
  const domain = _auth0_config__WEBPACK_IMPORTED_MODULE_2__["auth0ConfigforLogin"].domain;
  const clientId = _auth0_config__WEBPACK_IMPORTED_MODULE_2__["auth0ConfigforLogin"].clientId;

  // const navigate = useNavigate();

  // const onRedirectCallback = (appState) => {
  //     navigate(appState?.returnTo || window.location.origin + '/moucasa/home');
  // };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__["Auth0Provider"], {
    domain: domain,
    clientId: clientId,
    redirectUri: _auth0_config__WEBPACK_IMPORTED_MODULE_2__["auth0ConfigforLogin"].redirectUri
    // onRedirectCallback={onRedirectCallback}
    ,
    cacheLocation: "localstorage" // This will store tokens in localStorage
    ,
    useRefreshTokens: true // Optional: Use refresh tokens to keep the session alive
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Auth0ProviderWithHistory);

/***/ }),

/***/ "./src/auth0-config.js":
/*!*****************************!*\
  !*** ./src/auth0-config.js ***!
  \*****************************/
/*! exports provided: auth0ConfigforLogin, auth0ConfigforSignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth0ConfigforLogin", function() { return auth0ConfigforLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth0ConfigforSignUp", function() { return auth0ConfigforSignUp; });
const auth0ConfigforLogin = {
  domain: "dev-r68c567whjkd1mbi.us.auth0.com",
  clientId: "SJrbL8AVe6NJgY9C8pCl1dfddeJwGBqu",
  clientSecret: "tVQJsAp41BUU4AAmF3biphURBc9xnjXjErCWEINmnHrPTr9FBA6gFtMZltsUwb-x",
  redirectUri: "https://127.0.0.1/moucasa/home",
  cacheLocation: "localstorage"
};
const auth0ConfigforSignUp = {
  domain: "dev-r68c567whjkd1mbi.us.auth0.com",
  clientId: "ccx75StLbKg8Og8SzEvsvjM1h4WCtetG",
  clientSecret: "2D2jdddCCSKFFSbyemJAOKlnW33D7H81VtGkqeSBnoswp0SngkETNNFNuHc7LiEI",
  redirectUri: "https://127.0.0.1/moucasa/home",
  cacheLocation: "localstorage"
};

/***/ }),

/***/ "./src/commonfunctions/CreateUser.js":
/*!*******************************************!*\
  !*** ./src/commonfunctions/CreateUser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

const createUser = async props => {
  console.log('Form data ===== ' + JSON.stringify(props));
  const userCreateURL = `${_Constants__WEBPACK_IMPORTED_MODULE_0__["SITE_URL"]}/wp-json/an/auth0/createnewuser`;
  const userResponse = await fetch(userCreateURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(props)
  });
  if (!userResponse.ok) {
    console.error('Failed to create user:', userResponse.statusText);
    return null;
  }
  try {
    const userData = await userResponse.json();
    // console.log('Access Token Data:', tokenData);

    if (userData) {
      return userData;
    } else {
      console.error('User Data not found in response');
      return null;
    }
  } catch (error) {
    console.error('Error parsing token response:', error);
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createUser);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _inc_weather_info_Weatherinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inc/weather-info/Weatherinfo */ "./src/inc/weather-info/Weatherinfo.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\components\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "static",
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    color: "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "\xA9 2024 My Website. All rights reserved.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inc_weather_info_Weatherinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\components\\Header.js";

















const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useNavigate"])();
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout
  } = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__["useAuth0"])();
  const [logoURL, setLogoURL] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [anchorElUser, setAnchorElUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchSiteLogo();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [isAuthenticated, user]);
  const fetchSiteLogo = () => {
    fetch(`${_Constants__WEBPACK_IMPORTED_MODULE_15__["SITE_URL"]}/wp-json/an/images/sitelogo`).then(response => response.json()).then(resdata => {
      setLogoURL(resdata.data);
    }).catch(error => {
      console.error('Error fetching sitelogo:', error);
    });
  };
  const handleLogout = () => {
    logout({
      returnTo: window.location.origin
    });
    localStorage.removeItem('user');
  };
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 12
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    maxWidth: "xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex',
      mr: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logoURL,
    alt: "Logo",
    style: {
      height: '40px',
      cursor: 'pointer'
    },
    onClick: () => navigate('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      display: 'flex',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
      mr: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Moucasa LMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
    direction: "row",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: () => navigate('/'),
    variant: "outlined",
    className: "primaryButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: () => navigate('/contact'),
    variant: "outlined",
    className: "primaryButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      flexGrow: 0,
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, isAuthenticated || storedUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Open settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: e => setAnchorElUser(e.currentTarget),
    sx: {
      p: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    alt: storedUser ? storedUser.name : user.name,
    src: storedUser ? storedUser.picture : user.picture,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1",
    color: "inherit",
    sx: {
      ml: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, storedUser ? storedUser.email : user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      mt: '45px'
    },
    id: "menu-appbar",
    anchorEl: anchorElUser,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: Boolean(anchorElUser),
    onClose: () => setAnchorElUser(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, settings.map(setting => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: setting,
    onClick: setting === 'Logout' ? handleLogout : () => setAnchorElUser(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    textAlign: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, setting))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: () => loginWithRedirect(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Login")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Homepage */ "./src/pages/Homepage.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Contact */ "./src/pages/Contact.js");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Theme */ "./src/Theme.js");
/* harmony import */ var _pages_onboard_SignIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/onboard/SignIn */ "./src/pages/onboard/SignIn.js");
/* harmony import */ var _pages_onboard_SignUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/onboard/SignUp */ "./src/pages/onboard/SignUp.js");
/* harmony import */ var _pages_onboard_ForgotPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/onboard/ForgotPassword */ "./src/pages/onboard/ForgotPassword.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\components\\Layout.js";








// import Callback from '../pages/onboard/Callback';





const Layout = () => {
  const {
    isAuthenticated,
    isLoading
  } = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__["useAuth0"])();
  const [isauth, setisauth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAuthenticated) {
      setisauth(isAuthenticated);
    } else {
      setisauth(localStorage.getItem('user'));
    }
  }, [isAuthenticated]);
  console.log("isAuth ==== " + isAuthenticated);
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _Theme__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 27
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "mainContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/",
    element: isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 54
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Navigate"], {
      to: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 69
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/home",
    element: isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 58
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Navigate"], {
      to: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 73
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/contact",
    element: isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 61
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Navigate"], {
      to: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 75
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/signin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_onboard_SignIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/signup",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_onboard_SignUp__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "/forgot-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_onboard_ForgotPassword__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 51
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
    path: "*",
    element: isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 54
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Navigate"], {
      to: "/signup",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 69
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }))), isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 27
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\components\\Loading.js";


const Loading = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '200%',
      height: '200%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      // Optional: Add a semi-transparent background
      zIndex: 9999 // Ensure it's on top of other content
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://127.0.0.1/moucasa/wp-content/uploads/2024/08/Loader-unscreen.gif",
    alt: "Loading...",
    style: {
      width: '150px',
      height: '150px'
    } // Adjust size as needed
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/inc/weather-info/Weatherinfo.js":
/*!*********************************************!*\
  !*** ./src/inc/weather-info/Weatherinfo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ "./src/Constants.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\inc\\weather-info\\Weatherinfo.js";

 // Import SITE_URL directly
 // Import Grid directly

const Weather = () => {
  const [weatherData, setWeatherData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const storedWeatherData = localStorage.getItem('weatherData');
    const storedTimestamp = localStorage.getItem('weatherTimestamp');
    if (storedWeatherData && storedTimestamp) {
      const currentTime = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

      if (currentTime - storedTimestamp < oneDay) {
        setWeatherData(JSON.parse(storedWeatherData));
        return;
      }
    }
    fetchWeatherData();
  }, []);
  const fetchWeatherData = () => {
    fetch(`${_Constants__WEBPACK_IMPORTED_MODULE_1__["SITE_URL"]}/wp-json/an/general/getweather?lat=17.445049&lon=78.448502`).then(response => response.json()).then(data => {
      setWeatherData(data);
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('weatherTimestamp', new Date().getTime());
    }).catch(error => {
      console.error('Error fetching weather data:', error);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "weather-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, weatherData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, weatherData.data.weather && weatherData.data.weather[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}.png`,
    alt: "Weather Icon",
    className: "weather-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, weatherData.data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, weatherData.data.main.temp, "\xB0C")));
};
/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _auth_auth0_provider_with_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth0-provider-with-history */ "./src/auth/auth0-provider-with-history.js");
/* harmony import */ var _style_syle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/syle.css */ "./src/style/syle.css");
/* harmony import */ var _style_syle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_syle_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\index.js";






const container = document.getElementById('root');
const root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_1__["createRoot"])(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "/moucasa",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_auth0_provider_with_history__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}))));

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\Contact.js";


const Contact = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Contact Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "This is the contact page."));
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/Homepage.js":
/*!*******************************!*\
  !*** ./src/pages/Homepage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts */ "./src/pages/Posts.js");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\Homepage.js";





const Homepage = () => {
  const {
    isAuthenticated,
    isLoading,
    handleRedirectCallback
  } = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__["useAuth0"])();
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useNavigate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleAuth = async () => {
      if (isLoading) return; // Wait until loading is done

      if (!isAuthenticated) {
        if (window.location.search.includes('code=') || window.location.search.includes('error=')) {
          // Handle the Auth0 callback
          try {
            await handleRedirectCallback();
          } catch (err) {
            console.error("Error during Auth0 callback:", err);
            navigate('/signup');
          }
        } else {
          // Redirect to Auth0 login if not authenticated
          navigate('/signup');
        }
      } else {
        // Redirect to the home page if already authenticated
        navigate('/home');
      }
    };
    handleAuth();
  }, [isAuthenticated, isLoading, handleRedirectCallback, navigate]);
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 12
      }
    }, "Loading...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Posts__WEBPACK_IMPORTED_MODULE_2__["Posts"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/pages/Posts.js":
/*!****************************!*\
  !*** ./src/pages/Posts.js ***!
  \****************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ "./src/Constants.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\Posts.js";




const Posts = () => {
  const [posts, setPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [currentPage, setCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const postsPerPage = 10; // Adjust as needed

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`${_Constants__WEBPACK_IMPORTED_MODULE_2__["SITE_URL"]}/wp-json/an/posts/all/courses?page=${currentPage}`).then(response => response.json()).then(data => {
      setPosts(data.data);
      console.log(data);
    }).catch(error => console.error('Error fetching posts:', error));
  }, [currentPage]);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(posts); // Log posts whenever it changes
  }, [posts]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "All Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    justifyContent: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, posts.map(course => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    key: course.ID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    variant: "outlined",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, course.post_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, "Published on: ", moment__WEBPACK_IMPORTED_MODULE_3___default()(course.post_date).format('MMMM Do, YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    component: "p",
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, course.post_excerpt || 'No excerpt available.'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    href: course.guid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, "See More"))))))));
};

/***/ }),

/***/ "./src/pages/onboard/ForgotPassword.js":
/*!*********************************************!*\
  !*** ./src/pages/onboard/ForgotPassword.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ "./node_modules/@mui/icons-material/LockOutlined.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\onboard\\ForgotPassword.js";















function Copyright(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    href: "https://mui.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Moucasa LMS"), ' ', new Date().getFullYear(), '.');
}
const defaultTheme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["createTheme"])();
const ForgotPassword = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  const handleSignUpClick = () => {
    navigate('/signup'); // Updated to use navigate
  };
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["ThemeProvider"], {
    theme: defaultTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    maxWidth: "xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      m: 1,
      bgcolor: 'secondary.main'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "h1",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: "remember",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 38
      }
    }),
    label: "Remember me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      mb: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "#",
    variant: "body2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "Forgot password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "#",
    variant: "body2",
    onClick: handleSignUpClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "Don't have an account? Sign Up"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Copyright, {
    sx: {
      mt: 8,
      mb: 4
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

/***/ }),

/***/ "./src/pages/onboard/SignIn.js":
/*!*************************************!*\
  !*** ./src/pages/onboard/SignIn.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ "./node_modules/@mui/icons-material/LockOutlined.js");
/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\onboard\\SignIn.js";















function Copyright(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    href: "https://127.0.0.1/moucasa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Moucasa LMS"), ' ', new Date().getFullYear(), '.');
}
const defaultTheme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__["createTheme"])();
const SignIn = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useNavigate"])();
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Navigate to dashboard or handle success
      navigate('/dashboard');
    } catch (error) {
      setError('Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_styles__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
    theme: defaultTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "main",
    maxWidth: "xs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      m: 1,
      bgcolor: 'secondary.main'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 35
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: "remember",
      color: "primary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 38
      }
    }),
    label: "Remember me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      mb: 2
    },
    disabled: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, loading ? 'Signing In...' : 'Sign In'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    onClick: handleForgotPasswordClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, "Forgot password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    onClick: handleSignUpClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Don't have an account? Sign Up"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Copyright, {
    sx: {
      mt: 8,
      mb: 4
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/pages/onboard/SignUp.js":
/*!*************************************!*\
  !*** ./src/pages/onboard/SignUp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "./node_modules/@auth0/auth0-react/dist/auth0-react.esm.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Snackbar */ "./node_modules/@mui/material/Snackbar/index.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Constants */ "./src/Constants.js");
/* harmony import */ var _commonfunctions_CreateUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonfunctions/CreateUser */ "./src/commonfunctions/CreateUser.js");
var _jsxFileName = "C:\\xampp\\htdocs\\moucasa\\wp-content\\themes\\lms-portal\\react-src\\src\\pages\\onboard\\SignUp.js";


// import { useNavigate } from 'react-router-dom';














const Copyright = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
  variant: "body2",
  color: "text.secondary",
  align: "center"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
  color: "inherit",
  href: "https://yourwebsite.com/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, "Moucasa LMS"), ' ', new Date().getFullYear(), '.');
const SignUp = () => {
  const defaultTheme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["createTheme"])();
  const [logoURL, setLogoURL] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [snackbarOpen, setSnackbarOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [snackbarMessage, setSnackbarMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [snackbarSeverity, setSnackbarSeverity] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('success');
  const {
    loginWithRedirect
  } = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__["useAuth0"])();
  // const navigate = useNavigate();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchSiteLogo();
  }, []);
  const fetchSiteLogo = () => {
    const cachedLogoURL = localStorage.getItem('siteLogoURL');
    if (cachedLogoURL) {
      setLogoURL(cachedLogoURL);
      return;
    }
    fetch(`${_Constants__WEBPACK_IMPORTED_MODULE_14__["SITE_URL"]}/wp-json/an/images/sitelogo`).then(response => response.json()).then(resdata => {
      setLogoURL(resdata.data);
      localStorage.setItem('siteLogoURL', resdata.data);
    }).catch(error => console.error('Error fetching sitelogo:', error));
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value
    };

    // Basic validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (formData.password.length < 6) {
      setSnackbarMessage('Password must be at least 6 characters long.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    try {
      const response = await Object(_commonfunctions_CreateUser__WEBPACK_IMPORTED_MODULE_15__["default"])(formData);
      console.log('User creation response:', response);
      if (response.message) {
        setSnackbarMessage('You have registered successfully! Redirecting to sign in...');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setTimeout(() => {
          setSnackbarOpen(false);
          // navigate('/signin');
        }, 3000);
      }
    } catch (error) {
      setSnackbarMessage('Error creating user.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      console.error('Error creating user:', error);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
    theme: defaultTheme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "main",
    maxWidth: "xs",
    className: "containerSignup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      m: 1,
      bgcolor: 'rgba(0, 0, 0, 0)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logoURL,
    alt: "Logo",
    style: {
      width: '100%',
      height: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, "Register your Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "form",
    noValidate: true,
    onSubmit: handleSubmit,
    sx: {
      mt: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    autoComplete: "given-name",
    name: "firstName",
    required: true,
    fullWidth: true,
    id: "firstName",
    label: "First Name",
    autoFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    required: true,
    fullWidth: true,
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    autoComplete: "family-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "new-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 3,
      mb: 2
    },
    className: "primaryButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    justifyContent: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    onClick: () => loginWithRedirect(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }, "Already have an account? Sign in"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, {
    sx: {
      mt: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    open: snackbarOpen,
    autoHideDuration: 6000,
    onClose: handleCloseSnackbar,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClose: handleCloseSnackbar,
    severity: snackbarSeverity,
    sx: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, snackbarMessage))));
};
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./src/style/syle.css":
/*!****************************!*\
  !*** ./src/style/syle.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\moucasa\wp-content\themes\lms-portal\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map