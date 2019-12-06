(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Blog_Post_Subscription_listeners"],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _gql_cache_BlogPostsCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_gql/cache/BlogPostsCache */ "./resources/ts/sectors/blogposts/_gql/cache/BlogPostsCache.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BlogPostSubscriptions = /** @class */ (function (_super) {
    __extends(BlogPostSubscriptions, _super);
    function BlogPostSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlogPostSubscriptions.prototype.onBlogPostAdded = function (previousResult, _a) {
        var subscriptionData = _a.subscriptionData;
        var newResult = {
            allBlogPosts: previousResult.allBlogPosts.slice()
        };
        Object(_gql_cache_BlogPostsCache__WEBPACK_IMPORTED_MODULE_1__["cacheAddBlogPost"])(newResult.allBlogPosts, subscriptionData.data.BlogPostAdded);
        return newResult;
    };
    BlogPostSubscriptions.prototype.onBlogPostRemoved = function (previousResult, _a) {
        var subscriptionData = _a.subscriptionData;
        var newResult = {
            allBlogPosts: previousResult.allBlogPosts.slice()
        };
        Object(_gql_cache_BlogPostsCache__WEBPACK_IMPORTED_MODULE_1__["cacheRemoveBlogPost"])(newResult.allBlogPosts, subscriptionData.data.BlogPostRemoved);
        return newResult;
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({ required: true })
    ], BlogPostSubscriptions.prototype, "slug", void 0);
    BlogPostSubscriptions = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], BlogPostSubscriptions);
    return BlogPostSubscriptions;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (BlogPostSubscriptions);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bpsw" },
    [
      _c("apollo-subscribe-to-more", {
        attrs: {
          document: __webpack_require__(/*! ../../_gql/subscriptions/BlogPostAdded.gql */ "./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostAdded.gql"),
          variables: { slug: _vm.slug },
          updateQuery: _vm.onBlogPostAdded
        }
      }),
      _c("apollo-subscribe-to-more", {
        attrs: {
          document: __webpack_require__(/*! ../../_gql/subscriptions/BlogPostRemoved.gql */ "./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostRemoved.gql"),
          variables: { slug: _vm.slug },
          updateQuery: _vm.onBlogPostRemoved
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug& */ "./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug&");
/* harmony import */ var _BlogPostSubscriptions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPostSubscriptions.vue?vue&type=script&lang=ts& */ "./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogPostSubscriptions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostSubscriptions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--5!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostSubscriptions.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostSubscriptions_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/pug-plain-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/ts/sectors/blogposts/_components/BlogPostSubscriptions/BlogPostSubscriptions.vue?vue&type=template&id=4bed5172&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostSubscriptions_vue_vue_type_template_id_4bed5172_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/ts/sectors/blogposts/_gql/cache/BlogPostsCache.ts":
/*!*********************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/cache/BlogPostsCache.ts ***!
  \*********************************************************************/
/*! exports provided: cacheAddBlogPostToList, cacheRemoveBlogPostFromList, cacheAddBlogPost, cacheRemoveBlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheAddBlogPostToList", function() { return cacheAddBlogPostToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRemoveBlogPostFromList", function() { return cacheRemoveBlogPostFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheAddBlogPost", function() { return cacheAddBlogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRemoveBlogPost", function() { return cacheRemoveBlogPost; });
/* harmony import */ var _queries_BlogPostsQuery_gql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../queries/BlogPostsQuery.gql */ "./resources/ts/sectors/blogposts/_gql/queries/BlogPostsQuery.gql");
/* harmony import */ var _queries_BlogPostsQuery_gql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_queries_BlogPostsQuery_gql__WEBPACK_IMPORTED_MODULE_0__);
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

function cacheAddBlogPostToList(list, item) {
    var index = list.findIndex(function (i) { return i.id === item.id; });
    if (index !== -1) {
        list.push(item);
    }
}
function cacheRemoveBlogPostFromList(list, item) {
    var index = list.findIndex(function (i) { return i.id === item.id; });
    if (index !== -1) {
        list.splice(index, 1);
    }
}
function cacheAddBlogPost(store, item) {
    var query = { query: _queries_BlogPostsQuery_gql__WEBPACK_IMPORTED_MODULE_0___default.a };
    var data = store.readQuery(query);
    cacheAddBlogPostToList(data.blogPosts, item);
    store.writeQuery(__assign({}, query, { data: data }));
}
function cacheRemoveBlogPost(store, item) {
    var query = { query: _queries_BlogPostsQuery_gql__WEBPACK_IMPORTED_MODULE_0___default.a };
    var data = store.readQuery(query);
    cacheRemoveBlogPostFromList(data.BlogPosts, item);
    store.writeQuery(__assign({}, query, { data: data }));
}


/***/ }),

