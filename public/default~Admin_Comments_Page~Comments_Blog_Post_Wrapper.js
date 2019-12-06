(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Admin_Comments_Page~Comments_Blog_Post_Wrapper"],{

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
        list.unshift(item);
    }
    else {
        list.splice(index, 1, item);
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


function cacheAddComment(store, _a, item) {
    var type = _a.type, id = _a.id;
    var query = { query: _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1___default.a, variables: { type: type, id: id } };
    var data = store.readQuery(query);
    Object(_common_utils_cache_util__WEBPACK_IMPORTED_MODULE_0__["cacheAddItemToList"])(data.comments, item);
    store.writeQuery(__assign({}, query, { data: data }));
}
function cacheRemoveComment(store, _a, item) {
    var type = _a.type, id = _a.id;
    var query = { query: _queries_CommentsQuery_gql__WEBPACK_IMPORTED_MODULE_1___default.a, variables: { type: type, id: id } };
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


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Comment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"comments_count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"is_updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":357}};
    doc.loc.source = {"body":"#import \"../../../users/_gql/fragments/UserRelationshipFragment.gql\"\n#import \"./CommentRelationshipFragment.gql\"\n\nfragment Comment on Comment {\n  __typename\n  id\n  user_id\n  commentable_type\n  commentable_id\n  comments_count\n  is_updated\n  content\n  user {\n    ...UserRelationship\n  }\n  comments {\n    ...CommentRelationship\n  }\n  created_at\n  updated_at\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Comment"},"directives":[]}]}}]}}],"loc":{"start":0,"end":143}};
    doc.loc.source = {"body":"#import \"../fragments/CommentFragment.gql\"\n\nquery Comments($type: String!, $id: ID!) {\n  comments(type: $type, id: $id) {\n    ...Comment\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvY29tbW9uL3V0aWxzL2NhY2hlLnV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL2NvbW1vbi91dGlscy9kaWFsb2cudXRpbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL2NhY2hlL0NvbW1lbnRzQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvY29tbWVudHMvX2dxbC9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL211dGF0aW9ucy9EZWxldGVDb21tZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL3F1ZXJpZXMvQ29tbWVudHNRdWVyeS5ncWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1AsNkNBQTZDLHlCQUF5QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkMseUJBQXlCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBMkM7QUFDb0I7QUFDL0QsYUFBYSxnRUFBTSxDQUFDLCtFQUFNO0FBQ1gscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ0h0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQ3pDO0FBQ2xEO0FBQ1A7QUFDQSxpQkFBaUIsUUFBUSxpRUFBYSxjQUFjLHFCQUFxQjtBQUN6RTtBQUNBLElBQUksbUZB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aW5fQ29tbWVudHNfUGFnZX5Db21tZW50c19CbG9nX1Bvc3RfV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYWNoZUFkZEl0ZW1Ub0xpc3QobGlzdCwgaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGxpc3QudW5zaGlmdChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxLCBpdGVtKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVSZW1vdmVJdGVtRnJvbUxpc3QobGlzdCwgaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd2dWUtbW9kYWwtZGlhbG9ncyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0RpYWxvZy9EaWFsb2cudnVlJztcbnZhciBkaWFsb2cgPSBjcmVhdGUoRGlhbG9nLCAnbWVzc2FnZScsICdpc0NvbmZpcm0nKTtcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBjYWNoZUFkZEl0ZW1Ub0xpc3QsIGNhY2hlUmVtb3ZlSXRlbUZyb21MaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2NhY2hlLnV0aWwnO1xuaW1wb3J0IENvbW1lbnRzUXVlcnkgZnJvbSAnLi4vcXVlcmllcy9Db21tZW50c1F1ZXJ5LmdxbCc7XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVBZGRDb21tZW50KHN0b3JlLCBfYSwgaXRlbSkge1xuICAgIHZhciB0eXBlID0gX2EudHlwZSwgaWQgPSBfYS5pZDtcbiAgICB2YXIgcXVlcnkgPSB7IHF1ZXJ5OiBDb21tZW50c1F1ZXJ5LCB2YXJpYWJsZXM6IHsgdHlwZTogdHlwZSwgaWQ6IGlkIH0gfTtcbiAgICB2YXIgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeShxdWVyeSk7XG4gICAgY2FjaGVBZGRJdGVtVG9MaXN0KGRhdGEuY29tbWVudHMsIGl0ZW0pO1xuICAgIHN0b3JlLndyaXRlUXVlcnkoX19hc3NpZ24oe30sIHF1ZXJ5LCB7IGRhdGE6IGRhdGEgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlUmVtb3ZlQ29tbWVudChzdG9yZSwgX2EsIGl0ZW0pIHtcbiAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIGlkID0gX2EuaWQ7XG4gICAgdmFyIHF1ZXJ5ID0geyBxdWVyeTogQ29tbWVudHNRdWVyeSwgdmFyaWFibGVzOiB7IHR5cGU6IHR5cGUsIGlkOiBpZCB9IH07XG4gICAgdmFyIGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkocXVlcnkpO1xuICAgIGNhY2hlUmVtb3ZlSXRlbUZyb21MaXN0KGRhdGEuY29tbWVudHMsIGl0ZW0pO1xuICAgIHN0b3JlLndyaXRlUXVlcnkoX19hc3NpZ24oe30sIHF1ZXJ5LCB7IGRhdGE6IGRhdGEgfSkpO1xufVxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX190eXBlbmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyX2lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRhYmxlX3R5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudGFibGVfaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudHNfY291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaXNfdXBkYXRlZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb250ZW50XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVzZXJcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJVc2VyUmVsYXRpb25zaGlwXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb21tZW50c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkNvbW1lbnRSZWxhdGlvbnNoaXBcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRfYXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXBkYXRlZF9hdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjozNTd9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcIiNpbXBvcnQgXFxcIi4uLy4uLy4uL3VzZXJzL19ncWwvZnJhZ21lbnRzL1VzZXJSZWxhdGlvbnNoaXBGcmFnbWVudC5ncWxcXFwiXFxuI2ltcG9ydCBcXFwiLi9Db21tZW50UmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXFxcIlxcblxcbmZyYWdtZW50IENvbW1lbnQgb24gQ29tbWVudCB7XFxuICBfX3R5cGVuYW1lXFxuICBpZFxcbiAgdXNlcl9pZFxcbiAgY29tbWVudGFibGVfdHlwZVxcbiAgY29tbWVudGFibGVfaWRcXG4gIGNvbW1lbnRzX2NvdW50XFxuICBpc191cGRhdGVkXFxuICBjb250ZW50XFxuICB1c2VyIHtcXG4gICAgLi4uVXNlclJlbGF0aW9uc2hpcFxcbiAgfVxcbiAgY29tbWVudHMge1xcbiAgICAuLi5Db21tZW50UmVsYXRpb25zaGlwXFxuICB9XFxuICBjcmVhdGVkX2F0XFxuICB1cGRhdGVkX2F0XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBkb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHVuaXF1ZShyZXF1aXJlKFwiLi4vLi4vLi4vdXNlcnMvX2dxbC9mcmFnbWVudHMvVXNlclJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4vQ29tbWVudFJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcIm11dGF0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkRlbGV0ZUNvbW1lbnRcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSURcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlbGV0ZUNvbW1lbnRcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkNvbW1lbnRcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEyN319O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vZnJhZ21lbnRzL0NvbW1lbnRGcmFnbWVudC5ncWxcXFwiXFxuXFxubXV0YXRpb24gRGVsZXRlQ29tbWVudCgkaWQ6IElEISkge1xcbiAgZGVsZXRlQ29tbWVudChpZDogJGlkKSB7XFxuICAgIC4uLkNvbW1lbnRcXG4gIH1cXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuXG5cbiAgICAvLyBDb2xsZWN0IGFueSBmcmFnbWVudC90eXBlIHJlZmVyZW5jZXMgZnJvbSBhIG5vZGUsIGFkZGluZyB0aGVtIHRvIHRoZSByZWZzIFNldFxuICAgIGZ1bmN0aW9uIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMobm9kZSwgcmVmcykge1xuICAgICAgaWYgKG5vZGUua2luZCA9PT0gXCJGcmFnbWVudFNwcmVhZFwiKSB7XG4gICAgICAgIHJlZnMuYWRkKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUua2luZCA9PT0gXCJWYXJpYWJsZURlZmluaXRpb25cIikge1xuICAgICAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgaWYgKHR5cGUua2luZCA9PT0gXCJOYW1lZFR5cGVcIikge1xuICAgICAgICAgIHJlZnMuYWRkKHR5cGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKHNlbGVjdGlvbiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS52YXJpYWJsZURlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmRlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZpbml0aW9uUmVmcyA9IHt9O1xuICAgIChmdW5jdGlvbiBleHRyYWN0UmVmZXJlbmNlcygpIHtcbiAgICAgIGRvYy5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICBpZiAoZGVmLm5hbWUpIHtcbiAgICAgICAgICB2YXIgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgICAgZGVmaW5pdGlvblJlZnNbZGVmLm5hbWUudmFsdWVdID0gcmVmcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRPcGVyYXRpb24oZG9jLCBuYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvYy5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvYy5kZWZpbml0aW9uc1tpXTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUudmFsdWUgPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lUXVlcnkoZG9jLCBvcGVyYXRpb25OYW1lKSB7XG4gICAgICAvLyBDb3B5IHRoZSBEb2N1bWVudE5vZGUsIGJ1dCBjbGVhciBvdXQgdGhlIGRlZmluaXRpb25zXG4gICAgICB2YXIgbmV3RG9jID0ge1xuICAgICAgICBraW5kOiBkb2Mua2luZCxcbiAgICAgICAgZGVmaW5pdGlvbnM6IFtmaW5kT3BlcmF0aW9uKGRvYywgb3BlcmF0aW9uTmFtZSldXG4gICAgICB9O1xuICAgICAgaWYgKGRvYy5oYXNPd25Qcm9wZXJ0eShcImxvY1wiKSkge1xuICAgICAgICBuZXdEb2MubG9jID0gZG9jLmxvYztcbiAgICAgIH1cblxuICAgICAgLy8gTm93LCBmb3IgdGhlIG9wZXJhdGlvbiB3ZSdyZSBydW5uaW5nLCBmaW5kIGFueSBmcmFnbWVudHMgcmVmZXJlbmNlZCBieVxuICAgICAgLy8gaXQgb3IgdGhlIGZyYWdtZW50cyBpdCByZWZlcmVuY2VzXG4gICAgICB2YXIgb3BSZWZzID0gZGVmaW5pdGlvblJlZnNbb3BlcmF0aW9uTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgdmFyIGFsbFJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IFwibmV3IFNldChpdGVyYWJsZSlcIiwgc28gd2UgYWRkIHRoZSBtZW1iZXJzIG9mIG9wUmVmcyB0byBuZXdSZWZzIG9uZSBieSBvbmVcbiAgICAgIG9wUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgbmV3UmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgd2hpbGUgKG5ld1JlZnMuc2l6ZSA+IDApIHtcbiAgICAgICAgdmFyIHByZXZSZWZzID0gbmV3UmVmcztcbiAgICAgICAgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICBwcmV2UmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgICBpZiAoIWFsbFJlZnMuaGFzKHJlZk5hbWUpKSB7XG4gICAgICAgICAgICBhbGxSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZFJlZnMgPSBkZWZpbml0aW9uUmVmc1tyZWZOYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICBjaGlsZFJlZnMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFJlZikge1xuICAgICAgICAgICAgICBuZXdSZWZzLmFkZChjaGlsZFJlZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGxSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICB2YXIgb3AgPSBmaW5kT3BlcmF0aW9uKGRvYywgcmVmTmFtZSk7XG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIG5ld0RvYy5kZWZpbml0aW9ucy5wdXNoKG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdEb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4gICAgICAgIG1vZHVsZS5leHBvcnRzW1wiRGVsZXRlQ29tbWVudFwiXSA9IG9uZVF1ZXJ5KGRvYywgXCJEZWxldGVDb21tZW50XCIpO1xuICAgICAgICBcbiIsIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb21tZW50c1wifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIklEXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjb21tZW50c1wifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0eXBlXCJ9fX0se1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkNvbW1lbnRcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjE0M319O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vZnJhZ21lbnRzL0NvbW1lbnRGcmFnbWVudC5ncWxcXFwiXFxuXFxucXVlcnkgQ29tbWVudHMoJHR5cGU6IFN0cmluZyEsICRpZDogSUQhKSB7XFxuICBjb21tZW50cyh0eXBlOiAkdHlwZSwgaWQ6ICRpZCkge1xcbiAgICAuLi5Db21tZW50XFxuICB9XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBkb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHVuaXF1ZShyZXF1aXJlKFwiLi4vZnJhZ21lbnRzL0NvbW1lbnRGcmFnbWVudC5ncWxcIikuZGVmaW5pdGlvbnMpKTtcblxuXG4gICAgLy8gQ29sbGVjdCBhbnkgZnJhZ21lbnQvdHlwZSByZWZlcmVuY2VzIGZyb20gYSBub2RlLCBhZGRpbmcgdGhlbSB0byB0aGUgcmVmcyBTZXRcbiAgICBmdW5jdGlvbiBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKG5vZGUsIHJlZnMpIHtcbiAgICAgIGlmIChub2RlLmtpbmQgPT09IFwiRnJhZ21lbnRTcHJlYWRcIikge1xuICAgICAgICByZWZzLmFkZChub2RlLm5hbWUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmtpbmQgPT09IFwiVmFyaWFibGVEZWZpbml0aW9uXCIpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICh0eXBlLmtpbmQgPT09IFwiTmFtZWRUeXBlXCIpIHtcbiAgICAgICAgICByZWZzLmFkZCh0eXBlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICBub2RlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhzZWxlY3Rpb24sIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5kZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmaW5pdGlvblJlZnMgPSB7fTtcbiAgICAoZnVuY3Rpb24gZXh0cmFjdFJlZmVyZW5jZXMoKSB7XG4gICAgICBkb2MuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgaWYgKGRlZi5uYW1lKSB7XG4gICAgICAgICAgdmFyIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICAgIGRlZmluaXRpb25SZWZzW2RlZi5uYW1lLnZhbHVlXSA9IHJlZnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kT3BlcmF0aW9uKGRvYywgbmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2MuZGVmaW5pdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2MuZGVmaW5pdGlvbnNbaV07XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lLnZhbHVlID09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uZVF1ZXJ5KGRvYywgb3BlcmF0aW9uTmFtZSkge1xuICAgICAgLy8gQ29weSB0aGUgRG9jdW1lbnROb2RlLCBidXQgY2xlYXIgb3V0IHRoZSBkZWZpbml0aW9uc1xuICAgICAgdmFyIG5ld0RvYyA9IHtcbiAgICAgICAga2luZDogZG9jLmtpbmQsXG4gICAgICAgIGRlZmluaXRpb25zOiBbZmluZE9wZXJhdGlvbihkb2MsIG9wZXJhdGlvbk5hbWUpXVxuICAgICAgfTtcbiAgICAgIGlmIChkb2MuaGFzT3duUHJvcGVydHkoXCJsb2NcIikpIHtcbiAgICAgICAgbmV3RG9jLmxvYyA9IGRvYy5sb2M7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdywgZm9yIHRoZSBvcGVyYXRpb24gd2UncmUgcnVubmluZywgZmluZCBhbnkgZnJhZ21lbnRzIHJlZmVyZW5jZWQgYnlcbiAgICAgIC8vIGl0IG9yIHRoZSBmcmFnbWVudHMgaXQgcmVmZXJlbmNlc1xuICAgICAgdmFyIG9wUmVmcyA9IGRlZmluaXRpb25SZWZzW29wZXJhdGlvbk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgIHZhciBhbGxSZWZzID0gbmV3IFNldCgpO1xuICAgICAgdmFyIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCBcIm5ldyBTZXQoaXRlcmFibGUpXCIsIHNvIHdlIGFkZCB0aGUgbWVtYmVycyBvZiBvcFJlZnMgdG8gbmV3UmVmcyBvbmUgYnkgb25lXG4gICAgICBvcFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIG5ld1JlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHdoaWxlIChuZXdSZWZzLnNpemUgPiAwKSB7XG4gICAgICAgIHZhciBwcmV2UmVmcyA9IG5ld1JlZnM7XG4gICAgICAgIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgcHJldlJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgICAgaWYgKCFhbGxSZWZzLmhhcyhyZWZOYW1lKSkge1xuICAgICAgICAgICAgYWxsUmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRSZWZzID0gZGVmaW5pdGlvblJlZnNbcmVmTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgY2hpbGRSZWZzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRSZWYpIHtcbiAgICAgICAgICAgICAgbmV3UmVmcy5hZGQoY2hpbGRSZWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWxsUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgdmFyIG9wID0gZmluZE9wZXJhdGlvbihkb2MsIHJlZk5hbWUpO1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBuZXdEb2MuZGVmaW5pdGlvbnMucHVzaChvcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3RG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuICAgICAgICBtb2R1bGUuZXhwb3J0c1tcIkNvbW1lbnRzXCJdID0gb25lUXVlcnkoZG9jLCBcIkNvbW1lbnRzXCIpO1xuICAgICAgICBcbiJdLCJzb3VyY2VSb290IjoiIn0=