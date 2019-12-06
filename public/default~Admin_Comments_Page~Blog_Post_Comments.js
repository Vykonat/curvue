(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Admin_Comments_Page~Blog_Post_Comments"],{

/***/ "./resources/ts/common/utils/cache.util.ts":
/*!*************************************************!*\
  !*** ./resources/ts/common/utils/cache.util.ts ***!
  \*************************************************/
/*! exports provided: cacheAddItemToList, cacheRemoveItemFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheAddItemToList", function() { return cacheAddItemToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRemoveItemFromList", function() { return cacheRemoveItemFromList; });
function cacheAddItemToList(list, item) {
    var index = list.findIndex(function (i) { return i.id === item.id; });
    if (index === -1) {
        list.push(item);
    }
}
function cacheRemoveItemFromList(list, item) {
    var index = list.findIndex(function (i) { return i.id === item.id; });
    if (index !== -1) {
        list.splice(index, 1);
    }
}


/***/ }),

/***/ "./resources/ts/common/utils/dialog.util.ts":
/*!**************************************************!*\
  !*** ./resources/ts/common/utils/dialog.util.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_modal_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-modal-dialogs */ "./node_modules/vue-modal-dialogs/dist/vue-modal-dialogs.esm.js");
/* harmony import */ var _components_organisms_Dialog_Dialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organisms/Dialog/Dialog.vue */ "./resources/ts/common/components/organisms/Dialog/Dialog.vue");


var dialog = Object(vue_modal_dialogs__WEBPACK_IMPORTED_MODULE_0__["create"])(_components_organisms_Dialog_Dialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'message', 'isConfirm');
/* harmony default export */ __webpack_exports__["default"] = (dialog);


/***/ }),

/***/ "./resources/ts/sectors/comments/_gql/cache/CommentsCache.ts":
/*!*******************************************************************!*\
  !*** ./resources/ts/sectors/comments/_gql/cache/CommentsCache.ts ***!
  \*******************************************************************/
/*! exports provided: cacheAddComment, cacheRemoveComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheAddComment", function() { return cacheAddComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRemoveComment", function() { return cacheRemoveComment; });
/* harmony import */ var _common_utils_cache_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/utils/cache.util */ "./resources/ts/common/utils/cache.util.ts");
/* harmony import */ var _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queries/CommentsQuery.gql */ "./resources/ts/sectors/comments/_gql/queries/CommentsQuery.gql");
/* harmony import */ var _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function cacheAddComment(store, item) {
    var query = { query: _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1___default.a };
    var data = store.readQuery(query);
    Object(_common_utils_cache_util__WEBPACK_IMPORTED_MODULE_0__["cacheAddItemToList"])(data.comments, item);
    store.writeQuery(__assign({}, query, { data: data }));
}
function cacheRemoveComment(store, item) {
    var query = { query: _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1___default.a };
    var data = store.readQuery(query);
    Object(_common_utils_cache_util__WEBPACK_IMPORTED_MODULE_0__["cacheRemoveItemFromList"])(data.comments, item);
    store.writeQuery(__assign({}, query, { data: data }));
}


/***/ }),

/***/ "./resources/ts/sectors/comments/_gql/fragments/CommentFragment.gql":
/*!**************************************************************************!*\
  !*** ./resources/ts/sectors/comments/_gql/fragments/CommentFragment.gql ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Comment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":316}};
    doc.loc.source = {"body":"#import \"../../../users/_gql/fragments/UserRelationshipFragment.gql\"\n#import \"./CommentRelationshipFragment.gql\"\n\nfragment Comment on Comment {\n  __typename\n  id\n  commentable_type\n  commentable_id\n  content\n  user {\n    ...UserRelationship\n  }\n  replies {\n    ...CommentRelationship\n  }\n  created_at\n  updated_at\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../../../users/_gql/fragments/UserRelationshipFragment.gql */ "./resources/ts/sectors/users/_gql/fragments/UserRelationshipFragment.gql").definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ./CommentRelationshipFragment.gql */ "./resources/ts/sectors/comments/_gql/fragments/CommentRelationshipFragment.gql").definitions));


      module.exports = doc;
    