/***/ "./resources/ts/sectors/blogposts/_gql/queries/BlogPostsQuery.gql":
/*!************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/queries/BlogPostsQuery.gql ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allBlogPosts"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allBlogPosts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"},"directives":[]}]}}]}}],"loc":{"start":0,"end":105}};
    doc.loc.source = {"body":"#import \"../fragments/BlogPostFragment.gql\"\n\nquery allBlogPosts {\n  allBlogPosts {\n    ...BlogPost\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../fragments/BlogPostFragment.gql */ "./resources/ts/sectors/blogposts/_gql/fragments/BlogPostFragment.gql").definitions));


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
    
        module.exports["allBlogPosts"] = oneQuery(doc, "allBlogPosts");
        


/***/ }),

/***/ "./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostAdded.gql":
/*!*****************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostAdded.gql ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"BlogPostAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlogPostAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"},"directives":[]}]}}]}}],"loc":{"start":0,"end":143}};
    doc.loc.source = {"body":"#import \"../fragments/BlogPostFragment.gql\"\n\nsubscription BlogPostAdded($slug: String!) {\n  BlogPostAdded(slug: $slug) {\n    ...BlogPost\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../fragments/BlogPostFragment.gql */ "./resources/ts/sectors/blogposts/_gql/fragments/BlogPostFragment.gql").definitions));


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
    
        module.exports["BlogPostAdded"] = oneQuery(doc, "BlogPostAdded");
        


/***/ }),

