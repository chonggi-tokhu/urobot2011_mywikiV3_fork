"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! jQuery UI integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables.net-jqui', 'datatables.net-responsive'], function ($) {
      return factory($, window, document);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    var jq = require('jquery');
    var cjsRequires = function cjsRequires(root, $) {
      if (!$.fn.dataTable) {
        require('datatables.net-jqui')(root, $);
      }
      if (!$.fn.dataTable.Responsive) {
        require('datatables.net-responsive')(root, $);
      }
    };
    if (typeof window !== 'undefined') {
      module.exports = function (root, $) {
        if (!root) {
          // CommonJS environments without a window global must pass a
          // root. This will give an error otherwise
          root = window;
        }
        if (!$) {
          $ = jq(root);
        }
        cjsRequires(root, $);
        return factory($, root, root.document);
      };
    } else {
      cjsRequires(window, jq);
      module.exports = factory(jq, window, window.document);
    }
  } else {
    // Browser
    factory(jQuery, window, document);
  }
})(function ($, window, document, undefined) {
  'use strict';

  var DataTable = $.fn.dataTable;
  var _display = DataTable.Responsive.display;
  var _original = _display.modal;
  _display.modal = function (options) {
    return function (row, update, render) {
      if (!$.fn.dialog) {
        _original(row, update, render);
      } else {
        if (!update) {
          $('<div/>').append(render()).appendTo('body').dialog($.extend(true, {
            title: options && options.header ? options.header(row) : '',
            width: 500
          }, options.dialog));
        }
      }
    };
  };
  return DataTable;
});