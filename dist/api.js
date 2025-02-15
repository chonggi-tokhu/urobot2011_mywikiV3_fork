"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _site = require("./site");
var _password = require("./password");
var _pages = require("./pages");
var _router = require("./router");
var _log = require("./log");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var router = new _router.Router();
var pageUrls = (0, _pages.getPageUrlsAwait)();
router.receive(pageUrls.api_signin, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, _req$body2, username, password, memberNumber, userInfo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (req.session.isLogined) {
            _context.next = 30;
            break;
          }
          if (!((username = (_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.username) && (password = (_req$body2 = req.body) === null || _req$body2 === void 0 ? void 0 : _req$body2.password))) {
            _context.next = 27;
            break;
          }
          _context.t0 = _site.getUserInfo;
          _context.next = 5;
          return (0, _site.getMemberNumber)(username);
        case 5:
          _context.t1 = memberNumber = _context.sent;
          _context.next = 8;
          return (0, _context.t0)(_context.t1);
        case 8:
          if (!(userInfo = _context.sent)) {
            _context.next = 24;
            break;
          }
          _context.next = 11;
          return (0, _password.password_hash_check)(password, userInfo.hash);
        case 11:
          _context.t2 = _context.sent;
          _context.t3 = userInfo.password;
          if (!(_context.t2 == _context.t3)) {
            _context.next = 21;
            break;
          }
          req.session.username = username;
          req.session.userInfo = userInfo;
          req.session.isLogined = true;
          if (userInfo.isadmin) (0, _log.log)("Administrator logged in, ".concat(username, ": ").concat(req.ip, "."), 'log');
          res.msgRedirect('/', {
            type: 'success',
            msg: '성공적으로 로그인되었습니다!'
          });
          _context.next = 22;
          break;
        case 21:
          res.errMsgRedirect(pageUrls.signin, "아이디나 비밀번호가 틀렸습니다.");
        case 22:
          _context.next = 25;
          break;
        case 24:
          res.errMsgRedirect(pageUrls.signin, "아이디나 비밀번호가 틀렸습니다.");
        case 25:
          _context.next = 28;
          break;
        case 27:
          res.errMsgRedirect(pageUrls.signin, "정상적인 방식으로 로그인 해주세요.");
        case 28:
          _context.next = 31;
          break;
        case 30:
          res.errMsgRedirect('/', "이미 로그인되어 있습니다.");
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.receive(pageUrls.api_signup, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body3, _req$body4, username, password, userInfo;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (req.session.isLogined) {
            _context2.next = 32;
            break;
          }
          if (!((username = (_req$body3 = req.body) === null || _req$body3 === void 0 ? void 0 : _req$body3.username) && (password = (_req$body4 = req.body) === null || _req$body4 === void 0 ? void 0 : _req$body4.password))) {
            _context2.next = 29;
            break;
          }
          _context2.t0 = _site.getUserInfo;
          _context2.next = 5;
          return (0, _site.getMemberNumber)(username);
        case 5:
          _context2.t1 = _context2.sent;
          _context2.next = 8;
          return (0, _context2.t0)(_context2.t1);
        case 8:
          if (_context2.sent) {
            _context2.next = 26;
            break;
          }
          if (!(password != '')) {
            _context2.next = 23;
            break;
          }
          if (!(username != '' && !username.includes(' ') && !username.includes('"') && !username.includes("'") && !username.includes("/"))) {
            _context2.next = 20;
            break;
          }
          _context2.next = 13;
          return (0, _site.addMember)(username, password, 1, false);
        case 13:
          userInfo = _context2.sent;
          req.session.username = username;
          req.session.userInfo = userInfo;
          req.session.isLogined = true;
          res.msgRedirect('/', {
            type: 'success',
            msg: '성공적으로 가입되었습니다!'
          });
          _context2.next = 21;
          break;
        case 20:
          res.errMsgRedirect(pageUrls.signup, "사용자 아이디는 ``이거나(아무 글자도 없음) ` `(빈칸) 또는 `\"`(큰 따옴표), `'`(작은 따옴표), '/'(슬러시)가 포함될 수 없습니다.");
        case 21:
          _context2.next = 24;
          break;
        case 23:
          res.errMsgRedirect(pageUrls.signup, "비밀번호에서는 ''는 허용되지 않습니다.");
        case 24:
          _context2.next = 27;
          break;
        case 26:
          res.errMsgRedirect(pageUrls.signup, "존재하는 아이디입니다.");
        case 27:
          _context2.next = 30;
          break;
        case 29:
          res.errMsgRedirect(pageUrls.signup, "정상적인 방식으로 가입 해주세요.");
        case 30:
          _context2.next = 33;
          break;
        case 32:
          res.errMsgRedirect('/', "이미 로그인되어 있습니다.");
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.receive(pageUrls.signout, function (req, res) {
  res.redirect(pageUrls.api_signout);
});
router.receive(pageUrls.api_signout, function (req, res) {
  if (req.session.isLogined) {
    req.session.isLogined = false;
    delete req.session.ip;
    delete req.session.username;
    delete req.session.userInfo;
    //req.session.destroy((err) => {
    res.msgRedirect('/', {
      type: 'success',
      msg: '성공적으로 로그아웃되었습니다. Bye~'
    });
    //});
  } else {
    res.msgRedirect('/', {
      type: 'danger',
      msg: '로그인되어 있지 않습니다.'
    });
  }
});
router.receive(pageUrls.settings, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body5, _req$body6, username, password, userInfo;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!req.session.isLogined) {
            _context3.next = 35;
            break;
          }
          if (!((username = (_req$body5 = req.body) === null || _req$body5 === void 0 ? void 0 : _req$body5.username) && (password = (_req$body6 = req.body) === null || _req$body6 === void 0 ? void 0 : _req$body6.password) || password === '')) {
            _context3.next = 32;
            break;
          }
          _context3.t1 = _site.getUserInfo;
          _context3.next = 5;
          return (0, _site.getMemberNumber)(username);
        case 5:
          _context3.t2 = _context3.sent;
          _context3.next = 8;
          return (0, _context3.t1)(_context3.t2);
        case 8:
          _context3.t0 = !_context3.sent;
          if (_context3.t0) {
            _context3.next = 11;
            break;
          }
          _context3.t0 = username == req.session.username;
        case 11:
          if (!_context3.t0) {
            _context3.next = 29;
            break;
          }
          if (!(username != '' && !username.includes(' ') && !username.includes('"') && !username.includes("'"))) {
            _context3.next = 26;
            break;
          }
          _context3.next = 15;
          return (0, _site.changeMemberData)(req.session.userInfo, {
            password: password != '' ? password : null
          });
        case 15:
          userInfo = _context3.sent;
          _context3.next = 18;
          return (0, _site.setUserInfo)(req.session.userInfo.member_number, userInfo);
        case 18:
          _context3.next = 20;
          return (0, _site.changeUserName)(req.session.username, username);
        case 20:
          req.session.username = username;
          req.session.userInfo = userInfo;
          req.session.isLogined = true;
          res.msgRedirect(pageUrls.settings, {
            type: 'success',
            msg: '성공적으로 회원 정보가 수정되었습니다!'
          });
          _context3.next = 27;
          break;
        case 26:
          res.errMsgRedirect(pageUrls.settings, "사용자 아이디는 ``이거나(아무 글자도 없음) ` `(빈칸) 또는 `\"`, `'`가 포함될 수 없습니다.");
        case 27:
          _context3.next = 30;
          break;
        case 29:
          res.errMsgRedirect(pageUrls.settings, "존재하는 아이디입니다.");
        case 30:
          _context3.next = 33;
          break;
        case 32:
          res.errMsgRedirect(pageUrls.settings, "정상적인 방식으로 설정 해주세요.");
        case 33:
          _context3.next = 36;
          break;
        case 35:
          res.msgRedirect('/', {
            type: 'danger',
            msg: '로그인되어 있지 않습니다.'
          });
        case 36:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;