/***/ "./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostRemoved.gql":
/*!*******************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/subscriptions/BlogPostRemoved.gql ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"BlogPostRemoved"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlogPostAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"},"directives":[]}]}}]}}],"loc":{"start":0,"end":145}};
    doc.loc.source = {"body":"#import \"../fragments/BlogPostFragment.gql\"\n\nsubscription BlogPostRemoved($slug: String!) {\n  BlogPostAdded(slug: $slug) {\n    ...BlogPost\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../fragments/BlogPostFragment.gql */ "./resources/ts/sectors/blogposts/_gql/fragments/BlogPostFragment.gql").definitions));


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
    
        module.exports["BlogPostRemoved"] = oneQuery(doc, "BlogPostRemoved");
        


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9ibG9ncG9zdHMvX2NvbXBvbmVudHMvQmxvZ1Bvc3RTdWJzY3JpcHRpb25zL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy52dWU/MDZmOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9ibG9ncG9zdHMvX2NvbXBvbmVudHMvQmxvZ1Bvc3RTdWJzY3JpcHRpb25zL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy52dWU/YzNmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9ibG9ncG9zdHMvX2NvbXBvbmVudHMvQmxvZ1Bvc3RTdWJzY3JpcHRpb25zL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19jb21wb25lbnRzL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy9CbG9nUG9zdFN1YnNjcmlwdGlvbnMudnVlPzYyMmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19jb21wb25lbnRzL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy9CbG9nUG9zdFN1YnNjcmlwdGlvbnMudnVlPzE3ZTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19ncWwvY2FjaGUvQmxvZ1Bvc3RzQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19ncWwvcXVlcmllcy9CbG9nUG9zdHNRdWVyeS5ncWwiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19ncWwvc3Vic2NyaXB0aW9ucy9CbG9nUG9zdEFkZGVkLmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9ibG9ncG9zdHMvX2dxbC9zdWJzY3JpcHRpb25zL0Jsb2dQb3N0UmVtb3ZlZC5ncWwiXSwibmFt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QUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJCbG9nX1Bvc3RfU3Vic2NyaXB0aW9uX2xpc3RlbmVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUsIFByb3AgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IGNhY2hlQWRkQmxvZ1Bvc3QsIGNhY2hlUmVtb3ZlQmxvZ1Bvc3QgfSBmcm9tICcuLi8uLi9fZ3FsL2NhY2hlL0Jsb2dQb3N0c0NhY2hlJztcbnZhciBCbG9nUG9zdFN1YnNjcmlwdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJsb2dQb3N0U3Vic2NyaXB0aW9ucywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCbG9nUG9zdFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnByb3RvdHlwZS5vbkJsb2dQb3N0QWRkZWQgPSBmdW5jdGlvbiAocHJldmlvdXNSZXN1bHQsIF9hKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25EYXRhID0gX2Euc3Vic2NyaXB0aW9uRGF0YTtcbiAgICAgICAgdmFyIG5ld1Jlc3VsdCA9IHtcbiAgICAgICAgICAgIGFsbEJsb2dQb3N0czogcHJldmlvdXNSZXN1bHQuYWxsQmxvZ1Bvc3RzLnNsaWNlKClcbiAgICAgICAgfTtcbiAgICAgICAgY2FjaGVBZGRCbG9nUG9zdChuZXdSZXN1bHQuYWxsQmxvZ1Bvc3RzLCBzdWJzY3JpcHRpb25EYXRhLmRhdGEuQmxvZ1Bvc3RBZGRlZCk7XG4gICAgICAgIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgfTtcbiAgICBCbG9nUG9zdFN1YnNjcmlwdGlvbnMucHJvdG90eXBlLm9uQmxvZ1Bvc3RSZW1vdmVkID0gZnVuY3Rpb24gKHByZXZpb3VzUmVzdWx0LCBfYSkge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uRGF0YSA9IF9hLnN1YnNjcmlwdGlvbkRhdGE7XG4gICAgICAgIHZhciBuZXdSZXN1bHQgPSB7XG4gICAgICAgICAgICBhbGxCbG9nUG9zdHM6IHByZXZpb3VzUmVzdWx0LmFsbEJsb2dQb3N0cy5zbGljZSgpXG4gICAgICAgIH07XG4gICAgICAgIGNhY2hlUmVtb3ZlQmxvZ1Bvc3QobmV3UmVzdWx0LmFsbEJsb2dQb3N0cywgc3Vic2NyaXB0aW9uRGF0YS5kYXRhLkJsb2dQb3N0UmVtb3ZlZCk7XG4gICAgICAgIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgUHJvcCh7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgXSwgQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnByb3RvdHlwZSwgXCJzbHVnXCIsIHZvaWQgMCk7XG4gICAgQmxvZ1Bvc3RTdWJzY3JpcHRpb25zID0gX19kZWNvcmF0ZShbXG4gICAgICAgIENvbXBvbmVudFxuICAgIF0sIEJsb2dQb3N0U3Vic2NyaXB0aW9ucyk7XG4gICAgcmV0dXJuIEJsb2dQb3N0U3Vic2NyaXB0aW9ucztcbn0oVnVlKSk7XG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdFN1YnNjcmlwdGlvbnM7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJicHN3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImFwb2xsby1zdWJzY3JpYmUtdG8tbW9yZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZG9jdW1lbnQ6IHJlcXVpcmUoXCIuLi8uLi9fZ3FsL3N1YnNjcmlwdGlvbnMvQmxvZ1Bvc3RBZGRlZC5ncWxcIiksXG4gICAgICAgICAgdmFyaWFibGVzOiB7IHNsdWc6IF92bS5zbHVnIH0sXG4gICAgICAgICAgdXBkYXRlUXVlcnk6IF92bS5vbkJsb2dQb3N0QWRkZWRcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfYyhcImFwb2xsby1zdWJzY3JpYmUtdG8tbW9yZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZG9jdW1lbnQ6IHJlcXVpcmUoXCIuLi8uLi9fZ3FsL3N1YnNjcmlwdGlvbnMvQmxvZ1Bvc3RSZW1vdmVkLmdxbFwiKSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgc2x1ZzogX3ZtLnNsdWcgfSxcbiAgICAgICAgICB1cGRhdGVRdWVyeTogX3ZtLm9uQmxvZ1Bvc3RSZW1vdmVkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJlZDUxNzImbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Nydi9odHRwL2N1cnZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YmVkNTE3MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YmVkNTE3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YmVkNTE3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmVkNTE3MiZsYW5nPXB1ZyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YmVkNTE3MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19jb21wb25lbnRzL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy9CbG9nUG9zdFN1YnNjcmlwdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CbG9nUG9zdFN1YnNjcmlwdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jsb2dQb3N0U3Vic2NyaXB0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcGxhaW4tbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmxvZ1Bvc3RTdWJzY3JpcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmVkNTE3MiZsYW5nPXB1ZyZcIiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgQmxvZ1Bvc3RzUXVlcnkgZnJvbSAnLi4vcXVlcmllcy9CbG9nUG9zdHNRdWVyeS5ncWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQWRkQmxvZ1Bvc3RUb0xpc3QobGlzdCwgaXRlbSkge1xuICAgIHZhciBpbmRleCA9IGxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkID09PSBpdGVtLmlkOyB9KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FjaGVSZW1vdmVCbG9nUG9zdEZyb21MaXN0KGxpc3QsIGl0ZW0pIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZCA9PT0gaXRlbS5pZDsgfSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlQWRkQmxvZ1Bvc3Qoc3RvcmUsIGl0ZW0pIHtcbiAgICB2YXIgcXVlcnkgPSB7IHF1ZXJ5OiBCbG9nUG9zdHNRdWVyeSB9O1xuICAgIHZhciBkYXRhID0gc3RvcmUucmVhZFF1ZXJ5KHF1ZXJ5KTtcbiAgICBjYWNoZUFkZEJsb2dQb3N0VG9MaXN0KGRhdGEuYmxvZ1Bvc3RzLCBpdGVtKTtcbiAgICBzdG9yZS53cml0ZVF1ZXJ5KF9fYXNzaWduKHt9LCBxdWVyeSwgeyBkYXRhOiBkYXRhIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWNoZVJlbW92ZUJsb2dQb3N0KHN0b3JlLCBpdGVtKSB7XG4gICAgdmFyIHF1ZXJ5ID0geyBxdWVyeTogQmxvZ1Bvc3RzUXVlcnkgfTtcbiAgICB2YXIgZGF0YSA9IHN0b3JlLnJlYWRRdWVyeShxdWVyeSk7XG4gICAgY2FjaGVSZW1vdmVCbG9nUG9zdEZyb21MaXN0KGRhdGEuQmxvZ1Bvc3RzLCBpdGVtKTtcbiAgICBzdG9yZS53cml0ZVF1ZXJ5KF9fYXNzaWduKHt9LCBxdWVyeSwgeyBkYXRhOiBkYXRhIH0pKTtcbn1cbiIsIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhbGxCbG9nUG9zdHNcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWxsQmxvZ1Bvc3RzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQmxvZ1Bvc3RcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEwNX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vZnJhZ21lbnRzL0Jsb2dQb3N0RnJhZ21lbnQuZ3FsXFxcIlxcblxcbnF1ZXJ5IGFsbEJsb2dQb3N0cyB7XFxuICBhbGxCbG9nUG9zdHMge1xcbiAgICAuLi5CbG9nUG9zdFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uL2ZyYWdtZW50cy9CbG9nUG9zdEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuXG5cbiAgICAvLyBDb2xsZWN0IGFueSBmcmFnbWVudC90eXBlIHJlZmVyZW5jZXMgZnJvbSBhIG5vZGUsIGFkZGluZyB0aGVtIHRvIHRoZSByZWZzIFNldFxuICAgIGZ1bmN0aW9uIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMobm9kZSwgcmVmcykge1xuICAgICAgaWYgKG5vZGUua2luZCA9PT0gXCJGcmFnbWVudFNwcmVhZFwiKSB7XG4gICAgICAgIHJlZnMuYWRkKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUua2luZCA9PT0gXCJWYXJpYWJsZURlZmluaXRpb25cIikge1xuICAgICAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgaWYgKHR5cGUua2luZCA9PT0gXCJOYW1lZFR5cGVcIikge1xuICAgICAgICAgIHJlZnMuYWRkKHR5cGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKHNlbGVjdGlvbiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS52YXJpYWJsZURlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmRlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZpbml0aW9uUmVmcyA9IHt9O1xuICAgIChmdW5jdGlvbiBleHRyYWN0UmVmZXJlbmNlcygpIHtcbiAgICAgIGRvYy5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICBpZiAoZGVmLm5hbWUpIHtcbiAgICAgICAgICB2YXIgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgICAgZGVmaW5pdGlvblJlZnNbZGVmLm5hbWUudmFsdWVdID0gcmVmcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRPcGVyYXRpb24oZG9jLCBuYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvYy5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvYy5kZWZpbml0aW9uc1tpXTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUudmFsdWUgPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lUXVlcnkoZG9jLCBvcGVyYXRpb25OYW1lKSB7XG4gICAgICAvLyBDb3B5IHRoZSBEb2N1bWVudE5vZGUsIGJ1dCBjbGVhciBvdXQgdGhlIGRlZmluaXRpb25zXG4gICAgICB2YXIgbmV3RG9jID0ge1xuICAgICAgICBraW5kOiBkb2Mua2luZCxcbiAgICAgICAgZGVmaW5pdGlvbnM6IFtmaW5kT3BlcmF0aW9uKGRvYywgb3BlcmF0aW9uTmFtZSldXG4gICAgICB9O1xuICAgICAgaWYgKGRvYy5oYXNPd25Qcm9wZXJ0eShcImxvY1wiKSkge1xuICAgICAgICBuZXdEb2MubG9jID0gZG9jLmxvYztcbiAgICAgIH1cblxuICAgICAgLy8gTm93LCBmb3IgdGhlIG9wZXJhdGlvbiB3ZSdyZSBydW5uaW5nLCBmaW5kIGFueSBmcmFnbWVudHMgcmVmZXJlbmNlZCBieVxuICAgICAgLy8gaXQgb3IgdGhlIGZyYWdtZW50cyBpdCByZWZlcmVuY2VzXG4gICAgICB2YXIgb3BSZWZzID0gZGVmaW5pdGlvblJlZnNbb3BlcmF0aW9uTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgdmFyIGFsbFJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IFwibmV3IFNldChpdGVyYWJsZSlcIiwgc28gd2UgYWRkIHRoZSBtZW1iZXJzIG9mIG9wUmVmcyB0byBuZXdSZWZzIG9uZSBieSBvbmVcbiAgICAgIG9wUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgbmV3UmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgd2hpbGUgKG5ld1JlZnMuc2l6ZSA+IDApIHtcbiAgICAgICAgdmFyIHByZXZSZWZzID0gbmV3UmVmcztcbiAgICAgICAgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICBwcmV2UmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgICBpZiAoIWFsbFJlZnMuaGFzKHJlZk5hbWUpKSB7XG4gICAgICAgICAgICBhbGxSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZFJlZnMgPSBkZWZpbml0aW9uUmVmc1tyZWZOYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICBjaGlsZFJlZnMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFJlZikge1xuICAgICAgICAgICAgICBuZXdSZWZzLmFkZChjaGlsZFJlZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGxSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICB2YXIgb3AgPSBmaW5kT3BlcmF0aW9uKGRvYywgcmVmTmFtZSk7XG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIG5ld0RvYy5kZWZpbml0aW9ucy5wdXNoKG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdEb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4gICAgICAgIG1vZHVsZS5leHBvcnRzW1wiYWxsQmxvZ1Bvc3RzXCJdID0gb25lUXVlcnkoZG9jLCBcImFsbEJsb2dQb3N0c1wiKTtcbiAgICAgICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwic3Vic2NyaXB0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0QWRkZWRcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzbHVnXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOb25OdWxsVHlwZVwiLFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19fSxcImRpcmVjdGl2ZXNcIjpbXX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0QWRkZWRcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2x1Z1wifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2x1Z1wifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJCbG9nUG9zdFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTQzfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi9mcmFnbWVudHMvQmxvZ1Bvc3RGcmFnbWVudC5ncWxcXFwiXFxuXFxuc3Vic2NyaXB0aW9uIEJsb2dQb3N0QWRkZWQoJHNsdWc6IFN0cmluZyEpIHtcXG4gIEJsb2dQb3N0QWRkZWQoc2x1ZzogJHNsdWcpIHtcXG4gICAgLi4uQmxvZ1Bvc3RcXG4gIH1cXG59XFxuXCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIGRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi9mcmFnbWVudHMvQmxvZ1Bvc3RGcmFnbWVudC5ncWxcIikuZGVmaW5pdGlvbnMpKTtcblxuXG4gICAgLy8gQ29sbGVjdCBhbnkgZnJhZ21lbnQvdHlwZSByZWZlcmVuY2VzIGZyb20gYSBub2RlLCBhZGRpbmcgdGhlbSB0byB0aGUgcmVmcyBTZXRcbiAgICBmdW5jdGlvbiBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKG5vZGUsIHJlZnMpIHtcbiAgICAgIGlmIChub2RlLmtpbmQgPT09IFwiRnJhZ21lbnRTcHJlYWRcIikge1xuICAgICAgICByZWZzLmFkZChub2RlLm5hbWUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmtpbmQgPT09IFwiVmFyaWFibGVEZWZpbml0aW9uXCIpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICh0eXBlLmtpbmQgPT09IFwiTmFtZWRUeXBlXCIpIHtcbiAgICAgICAgICByZWZzLmFkZCh0eXBlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICBub2RlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhzZWxlY3Rpb24sIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5kZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmaW5pdGlvblJlZnMgPSB7fTtcbiAgICAoZnVuY3Rpb24gZXh0cmFjdFJlZmVyZW5jZXMoKSB7XG4gICAgICBkb2MuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgaWYgKGRlZi5uYW1lKSB7XG4gICAgICAgICAgdmFyIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICAgIGRlZmluaXRpb25SZWZzW2RlZi5uYW1lLnZhbHVlXSA9IHJlZnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kT3BlcmF0aW9uKGRvYywgbmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2MuZGVmaW5pdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2MuZGVmaW5pdGlvbnNbaV07XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lLnZhbHVlID09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uZVF1ZXJ5KGRvYywgb3BlcmF0aW9uTmFtZSkge1xuICAgICAgLy8gQ29weSB0aGUgRG9jdW1lbnROb2RlLCBidXQgY2xlYXIgb3V0IHRoZSBkZWZpbml0aW9uc1xuICAgICAgdmFyIG5ld0RvYyA9IHtcbiAgICAgICAga2luZDogZG9jLmtpbmQsXG4gICAgICAgIGRlZmluaXRpb25zOiBbZmluZE9wZXJhdGlvbihkb2MsIG9wZXJhdGlvbk5hbWUpXVxuICAgICAgfTtcbiAgICAgIGlmIChkb2MuaGFzT3duUHJvcGVydHkoXCJsb2NcIikpIHtcbiAgICAgICAgbmV3RG9jLmxvYyA9IGRvYy5sb2M7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdywgZm9yIHRoZSBvcGVyYXRpb24gd2UncmUgcnVubmluZywgZmluZCBhbnkgZnJhZ21lbnRzIHJlZmVyZW5jZWQgYnlcbiAgICAgIC8vIGl0IG9yIHRoZSBmcmFnbWVudHMgaXQgcmVmZXJlbmNlc1xuICAgICAgdmFyIG9wUmVmcyA9IGRlZmluaXRpb25SZWZzW29wZXJhdGlvbk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgIHZhciBhbGxSZWZzID0gbmV3IFNldCgpO1xuICAgICAgdmFyIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCBcIm5ldyBTZXQoaXRlcmFibGUpXCIsIHNvIHdlIGFkZCB0aGUgbWVtYmVycyBvZiBvcFJlZnMgdG8gbmV3UmVmcyBvbmUgYnkgb25lXG4gICAgICBvcFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIG5ld1JlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHdoaWxlIChuZXdSZWZzLnNpemUgPiAwKSB7XG4gICAgICAgIHZhciBwcmV2UmVmcyA9IG5ld1JlZnM7XG4gICAgICAgIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgcHJldlJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgICAgaWYgKCFhbGxSZWZzLmhhcyhyZWZOYW1lKSkge1xuICAgICAgICAgICAgYWxsUmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRSZWZzID0gZGVmaW5pdGlvblJlZnNbcmVmTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgY2hpbGRSZWZzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRSZWYpIHtcbiAgICAgICAgICAgICAgbmV3UmVmcy5hZGQoY2hpbGRSZWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWxsUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgdmFyIG9wID0gZmluZE9wZXJhdGlvbihkb2MsIHJlZk5hbWUpO1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBuZXdEb2MuZGVmaW5pdGlvbnMucHVzaChvcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3RG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuICAgICAgICBtb2R1bGUuZXhwb3J0c1tcIkJsb2dQb3N0QWRkZWRcIl0gPSBvbmVRdWVyeShkb2MsIFwiQmxvZ1Bvc3RBZGRlZFwiKTtcbiAgICAgICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwic3Vic2NyaXB0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0UmVtb3ZlZFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNsdWdcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5vbk51bGxUeXBlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlN0cmluZ1wifX19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQmxvZ1Bvc3RBZGRlZFwifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzbHVnXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzbHVnXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0XCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxNDV9fTtcbiAgICBkb2MubG9jLnNvdXJjZSA9IHtcImJvZHlcIjpcIiNpbXBvcnQgXFxcIi4uL2ZyYWdtZW50cy9CbG9nUG9zdEZyYWdtZW50LmdxbFxcXCJcXG5cXG5zdWJzY3JpcHRpb24gQmxvZ1Bvc3RSZW1vdmVkKCRzbHVnOiBTdHJpbmchKSB7XFxuICBCbG9nUG9zdEFkZGVkKHNsdWc6ICRzbHVnKSB7XFxuICAgIC4uLkJsb2dQb3N0XFxuICB9XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBkb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHVuaXF1ZShyZXF1aXJlKFwiLi4vZnJhZ21lbnRzL0Jsb2dQb3N0RnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgIC8vIENvbGxlY3QgYW55IGZyYWdtZW50L3R5cGUgcmVmZXJlbmNlcyBmcm9tIGEgbm9kZSwgYWRkaW5nIHRoZW0gdG8gdGhlIHJlZnMgU2V0XG4gICAgZnVuY3Rpb24gY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhub2RlLCByZWZzKSB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSBcIkZyYWdtZW50U3ByZWFkXCIpIHtcbiAgICAgICAgcmVmcy5hZGQobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSBcIlZhcmlhYmxlRGVmaW5pdGlvblwiKSB7XG4gICAgICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAodHlwZS5raW5kID09PSBcIk5hbWVkVHlwZVwiKSB7XG4gICAgICAgICAgcmVmcy5hZGQodHlwZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoc2VsZWN0aW9uLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmluaXRpb25SZWZzID0ge307XG4gICAgKGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzKCkge1xuICAgICAgZG9jLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgIGlmIChkZWYubmFtZSkge1xuICAgICAgICAgIHZhciByZWZzID0gbmV3IFNldCgpO1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgICBkZWZpbml0aW9uUmVmc1tkZWYubmFtZS52YWx1ZV0gPSByZWZzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZE9wZXJhdGlvbihkb2MsIG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jLmRlZmluaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmRlZmluaXRpb25zW2ldO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZS52YWx1ZSA9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVRdWVyeShkb2MsIG9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIC8vIENvcHkgdGhlIERvY3VtZW50Tm9kZSwgYnV0IGNsZWFyIG91dCB0aGUgZGVmaW5pdGlvbnNcbiAgICAgIHZhciBuZXdEb2MgPSB7XG4gICAgICAgIGtpbmQ6IGRvYy5raW5kLFxuICAgICAgICBkZWZpbml0aW9uczogW2ZpbmRPcGVyYXRpb24oZG9jLCBvcGVyYXRpb25OYW1lKV1cbiAgICAgIH07XG4gICAgICBpZiAoZG9jLmhhc093blByb3BlcnR5KFwibG9jXCIpKSB7XG4gICAgICAgIG5ld0RvYy5sb2MgPSBkb2MubG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3csIGZvciB0aGUgb3BlcmF0aW9uIHdlJ3JlIHJ1bm5pbmcsIGZpbmQgYW55IGZyYWdtZW50cyByZWZlcmVuY2VkIGJ5XG4gICAgICAvLyBpdCBvciB0aGUgZnJhZ21lbnRzIGl0IHJlZmVyZW5jZXNcbiAgICAgIHZhciBvcFJlZnMgPSBkZWZpbml0aW9uUmVmc1tvcGVyYXRpb25OYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICB2YXIgYWxsUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgXCJuZXcgU2V0KGl0ZXJhYmxlKVwiLCBzbyB3ZSBhZGQgdGhlIG1lbWJlcnMgb2Ygb3BSZWZzIHRvIG5ld1JlZnMgb25lIGJ5IG9uZVxuICAgICAgb3BSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICBuZXdSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aGlsZSAobmV3UmVmcy5zaXplID4gMCkge1xuICAgICAgICB2YXIgcHJldlJlZnMgPSBuZXdSZWZzO1xuICAgICAgICBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHByZXZSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICAgIGlmICghYWxsUmVmcy5oYXMocmVmTmFtZSkpIHtcbiAgICAgICAgICAgIGFsbFJlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUmVmcyA9IGRlZmluaXRpb25SZWZzW3JlZk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGNoaWxkUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICAgIG5ld1JlZnMuYWRkKGNoaWxkUmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIHZhciBvcCA9IGZpbmRPcGVyYXRpb24oZG9jLCByZWZOYW1lKTtcbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgbmV3RG9jLmRlZmluaXRpb25zLnB1c2gob3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0RvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbXCJCbG9nUG9zdFJlbW92ZWRcIl0gPSBvbmVRdWVyeShkb2MsIFwiQmxvZ1Bvc3RSZW1vdmVkXCIpO1xuICAgICAgICBcbiJdLCJzb3VyY2VSb290IjoiIn0=