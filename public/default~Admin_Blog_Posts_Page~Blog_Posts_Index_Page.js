(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Admin_Blog_Posts_Page~Blog_Posts_Index_Page"],{

/***/ "./resources/ts/sectors/blogposts/_gql/fragments/BlogPostFragment.gql":
/*!****************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/fragments/BlogPostFragment.gql ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentRelationship"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":343}};
    doc.loc.source = {"body":"#import \"../../../users/_gql/fragments/UserRelationshipFragment.gql\"\n#import \"../../../comments/_gql/fragments/CommentRelationshipFragment.gql\"\n\nfragment BlogPost on BlogPost {\n  __typename\n  id\n  title\n  slug\n  description\n  content\n  user {\n    ...UserRelationship\n  }\n  comments {\n    ...CommentRelationship\n  }\n  created_at\n  updated_at\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
doc.definitions = doc.definitions.concat(unique(__webpack_require__(/*! ../../../comments/_gql/fragments/CommentRelationshipFragment.gql */ "./resources/ts/sectors/comments/_gql/fragments/CommentRelationshipFragment.gql").definitions));


      module.exports = doc;
    


/***/ }),

/***/ "./resources/ts/sectors/blogposts/_gql/queries/BlogPostsQuery.gql":
/*!************************************************************************!*\
  !*** ./resources/ts/sectors/blogposts/_gql/queries/BlogPostsQuery.gql ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlogPosts"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPosts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost"},"directives":[]}]}}]}}],"loc":{"start":0,"end":99}};
    doc.loc.source = {"body":"#import \"../fragments/BlogPostFragment.gql\"\n\nquery BlogPosts {\n  blogPosts {\n    ...BlogPost\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["BlogPosts"] = oneQuery(doc, "BlogPosts");
        


/***/ }),

/***/ "./resources/ts/sectors/comments/_gql/fragments/CommentRelationshipFragment.gql":
/*!**************************************************************************************!*\
  !*** ./resources/ts/sectors/comments/_gql/fragments/CommentRelationshipFragment.gql ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentRelationship"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commentable_type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRelationship"},"directives":[]}]}}]}}],"loc":{"start":0,"end":241}};
    doc.loc.source = {"body":"#import \"../../../users/_gql/fragments/UserRelationshipFragment.gql\"\n\nfragment CommentRelationship on Comment {\n  __typename\n  id\n  content\n  commentable_id\n  commentable_type\n  created_at\n  updated_at\n  user {\n    ...UserRelationship\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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


      module.exports = doc;
    


/***/ }),

