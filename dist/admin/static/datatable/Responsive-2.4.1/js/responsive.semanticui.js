"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! Bootstrap integration for DataTables' Responsive
 * © SpryMedia Ltd - datatables.net/license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables.net-se', 'datatables.net-responsive'], function ($) {
      return factory($, window, document);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    var jq = require('jquery');
    var cjsRequires = function cjsRequires(root, $) {
      if (!$.fn.dataTable) {
        require('datatables.net-se')(root, $);
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
  var _modal = $('<div class="ui modal" role="dialog">' + '<div class="header">' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '</div>' + '<div class="content"/>' + '</div>');
  _display.modal = function (options) {
    return function (row, update, render) {
      if (!$.fn.modal) {
        _original(row, update, render);
      } else {
        if (!update) {
          if (options && options.header) {
            _modal.find('div.header').empty().append('<h4 class="title">' + options.header(row) + '</h4>');
          }
          _modal.find('div.content').empty().append(render());

          // Only need to attach the first time
          if (!_modal.parent().hasClass('dimmer')) {
            _modal.appendTo('body');
          }
          _modal.modal('show');
        }
      }
    };
  };
  return DataTable;
});