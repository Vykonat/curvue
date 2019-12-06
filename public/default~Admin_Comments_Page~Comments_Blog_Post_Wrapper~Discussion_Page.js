(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Admin_Comments_Page~Comments_Blog_Post_Wrapper~Discussion_Page"],{

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


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Comment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"comments_count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"has_commented"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"is_updated"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":373}};
    doc.loc.source = {"body":"#import \"../../../users/_gql/fragments/UserRelationshipFragment.gql\"\n#import \"./CommentRelationshipFragment.gql\"\n\nfragment Comment on Comment {\n  __typename\n  id\n  user_id\n  commentable_type\n  commentable_id\n  comments_count\n  has_commented\n  is_updated\n  content\n  user {\n    ...UserRelationship\n  }\n  comments {\n    ...CommentRelationship\n  }\n  created_at\n  updated_at\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvY29tbW9uL3V0aWxzL2NhY2hlLnV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL2NvbW1vbi91dGlscy9kaWFsb2cudXRpbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL2NhY2hlL0NvbW1lbnRzQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvY29tbWVudHMvX2dxbC9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL211dGF0aW9ucy9EZWxldGVDb21tZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9jb21tZW50cy9fZ3FsL3F1ZXJpZXMvQ29tbWVudHNRdWVyeS5ncWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1AsNkNBQTZDLHlCQUF5QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkMseUJBQXlCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBMkM7QUFDb0I7QUFDL0QsYUFBYSxnRUFBTSxDQUFDLCtFQUFNO0FBQ1gscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ0h0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tHO0FBQ3pDO0FBQ2xEO0FBQ1A7QUFDQSxpQkFBaUIsUUFBUSxpRUFBYSxjQUFjLHFCQUFxQjtBQUN6RTtBQUNBLElBQUksbUZB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O0FBRUEiLCJmaWxlIjoiZGVmYXVsdH5BZG1pbl9Db21tZW50c19QYWdlfkNvbW1lbnRzX0Jsb2dfUG9zdF9XcmFwcGVyfkRpc2N1c3Npb25fUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYWNoZUFkZEl0ZW1Ub0xpc3QobGlzdCwgaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGxpc3QudW5zaGlmdChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxLCBpdGVtKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVSZW1vdmVJdGVtRnJvbUxpc3QobGlzdCwgaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd2dWUtbW9kYWwtZGlhbG9ncyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL0RpYWxvZy9EaWFsb2cudnVlJztcbnZhciBkaWFsb2cgPSBjcmVhdGUoRGlhbG9nLCAnbWVzc2FnZScsICdpc0NvbmZpcm0nKTtcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBjYWNoZUFkZEl0ZW1Ub0xpc3QsIGNhY2hlUmVtb3ZlSXRlbUZyb21MaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzL2NhY2hlLnV0aWwnO1xuaW1wb3J0IENvbW1lbnRzUXVlcnkgZnJvbSAnLi4vcXVlcmllcy9Db21tZW50c1F1ZXJ5LmdxbCc7XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVBZGRDb21tZW50KHN0b3JlLCBfYSwgaXRlbSkge1xuICAgIHZhciB0eXBlID0gX2EudHlwZSwgaWQgPSBfYS5pZDtcbiAgICB2YXIgcXVlcnkgPSB7IHF1ZXJ5OiBDb21tZW50c1F1ZXJ5LCB2YXJpYWJsZXM6IHsgdHlwZTogdHlwZSwgaWQ6IGlkIH0gfTtcbiAgICB2YXIgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeShxdWVyeSk7XG4gICAgY2FjaGVBZGRJdGVtVG9MaXN0KGRhdGEuY29tbWVudHMsIGl0ZW0pO1xuICAgIHN0b3JlLndyaXRlUXVlcnkoX19hc3NpZ24oe30sIHF1ZXJ5LCB7IGRhdGE6IGRhdGEgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlUmVtb3ZlQ29tbWVudChzdG9yZSwgX2EsIGl0ZW0pIHtcbiAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIGlkID0gX2EuaWQ7XG4gICAgdmFyIHF1ZXJ5ID0geyBxdWVyeTogQ29tbWVudHNRdWVyeSwgdmFyaWFibGVzOiB7IHR5cGU6IHR5cGUsIGlkOiBpZCB9IH07XG4gICAgdmFyIGRhdGEgPSBzdG9yZS5yZWFkUXVlcnkocXVlcnkpO1xuICAgIGNhY2hlUmVtb3ZlSXRlbUZyb21MaXN0KGRhdGEuY29tbWVudHMsIGl0ZW0pO1xuICAgIHN0b3JlLndyaXRlUXVlcnkoX19hc3NpZ24oe30sIHF1ZXJ5LCB7IGRhdGE6IGRhdGEgfSkpO1xufVxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiX190eXBlbmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyX2lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRhYmxlX3R5cGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudGFibGVfaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudHNfY291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaGFzX2NvbW1lbnRlZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpc191cGRhdGVkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlVzZXJSZWxhdGlvbnNoaXBcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFJlbGF0aW9uc2hpcFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZF9hdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1cGRhdGVkX2F0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjM3M319O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vLi4vLi4vdXNlcnMvX2dxbC9mcmFnbWVudHMvVXNlclJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbFxcXCJcXG4jaW1wb3J0IFxcXCIuL0NvbW1lbnRSZWxhdGlvbnNoaXBGcmFnbWVudC5ncWxcXFwiXFxuXFxuZnJhZ21lbnQgQ29tbWVudCBvbiBDb21tZW50IHtcXG4gIF9fdHlwZW5hbWVcXG4gIGlkXFxuICB1c2VyX2lkXFxuICBjb21tZW50YWJsZV90eXBlXFxuICBjb21tZW50YWJsZV9pZFxcbiAgY29tbWVudHNfY291bnRcXG4gIGhhc19jb21tZW50ZWRcXG4gIGlzX3VwZGF0ZWRcXG4gIGNvbnRlbnRcXG4gIHVzZXIge1xcbiAgICAuLi5Vc2VyUmVsYXRpb25zaGlwXFxuICB9XFxuICBjb21tZW50cyB7XFxuICAgIC4uLkNvbW1lbnRSZWxhdGlvbnNoaXBcXG4gIH1cXG4gIGNyZWF0ZWRfYXRcXG4gIHVwZGF0ZWRfYXRcXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi8uLi8uLi91c2Vycy9fZ3FsL2ZyYWdtZW50cy9Vc2VyUmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5kb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHVuaXF1ZShyZXF1aXJlKFwiLi9Db21tZW50UmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwibXV0YXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRGVsZXRlQ29tbWVudFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJRFwifX19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVsZXRlQ29tbWVudFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTI3fX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbFxcXCJcXG5cXG5tdXRhdGlvbiBEZWxldGVDb21tZW50KCRpZDogSUQhKSB7XFxuICBkZWxldGVDb21tZW50KGlkOiAkaWQpIHtcXG4gICAgLi4uQ29tbWVudFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uL2ZyYWdtZW50cy9Db21tZW50RnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgIC8vIENvbGxlY3QgYW55IGZyYWdtZW50L3R5cGUgcmVmZXJlbmNlcyBmcm9tIGEgbm9kZSwgYWRkaW5nIHRoZW0gdG8gdGhlIHJlZnMgU2V0XG4gICAgZnVuY3Rpb24gY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhub2RlLCByZWZzKSB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSBcIkZyYWdtZW50U3ByZWFkXCIpIHtcbiAgICAgICAgcmVmcy5hZGQobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSBcIlZhcmlhYmxlRGVmaW5pdGlvblwiKSB7XG4gICAgICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAodHlwZS5raW5kID09PSBcIk5hbWVkVHlwZVwiKSB7XG4gICAgICAgICAgcmVmcy5hZGQodHlwZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoc2VsZWN0aW9uLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmluaXRpb25SZWZzID0ge307XG4gICAgKGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzKCkge1xuICAgICAgZG9jLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgIGlmIChkZWYubmFtZSkge1xuICAgICAgICAgIHZhciByZWZzID0gbmV3IFNldCgpO1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgICBkZWZpbml0aW9uUmVmc1tkZWYubmFtZS52YWx1ZV0gPSByZWZzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZE9wZXJhdGlvbihkb2MsIG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jLmRlZmluaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmRlZmluaXRpb25zW2ldO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZS52YWx1ZSA9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVRdWVyeShkb2MsIG9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIC8vIENvcHkgdGhlIERvY3VtZW50Tm9kZSwgYnV0IGNsZWFyIG91dCB0aGUgZGVmaW5pdGlvbnNcbiAgICAgIHZhciBuZXdEb2MgPSB7XG4gICAgICAgIGtpbmQ6IGRvYy5raW5kLFxuICAgICAgICBkZWZpbml0aW9uczogW2ZpbmRPcGVyYXRpb24oZG9jLCBvcGVyYXRpb25OYW1lKV1cbiAgICAgIH07XG4gICAgICBpZiAoZG9jLmhhc093blByb3BlcnR5KFwibG9jXCIpKSB7XG4gICAgICAgIG5ld0RvYy5sb2MgPSBkb2MubG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3csIGZvciB0aGUgb3BlcmF0aW9uIHdlJ3JlIHJ1bm5pbmcsIGZpbmQgYW55IGZyYWdtZW50cyByZWZlcmVuY2VkIGJ5XG4gICAgICAvLyBpdCBvciB0aGUgZnJhZ21lbnRzIGl0IHJlZmVyZW5jZXNcbiAgICAgIHZhciBvcFJlZnMgPSBkZWZpbml0aW9uUmVmc1tvcGVyYXRpb25OYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICB2YXIgYWxsUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgXCJuZXcgU2V0KGl0ZXJhYmxlKVwiLCBzbyB3ZSBhZGQgdGhlIG1lbWJlcnMgb2Ygb3BSZWZzIHRvIG5ld1JlZnMgb25lIGJ5IG9uZVxuICAgICAgb3BSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICBuZXdSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aGlsZSAobmV3UmVmcy5zaXplID4gMCkge1xuICAgICAgICB2YXIgcHJldlJlZnMgPSBuZXdSZWZzO1xuICAgICAgICBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHByZXZSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICAgIGlmICghYWxsUmVmcy5oYXMocmVmTmFtZSkpIHtcbiAgICAgICAgICAgIGFsbFJlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUmVmcyA9IGRlZmluaXRpb25SZWZzW3JlZk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGNoaWxkUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICAgIG5ld1JlZnMuYWRkKGNoaWxkUmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIHZhciBvcCA9IGZpbmRPcGVyYXRpb24oZG9jLCByZWZOYW1lKTtcbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgbmV3RG9jLmRlZmluaXRpb25zLnB1c2gob3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0RvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbXCJEZWxldGVDb21tZW50XCJdID0gb25lUXVlcnkoZG9jLCBcIkRlbGV0ZUNvbW1lbnRcIik7XG4gICAgICAgIFxuIiwiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkNvbW1lbnRzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidHlwZVwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fX0sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTm9uTnVsbFR5cGVcIixcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSURcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbW1lbnRzXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInR5cGVcIn19fSx7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQ29tbWVudFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTQzfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbFxcXCJcXG5cXG5xdWVyeSBDb21tZW50cygkdHlwZTogU3RyaW5nISwgJGlkOiBJRCEpIHtcXG4gIGNvbW1lbnRzKHR5cGU6ICR0eXBlLCBpZDogJGlkKSB7XFxuICAgIC4uLkNvbW1lbnRcXG4gIH1cXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi9mcmFnbWVudHMvQ29tbWVudEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuXG5cbiAgICAvLyBDb2xsZWN0IGFueSBmcmFnbWVudC90eXBlIHJlZmVyZW5jZXMgZnJvbSBhIG5vZGUsIGFkZGluZyB0aGVtIHRvIHRoZSByZWZzIFNldFxuICAgIGZ1bmN0aW9uIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMobm9kZSwgcmVmcykge1xuICAgICAgaWYgKG5vZGUua2luZCA9PT0gXCJGcmFnbWVudFNwcmVhZFwiKSB7XG4gICAgICAgIHJlZnMuYWRkKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUua2luZCA9PT0gXCJWYXJpYWJsZURlZmluaXRpb25cIikge1xuICAgICAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgaWYgKHR5cGUua2luZCA9PT0gXCJOYW1lZFR5cGVcIikge1xuICAgICAgICAgIHJlZnMuYWRkKHR5cGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKHNlbGVjdGlvbiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS52YXJpYWJsZURlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmRlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZpbml0aW9uUmVmcyA9IHt9O1xuICAgIChmdW5jdGlvbiBleHRyYWN0UmVmZXJlbmNlcygpIHtcbiAgICAgIGRvYy5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICBpZiAoZGVmLm5hbWUpIHtcbiAgICAgICAgICB2YXIgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgICAgZGVmaW5pdGlvblJlZnNbZGVmLm5hbWUudmFsdWVdID0gcmVmcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRPcGVyYXRpb24oZG9jLCBuYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvYy5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvYy5kZWZpbml0aW9uc1tpXTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUudmFsdWUgPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lUXVlcnkoZG9jLCBvcGVyYXRpb25OYW1lKSB7XG4gICAgICAvLyBDb3B5IHRoZSBEb2N1bWVudE5vZGUsIGJ1dCBjbGVhciBvdXQgdGhlIGRlZmluaXRpb25zXG4gICAgICB2YXIgbmV3RG9jID0ge1xuICAgICAgICBraW5kOiBkb2Mua2luZCxcbiAgICAgICAgZGVmaW5pdGlvbnM6IFtmaW5kT3BlcmF0aW9uKGRvYywgb3BlcmF0aW9uTmFtZSldXG4gICAgICB9O1xuICAgICAgaWYgKGRvYy5oYXNPd25Qcm9wZXJ0eShcImxvY1wiKSkge1xuICAgICAgICBuZXdEb2MubG9jID0gZG9jLmxvYztcbiAgICAgIH1cblxuICAgICAgLy8gTm93LCBmb3IgdGhlIG9wZXJhdGlvbiB3ZSdyZSBydW5uaW5nLCBmaW5kIGFueSBmcmFnbWVudHMgcmVmZXJlbmNlZCBieVxuICAgICAgLy8gaXQgb3IgdGhlIGZyYWdtZW50cyBpdCByZWZlcmVuY2VzXG4gICAgICB2YXIgb3BSZWZzID0gZGVmaW5pdGlvblJlZnNbb3BlcmF0aW9uTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgdmFyIGFsbFJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IFwibmV3IFNldChpdGVyYWJsZSlcIiwgc28gd2UgYWRkIHRoZSBtZW1iZXJzIG9mIG9wUmVmcyB0byBuZXdSZWZzIG9uZSBieSBvbmVcbiAgICAgIG9wUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgbmV3UmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgd2hpbGUgKG5ld1JlZnMuc2l6ZSA+IDApIHtcbiAgICAgICAgdmFyIHByZXZSZWZzID0gbmV3UmVmcztcbiAgICAgICAgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICBwcmV2UmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgICBpZiAoIWFsbFJlZnMuaGFzKHJlZk5hbWUpKSB7XG4gICAgICAgICAgICBhbGxSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZFJlZnMgPSBkZWZpbml0aW9uUmVmc1tyZWZOYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICBjaGlsZFJlZnMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFJlZikge1xuICAgICAgICAgICAgICBuZXdSZWZzLmFkZChjaGlsZFJlZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGxSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICB2YXIgb3AgPSBmaW5kT3BlcmF0aW9uKGRvYywgcmVmTmFtZSk7XG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIG5ld0RvYy5kZWZpbml0aW9ucy5wdXNoKG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdEb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4gICAgICAgIG1vZHVsZS5leHBvcnRzW1wiQ29tbWVudHNcIl0gPSBvbmVRdWVyeShkb2MsIFwiQ29tbWVudHNcIik7XG4gICAgICAgIFxuIl0sInNvdXJjZVJvb3QiOiIifQ==