/***/ }),

/***/ "./resources/ts/sectors/comments/_gql/mutations/DeleteComment.gql":
/*!************************************************************************!*\
  !*** ./resources/ts/sectors/comments/_gql/mutations/DeleteComment.gql ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Comment"},"directives":[]}]}}]}}],"loc":{"start":0,"end":127}};
    doc.loc.source = {"body":"#import \"../fragments/CommentFragment.gql\"\n\nmutation DeleteComment($id: ID!) {\n  deleteComment(id: $id) {\n    ...Comment\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../fragments/CommentFragment.gql */ "./resources/ts/sectors/comments/_gql/fragments/CommentFragment.gql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["DeleteComment"] = oneQuery(doc, "DeleteComment");
        


/***/ }),

/***/ "./resources/ts/sectors/comments/_gql/queries/CommentsQuery.gql":
/*!**********************************************************************!*\
  !*** ./resources/ts/sectors/comments/_gql/queries/CommentsQuery.gql ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Comment"},"directives":[]}]}}]}}],"loc":{"start":0,"end":95}};
    doc.loc.source = {"body":"#import \"../fragments/CommentFragment.gql\"\n\nquery Comments {\n  comments {\n    ...Comment\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../fragments/CommentFragment.gql */ "./resources/ts/sectors/comments/_gql/fragments/CommentFragment.gql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["Comments"] = oneQuery(doc, "Comments");
        


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvY29tbW9uL3V0aWxzL2NhY2hlLnV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL2NvbW1vbi91dGlscy9kaWFsb2cudXRpbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL2NhY2hlL0NvbW1lbnRzQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvY29tbWVudHMvX2dxbC9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL211dGF0aW9ucy9EZWxldGVDb21tZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL3F1ZXJpZXMvQ29tbWVudHNRdWVyeS5ncWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1AsNkNBQTZDLHlCQUF5QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkMseUJBQXlCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBMkM7QUFDb0I7QUFDL0QsYUFBYSxnRUFBTSxDQUFDLCtFQUFNO0FBQ1gscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ0h0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQ3pDO0FBQ2xEO0FBQ1AsaUJBQWlCLFFBQVEsaUVBQWE7QUFDdEM7QUFDQSxJQUFJLG1GQUFrQjtBQUN0QixnQ0FBZ0MsVUFBVSxhQUFhO0FBQ3ZE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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQkFBTyxDQUFDLDRHQUFrQzs7O0FBRzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJkZWZhdWx0fkFkbWluX0NvbW1lbnRzX1BhZ2V+QmxvZ19Qb3N0X0NvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQWRkSXRlbVRvTGlzdChsaXN0LCBpdGVtKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuaWQgPT09IGl0ZW0uaWQ7IH0pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVJlbW92ZUl0ZW1Gcm9tTGlzdChsaXN0LCBpdGVtKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuaWQgPT09IGl0ZW0uaWQ7IH0pO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3Z1ZS1tb2RhbC1kaWFsb2dzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvRGlhbG9nL0RpYWxvZy52dWUnO1xudmFyIGRpYWxvZyA9IGNyZWF0ZShEaWFsb2csICdtZXNzYWdlJywgJ2lzQ29uZmlybScpO1xuZXhwb3J0IGRlZmF1bHQgZGlhbG9nO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGNhY2hlQWRkSXRlbVRvTGlzdCwgY2FjaGVSZW1vdmVJdGVtRnJvbUxpc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vdXRpbHMvY2FjaGUudXRpbCc7XG5pbXBvcnQgQ29tbWVudHNRdWVyeSBmcm9tICcuLi9xdWVyaWVzL0NvbW1lbnRzUXVlcnkuZ3FsJztcbmV4cG9ydCBmdW5jdGlvbiBjYWNoZUFkZENvbW1lbnQoc3RvcmUsIGl0ZW0pIHtcbiAgICB2YXIgcXVlcnkgPSB7IHF1ZXJ5OiBDb21tZW50c1F1ZXJ5IH07XG4gICAgdmFyIGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkocXVlcnkpO1xuICAgIGNhY2hlQWRkSXRlbVRvTGlzdChkYXRhLmNvbW1lbnRzLCBpdGVtKTtcbiAgICBzdG9yZS53cml0ZVF1ZXJ5KF9fYXNzaWduKHt9LCBxdWVyeSwgeyBkYXRhOiBkYXRhIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVJlbW92ZUNvbW1lbnQoc3RvcmUsIGl0ZW0pIHtcbiAgICB2YXIgcXVlcnkgPSB7IHF1ZXJ5OiBDb21tZW50c1F1ZXJ5IH07XG4gICAgdmFyIGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkocXVlcnkpO1xuICAgIGNhY2hlUmVtb3ZlSXRlbUZyb21MaXN0KGRhdGEuY29tbWVudHMsIGl0ZW0pO1xuICAgIHN0b3JlLndyaXRlUXVlcnkoX19hc3NpZ24oe30sIHF1ZXJ5LCB7IGRhdGE6IGRhdGEgfSkpO1xufVxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX190eXBlbmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb21tZW50YWJsZV90eXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRhYmxlX2lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlVzZXJSZWxhdGlvbnNoaXBcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInJlcGxpZXNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb21tZW50UmVsYXRpb25zaGlwXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkX2F0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRfYXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzE2fX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi8uLi8uLi91c2Vycy9fZ3FsL2ZyYWdtZW50cy9Vc2VyUmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXFxcIlxcbiNpbXBvcnQgXFxcIi4vQ29tbWVudFJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbFxcXCJcXG5cXG5mcmFnbWVudCBDb21tZW50IG9uIENvbW1lbnQge1xcbiAgX190eXBlbmFtZVxcbiAgaWRcXG4gIGNvbW1lbnRhYmxlX3R5cGVcXG4gIGNvbW1lbnRhYmxlX2lkXFxuICBjb250ZW50XFxuICB1c2VyIHtcXG4gICAgLi4uVXNlclJlbGF0aW9uc2hpcFxcbiAgfVxcbiAgcmVwbGllcyB7XFxuICAgIC4uLkNvbW1lbnRSZWxhdGlvbnNoaXBcXG4gIH1cXG4gIGNyZWF0ZWRfYXRcXG4gIHVwZGF0ZWRfYXRcXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi8uLi8uLi91c2Vycy9fZ3FsL2ZyYWdtZW50cy9Vc2VyUmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5kb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHVuaXF1ZShyZXF1aXJlKFwiLi9Db21tZW50UmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwibXV0YXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGVsZXRlQ29tbWVudFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJRFwifX19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVsZXRlQ29tbWVudFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTI3fX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbFxcXCJcXG5cXG5tdXRhdGlvbiBEZWxldGVDb21tZW50KCRpZDogSUQhKSB7XFxuICBkZWxldGVDb21tZW50KGlkOiAkaWQpIHtcXG4gICAgLi4uQ29tbWVudFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uL2ZyYWdtZW50cy9Db21tZW50RnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgIC8vIENvbGxlY3QgYW55IGZyYWdtZW50L3R5cGUgcmVmZXJlbmNlcyBmcm9tIGEgbm9kZSwgYWRkaW5nIHRoZW0gdG8gdGhlIHJlZnMgU2V0XG4gICAgZnVuY3Rpb24gY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhub2RlLCByZWZzKSB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSBcIkZyYWdtZW50U3ByZWFkXCIpIHtcbiAgICAgICAgcmVmcy5hZGQobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSBcIlZhcmlhYmxlRGVmaW5pdGlvblwiKSB7XG4gICAgICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAodHlwZS5raW5kID09PSBcIk5hbWVkVHlwZVwiKSB7XG4gICAgICAgICAgcmVmcy5hZGQodHlwZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoc2VsZWN0aW9uLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmluaXRpb25SZWZzID0ge307XG4gICAgKGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzKCkge1xuICAgICAgZG9jLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgIGlmIChkZWYubmFtZSkge1xuICAgICAgICAgIHZhciByZWZzID0gbmV3IFNldCgpO1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgICBkZWZpbml0aW9uUmVmc1tkZWYubmFtZS52YWx1ZV0gPSByZWZzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZE9wZXJhdGlvbihkb2MsIG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jLmRlZmluaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmRlZmluaXRpb25zW2ldO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZS52YWx1ZSA9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVRdWVyeShkb2MsIG9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIC8vIENvcHkgdGhlIERvY3VtZW50Tm9kZSwgYnV0IGNsZWFyIG91dCB0aGUgZGVmaW5pdGlvbnNcbiAgICAgIHZhciBuZXdEb2MgPSB7XG4gICAgICAgIGtpbmQ6IGRvYy5raW5kLFxuICAgICAgICBkZWZpbml0aW9uczogW2ZpbmRPcGVyYXRpb24oZG9jLCBvcGVyYXRpb25OYW1lKV1cbiAgICAgIH07XG4gICAgICBpZiAoZG9jLmhhc093blByb3BlcnR5KFwibG9jXCIpKSB7XG4gICAgICAgIG5ld0RvYy5sb2MgPSBkb2MubG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3csIGZvciB0aGUgb3BlcmF0aW9uIHdlJ3JlIHJ1bm5pbmcsIGZpbmQgYW55IGZyYWdtZW50cyByZWZlcmVuY2VkIGJ5XG4gICAgICAvLyBpdCBvciB0aGUgZnJhZ21lbnRzIGl0IHJlZmVyZW5jZXNcbiAgICAgIHZhciBvcFJlZnMgPSBkZWZpbml0aW9uUmVmc1tvcGVyYXRpb25OYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICB2YXIgYWxsUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgXCJuZXcgU2V0KGl0ZXJhYmxlKVwiLCBzbyB3ZSBhZGQgdGhlIG1lbWJlcnMgb2Ygb3BSZWZzIHRvIG5ld1JlZnMgb25lIGJ5IG9uZVxuICAgICAgb3BSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICBuZXdSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aGlsZSAobmV3UmVmcy5zaXplID4gMCkge1xuICAgICAgICB2YXIgcHJldlJlZnMgPSBuZXdSZWZzO1xuICAgICAgICBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHByZXZSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICAgIGlmICghYWxsUmVmcy5oYXMocmVmTmFtZSkpIHtcbiAgICAgICAgICAgIGFsbFJlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUmVmcyA9IGRlZmluaXRpb25SZWZzW3JlZk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGNoaWxkUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICAgIG5ld1JlZnMuYWRkKGNoaWxkUmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIHZhciBvcCA9IGZpbmRPcGVyYXRpb24oZG9jLCByZWZOYW1lKTtcbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgbmV3RG9jLmRlZmluaXRpb25zLnB1c2gob3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0RvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbXCJEZWxldGVDb21tZW50XCJdID0gb25lUXVlcnkoZG9jLCBcIkRlbGV0ZUNvbW1lbnRcIik7XG4gICAgICAgIFxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkNvbW1lbnRzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6OTV9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcIiNpbXBvcnQgXFxcIi4uL2ZyYWdtZW50cy9Db21tZW50RnJhZ21lbnQuZ3FsXFxcIlxcblxcbnF1ZXJ5IENvbW1lbnRzIHtcXG4gIGNvbW1lbnRzIHtcXG4gICAgLi4uQ29tbWVudFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uL2ZyYWdtZW50cy9Db21tZW50RnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgIC8vIENvbGxlY3QgYW55IGZyYWdtZW50L3R5cGUgcmVmZXJlbmNlcyBmcm9tIGEgbm9kZSwgYWRkaW5nIHRoZW0gdG8gdGhlIHJlZnMgU2V0XG4gICAgZnVuY3Rpb24gY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhub2RlLCByZWZzKSB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSBcIkZyYWdtZW50U3ByZWFkXCIpIHtcbiAgICAgICAgcmVmcy5hZGQobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSBcIlZhcmlhYmxlRGVmaW5pdGlvblwiKSB7XG4gICAgICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAodHlwZS5raW5kID09PSBcIk5hbWVkVHlwZVwiKSB7XG4gICAgICAgICAgcmVmcy5hZGQodHlwZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoc2VsZWN0aW9uLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmluaXRpb25SZWZzID0ge307XG4gICAgKGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzKCkge1xuICAgICAgZG9jLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgIGlmIChkZWYubmFtZSkge1xuICAgICAgICAgIHZhciByZWZzID0gbmV3IFNldCgpO1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgICBkZWZpbml0aW9uUmVmc1tkZWYubmFtZS52YWx1ZV0gPSByZWZzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZE9wZXJhdGlvbihkb2MsIG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jLmRlZmluaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmRlZmluaXRpb25zW2ldO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZS52YWx1ZSA9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVRdWVyeShkb2MsIG9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIC8vIENvcHkgdGhlIERvY3VtZW50Tm9kZSwgYnV0IGNsZWFyIG91dCB0aGUgZGVmaW5pdGlvbnNcbiAgICAgIHZhciBuZXdEb2MgPSB7XG4gICAgICAgIGtpbmQ6IGRvYy5raW5kLFxuICAgICAgICBkZWZpbml0aW9uczogW2ZpbmRPcGVyYXRpb24oZG9jLCBvcGVyYXRpb25OYW1lKV1cbiAgICAgIH07XG4gICAgICBpZiAoZG9jLmhhc093blByb3BlcnR5KFwibG9jXCIpKSB7XG4gICAgICAgIG5ld0RvYy5sb2MgPSBkb2MubG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3csIGZvciB0aGUgb3BlcmF0aW9uIHdlJ3JlIHJ1bm5pbmcsIGZpbmQgYW55IGZyYWdtZW50cyByZWZlcmVuY2VkIGJ5XG4gICAgICAvLyBpdCBvciB0aGUgZnJhZ21lbnRzIGl0IHJlZmVyZW5jZXNcbiAgICAgIHZhciBvcFJlZnMgPSBkZWZpbml0aW9uUmVmc1tvcGVyYXRpb25OYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICB2YXIgYWxsUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgXCJuZXcgU2V0KGl0ZXJhYmxlKVwiLCBzbyB3ZSBhZGQgdGhlIG1lbWJlcnMgb2Ygb3BSZWZzIHRvIG5ld1JlZnMgb25lIGJ5IG9uZVxuICAgICAgb3BSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICBuZXdSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aGlsZSAobmV3UmVmcy5zaXplID4gMCkge1xuICAgICAgICB2YXIgcHJldlJlZnMgPSBuZXdSZWZzO1xuICAgICAgICBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHByZXZSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICAgIGlmICghYWxsUmVmcy5oYXMocmVmTmFtZSkpIHtcbiAgICAgICAgICAgIGFsbFJlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUmVmcyA9IGRlZmluaXRpb25SZWZzW3JlZk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGNoaWxkUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICAgIG5ld1JlZnMuYWRkKGNoaWxkUmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIHZhciBvcCA9IGZpbmRPcGVyYXRpb24oZG9jLCByZWZOYW1lKTtcbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgbmV3RG9jLmRlZmluaXRpb25zLnB1c2gob3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0RvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbXCJDb21tZW50c1wiXSA9IG9uZVF1ZXJ5KGRvYywgXCJDb21tZW50c1wiKTtcbiAgICAgICAgXG4iXSwic291cmNlUm9vdCI6IiJ9