/***/ "./resources/ts/sectors/users/_gql/fragments/UserRelationshipFragment.gql":
/*!********************************************************************************!*\
  !*** ./resources/ts/sectors/users/_gql/fragments/UserRelationshipFragment.gql ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserRelationship"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":71}};
    doc.loc.source = {"body":"fragment UserRelationship on User {\n  __typename\n  id\n  name\n  email\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  

      module.exports = doc;
    


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy9ibG9ncG9zdHMvX2dxbC9mcmFnbWVudHMvQmxvZ1Bvc3RGcmFnbWVudC5ncWwiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvYmxvZ3Bvc3RzL19ncWwvcXVlcmllcy9CbG9nUG9zdHNRdWVyeS5ncWwiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RzL3NlY3RvcnMvY29tbWVudHMvX2dxbC9mcmFnbWVudHMvQ29tbWVudFJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdHMvc2VjdG9ycy91c2Vycy9fZ3FsL2ZyYWdtZW50cy9Vc2VyUmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxlQUFlLGtDQUFrQyxvQ0FBb0MsaUNBQWlDLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGlDQUFpQyxxQ0FBcUMsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsRUFBRSx1QkFBdUIsMkJBQTJCLGdDQUFnQyxFQUFFLHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLEVBQUUsdUJBQXVCLDZCQUE2QixnQ0FBZ0MsRUFBRSx1QkFBdUIsb0NBQW9DLGdDQUFnQyxFQUFFLHVCQUF1QixnQ0FBZ0MsZ0NBQWdDLEVBQUUsdUJBQXVCLDZCQUE2QixnREFBZ0QscUNBQXFDLGdDQUFnQyx5Q0FBeUMsaUJBQWlCLEdBQUcsRUFBRSx1QkFBdUIsaUNBQWlDLGdEQUFnRCxxQ0FBcUMsZ0NBQWdDLDRDQUE0QyxpQkFBaUIsR0FBRyxFQUFFLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLEVBQUUsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxTQUFTO0FBQ3Y3QyxzQkFBc0IsK0xBQStMLHlFQUF5RSw4QkFBOEIsY0FBYyxpQ0FBaUMsK0JBQStCLCtDQUErQzs7O0FBR3piO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELG1CQUFPLENBQUMsNElBQTREO0FBQ3RILGdEQUFnRCxtQkFBTyxDQUFDLHdKQUFrRTs7O0FBRzFIOzs7Ozs7Ozs7Ozs7OztBQ3ZCQSxlQUFlLGtDQUFrQyx5REFBeUQsa0NBQWtDLDBEQUEwRCxxQ0FBcUMsdUJBQXVCLGtDQUFrQyxnREFBZ0QscUNBQXFDLGdDQUFnQyxpQ0FBaUMsaUJBQWlCLEdBQUcsR0FBRyxTQUFTO0FBQzFkLHNCQUFzQiwwRUFBMEUsZUFBZSxzQkFBc0IsR0FBRywrQ0FBK0M7OztBQUd2TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQkFBTyxDQUFDLCtHQUFtQzs7O0FBRzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4SEEsZUFBZSxrQ0FBa0Msb0NBQW9DLDRDQUE0QyxrQkFBa0IsMkJBQTJCLGlDQUFpQyxpQ0FBaUMscUNBQXFDLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLEVBQUUsdUJBQXVCLDJCQUEyQixnQ0FBZ0MsRUFBRSx1QkFBdUIsZ0NBQWdDLGdDQUFnQyxFQUFFLHVCQUF1Qix1Q0FBdUMsZ0NBQWdDLEVBQUUsdUJBQXVCLHlDQUF5QyxnQ0FBZ0MsRUFBRSx1QkFBdUIsbUNBQW1DLGdDQUFnQyxFQUFFLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLEVBQUUsdUJBQXVCLDZCQUE2QixnREFBZ0QscUNBQXFDLGdDQUFnQyx5Q0FBeUMsaUJBQWlCLEdBQUcsR0FBRyxTQUFTO0FBQzFvQyxzQkFBc0IsMkhBQTJILDJHQUEyRyw4QkFBOEIsR0FBRywrQ0FBK0M7OztBQUc1VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQkFBTyxDQUFDLDRJQUE0RDs7O0FBR3RIOzs7Ozs7Ozs7Ozs7OztBQ3RCQSxlQUFlLGtDQUFrQyxvQ0FBb0MseUNBQXlDLGtCQUFrQiwyQkFBMkIsOEJBQThCLGlDQUFpQyxxQ0FBcUMsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsRUFBRSx1QkFBdUIsMkJBQTJCLGdDQUFnQyxFQUFFLHVCQUF1Qiw2QkFBNkIsZ0NBQWdDLEVBQUUsdUJBQXVCLDhCQUE4QixnQ0FBZ0MsR0FBRyxTQUFTO0FBQ3RuQixzQkFBc0IsMkNBQTJDLHdDQUF3QywrQ0FBK0M7OztBQUd4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EiLCJmaWxlIjoiZGVmYXVsdH5BZG1pbl9CbG9nX1Bvc3RzX1BhZ2V+QmxvZ19Qb3N0c19JbmRleF9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQmxvZ1Bvc3RcIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJfX3R5cGVuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNsdWdcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29udGVudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1c2VyXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiVXNlclJlbGF0aW9uc2hpcFwifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudHNcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb21tZW50UmVsYXRpb25zaGlwXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkX2F0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRfYXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzQzfX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCIjaW1wb3J0IFxcXCIuLi8uLi8uLi91c2Vycy9fZ3FsL2ZyYWdtZW50cy9Vc2VyUmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXFxcIlxcbiNpbXBvcnQgXFxcIi4uLy4uLy4uL2NvbW1lbnRzL19ncWwvZnJhZ21lbnRzL0NvbW1lbnRSZWxhdGlvbnNoaXBGcmFnbWVudC5ncWxcXFwiXFxuXFxuZnJhZ21lbnQgQmxvZ1Bvc3Qgb24gQmxvZ1Bvc3Qge1xcbiAgX190eXBlbmFtZVxcbiAgaWRcXG4gIHRpdGxlXFxuICBzbHVnXFxuICBkZXNjcmlwdGlvblxcbiAgY29udGVudFxcbiAgdXNlciB7XFxuICAgIC4uLlVzZXJSZWxhdGlvbnNoaXBcXG4gIH1cXG4gIGNvbW1lbnRzIHtcXG4gICAgLi4uQ29tbWVudFJlbGF0aW9uc2hpcFxcbiAgfVxcbiAgY3JlYXRlZF9hdFxcbiAgdXBkYXRlZF9hdFxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uLy4uLy4uL3VzZXJzL19ncWwvZnJhZ21lbnRzL1VzZXJSZWxhdGlvbnNoaXBGcmFnbWVudC5ncWxcIikuZGVmaW5pdGlvbnMpKTtcbmRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQodW5pcXVlKHJlcXVpcmUoXCIuLi8uLi8uLi9jb21tZW50cy9fZ3FsL2ZyYWdtZW50cy9Db21tZW50UmVsYXRpb25zaGlwRnJhZ21lbnQuZ3FsXCIpLmRlZmluaXRpb25zKSk7XG5cblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQmxvZ1Bvc3RzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImJsb2dQb3N0c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkJsb2dQb3N0XCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo5OX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vZnJhZ21lbnRzL0Jsb2dQb3N0RnJhZ21lbnQuZ3FsXFxcIlxcblxcbnF1ZXJ5IEJsb2dQb3N0cyB7XFxuICBibG9nUG9zdHMge1xcbiAgICAuLi5CbG9nUG9zdFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uL2ZyYWdtZW50cy9CbG9nUG9zdEZyYWdtZW50LmdxbFwiKS5kZWZpbml0aW9ucykpO1xuXG5cbiAgICAvLyBDb2xsZWN0IGFueSBmcmFnbWVudC90eXBlIHJlZmVyZW5jZXMgZnJvbSBhIG5vZGUsIGFkZGluZyB0aGVtIHRvIHRoZSByZWZzIFNldFxuICAgIGZ1bmN0aW9uIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMobm9kZSwgcmVmcykge1xuICAgICAgaWYgKG5vZGUua2luZCA9PT0gXCJGcmFnbWVudFNwcmVhZFwiKSB7XG4gICAgICAgIHJlZnMuYWRkKG5vZGUubmFtZS52YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUua2luZCA9PT0gXCJWYXJpYWJsZURlZmluaXRpb25cIikge1xuICAgICAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgaWYgKHR5cGUua2luZCA9PT0gXCJOYW1lZFR5cGVcIikge1xuICAgICAgICAgIHJlZnMuYWRkKHR5cGUubmFtZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuc2VsZWN0aW9uU2V0KSB7XG4gICAgICAgIG5vZGUuc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKHNlbGVjdGlvbiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS52YXJpYWJsZURlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUudmFyaWFibGVEZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmRlZmluaXRpb25zKSB7XG4gICAgICAgIG5vZGUuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZpbml0aW9uUmVmcyA9IHt9O1xuICAgIChmdW5jdGlvbiBleHRyYWN0UmVmZXJlbmNlcygpIHtcbiAgICAgIGRvYy5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICBpZiAoZGVmLm5hbWUpIHtcbiAgICAgICAgICB2YXIgcmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgICAgZGVmaW5pdGlvblJlZnNbZGVmLm5hbWUudmFsdWVdID0gcmVmcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRPcGVyYXRpb24oZG9jLCBuYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvYy5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvYy5kZWZpbml0aW9uc1tpXTtcbiAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUudmFsdWUgPT0gbmFtZSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lUXVlcnkoZG9jLCBvcGVyYXRpb25OYW1lKSB7XG4gICAgICAvLyBDb3B5IHRoZSBEb2N1bWVudE5vZGUsIGJ1dCBjbGVhciBvdXQgdGhlIGRlZmluaXRpb25zXG4gICAgICB2YXIgbmV3RG9jID0ge1xuICAgICAgICBraW5kOiBkb2Mua2luZCxcbiAgICAgICAgZGVmaW5pdGlvbnM6IFtmaW5kT3BlcmF0aW9uKGRvYywgb3BlcmF0aW9uTmFtZSldXG4gICAgICB9O1xuICAgICAgaWYgKGRvYy5oYXNPd25Qcm9wZXJ0eShcImxvY1wiKSkge1xuICAgICAgICBuZXdEb2MubG9jID0gZG9jLmxvYztcbiAgICAgIH1cblxuICAgICAgLy8gTm93LCBmb3IgdGhlIG9wZXJhdGlvbiB3ZSdyZSBydW5uaW5nLCBmaW5kIGFueSBmcmFnbWVudHMgcmVmZXJlbmNlZCBieVxuICAgICAgLy8gaXQgb3IgdGhlIGZyYWdtZW50cyBpdCByZWZlcmVuY2VzXG4gICAgICB2YXIgb3BSZWZzID0gZGVmaW5pdGlvblJlZnNbb3BlcmF0aW9uTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgdmFyIGFsbFJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICB2YXIgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IFwibmV3IFNldChpdGVyYWJsZSlcIiwgc28gd2UgYWRkIHRoZSBtZW1iZXJzIG9mIG9wUmVmcyB0byBuZXdSZWZzIG9uZSBieSBvbmVcbiAgICAgIG9wUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgbmV3UmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICB9KTtcblxuICAgICAgd2hpbGUgKG5ld1JlZnMuc2l6ZSA+IDApIHtcbiAgICAgICAgdmFyIHByZXZSZWZzID0gbmV3UmVmcztcbiAgICAgICAgbmV3UmVmcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICBwcmV2UmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgICBpZiAoIWFsbFJlZnMuaGFzKHJlZk5hbWUpKSB7XG4gICAgICAgICAgICBhbGxSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZFJlZnMgPSBkZWZpbml0aW9uUmVmc1tyZWZOYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICBjaGlsZFJlZnMuZm9yRWFjaChmdW5jdGlvbihjaGlsZFJlZikge1xuICAgICAgICAgICAgICBuZXdSZWZzLmFkZChjaGlsZFJlZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGxSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICB2YXIgb3AgPSBmaW5kT3BlcmF0aW9uKGRvYywgcmVmTmFtZSk7XG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIG5ld0RvYy5kZWZpbml0aW9ucy5wdXNoKG9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdEb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4gICAgICAgIG1vZHVsZS5leHBvcnRzW1wiQmxvZ1Bvc3RzXCJdID0gb25lUXVlcnkoZG9jLCBcIkJsb2dQb3N0c1wiKTtcbiAgICAgICAgXG4iLCJcbiAgICB2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb21tZW50UmVsYXRpb25zaGlwXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJDb21tZW50XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJfX3R5cGVuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNvbnRlbnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudGFibGVfaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiY29tbWVudGFibGVfdHlwZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkX2F0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVwZGF0ZWRfYXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlclwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlVzZXJSZWxhdGlvbnNoaXBcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI0MX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiI2ltcG9ydCBcXFwiLi4vLi4vLi4vdXNlcnMvX2dxbC9mcmFnbWVudHMvVXNlclJlbGF0aW9uc2hpcEZyYWdtZW50LmdxbFxcXCJcXG5cXG5mcmFnbWVudCBDb21tZW50UmVsYXRpb25zaGlwIG9uIENvbW1lbnQge1xcbiAgX190eXBlbmFtZVxcbiAgaWRcXG4gIGNvbnRlbnRcXG4gIGNvbW1lbnRhYmxlX2lkXFxuICBjb21tZW50YWJsZV90eXBlXFxuICBjcmVhdGVkX2F0XFxuICB1cGRhdGVkX2F0XFxuICB1c2VyIHtcXG4gICAgLi4uVXNlclJlbGF0aW9uc2hpcFxcbiAgfVxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdCh1bmlxdWUocmVxdWlyZShcIi4uLy4uLy4uL3VzZXJzL19ncWwvZnJhZ21lbnRzL1VzZXJSZWxhdGlvbnNoaXBGcmFnbWVudC5ncWxcIikuZGVmaW5pdGlvbnMpKTtcblxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiIsIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlVzZXJSZWxhdGlvbnNoaXBcIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlVzZXJcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIl9fdHlwZW5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbWFpbFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo3MX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwiZnJhZ21lbnQgVXNlclJlbGF0aW9uc2hpcCBvbiBVc2VyIHtcXG4gIF9fdHlwZW5hbWVcXG4gIGlkXFxuICBuYW1lXFxuICBlbWFpbFxcbn1cXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXG5cbiAgICB2YXIgbmFtZXMgPSB7fTtcbiAgICBmdW5jdGlvbiB1bmlxdWUoZGVmcykge1xuICAgICAgcmV0dXJuIGRlZnMuZmlsdGVyKFxuICAgICAgICBmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBpZiAoZGVmLmtpbmQgIT09ICdGcmFnbWVudERlZmluaXRpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlZi5uYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWVzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZG9jO1xuICAgIFxuIl0sInNvdXJjZVJvb3QiOiIifQ==