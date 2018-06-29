require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_volleyball__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_local__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_session__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_users__ = __webpack_require__(14);









// config body-parseur

//
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.set('trust proxy', 1); // trust first proxy
app.use(__WEBPACK_IMPORTED_MODULE_7_express_session___default()({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
//config multer
const upload = __WEBPACK_IMPORTED_MODULE_6_multer___default()({ dest: './uploads' });
//


const port = 4567;
//config mongo
__WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connect('mongodb://localhost/auth_db');
var db = __WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('[MONGODB][server ok] ===> connected!');
});
//


//view engine setup
app.set("views", __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');
//
app.use(__WEBPACK_IMPORTED_MODULE_4_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_9_connect_flash___default()());
//passport config
app.use(__WEBPACK_IMPORTED_MODULE_3_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_3_passport___default.a.session());
//
app.use('/', __WEBPACK_IMPORTED_MODULE_11__routes_index__["a" /* routes */]);
app.use('/users', __WEBPACK_IMPORTED_MODULE_12__routes_users__["a" /* users */]);
//
app.listen(port, () => {
  console.log(`[App running on port : ${port}]`);
});

const start = "server start";
console.log(`${start}`);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const routes = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get -home page
routes.get('/', (req, res) => {
  res.render("index", { title: "Accueil" });
});



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);

const users = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


const uploads = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ dest: './uploads' });

//
// users.get("/", (req, res) => {
//   res.send("ok")
// })
//
users.get("/register", (req, res) => {
  res.render("register", { title: "Writing History" });
});

users.post('/register', (req, res) => {
  const newUser = new __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */](req.body);
  if (req.file) {
    console.log('uploding img');
    const profileimage = req.file.filename;
  } else {
    console.log('no img uploaded');
    const profileimage = 'noimage.png';
  }
  newUser.save((err, user) => {
    if (err) {
      // res.send(err)
      res.redirect('/');
      // alert("votre requete n'à pas était enregistrer, veuillez ressayer")
      console.log(err, "votre requete n'à pas était enregistrer, veuillez ressayer");
    } else {
      res.redirect('/');
      // res.send(req.body);
      console.log(req.body);
    }
  });
  // req.flash('succcess', 'vous pouvais vous co vous etes dans la BdD')
  //res.redirect('/')
});

users.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

users.get("/", (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */].find({}, (err, users) => {
    if (err) throw error;
    res.render("membre", {
      users,
      title: "Histoires"
    });
  });
});

users.get("/:id", (req, res) => {
  console.log(req.params.id);
  __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* User */].find({ _id: req.params.id }, (err, user) => {
    if (err) throw error;
    console.log(user[0]);
    console.log(user[0].name);
    user = user[0];

    res.render("histoire", {
      user,
      title: user.name
    });
  });
});



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const UserSchema = new Schema({
  email: { type: String },
  username: { type: String, index: true },
  name: { type: String },
  profileimage: { type: String },
  ouvrage: { type: String },
  type: { type: String }

});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);



/***/ })
/******/ ]);
//# sourceMappingURL=main.map