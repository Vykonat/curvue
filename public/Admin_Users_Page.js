(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"24XT":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UsersQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:112}};t.loc.source={body:"query UsersQuery {\n  users {\n    id\n    role_id\n    role\n    name\n    email\n    created_at\n    updated_at\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.UsersQuery=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=i[n]||new Set,o=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});0<s.size;){var l=s;s=new Set,l.forEach(function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(n){var i=r(e,n);i&&t.definitions.push(i)}),t}(t,"UsersQuery")},"4oPz":function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:81}};t.loc.source={body:"mutation DeleteUser($id: ID!) {\n  deleteUser(id: $id) {\n    name\n    email\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.DeleteUser=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=i[n]||new Set,o=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});0<s.size;){var l=s;s=new Set,l.forEach(function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach(function(e){s.add(e)}))})}return o.forEach(function(n){var i=r(e,n);i&&t.definitions.push(i)}),t}(t,"DeleteUser")},BFTz:function(e,n,t){"use strict";t.r(n);var i,r,a=t("YKMj"),o=t("4oPz"),s=t.n(o),l=t("y4MM"),d=(i=function(e,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),c=function(){return(c=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},u=function(e,n,t,i){var r,a=arguments.length,o=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var s=e.length-1;0<=s;s--)(r=e[s])&&(o=(a<3?r(o):3<a?r(n,t,o):r(n,t))||o);return 3<a&&o&&Object.defineProperty(n,t,o),o};function f(){var e=null!==r&&r.apply(this,arguments)||this;return e.isUserModalShown=!1,e.isUserFormAdd=!0,e.userForm={role_id:2},e.usersDataTableHeader={id:{title:"id"},name:{title:"Name"},email:{title:"Email"},role:{title:"Role"},role_id:{visible:!1},created_at:{title:"Created"},updated_at:{title:"Updated"},actions:{sortable:!1,title:"Actions",slot:"actions"}},e}var m=(d(f,r=a.e),f.prototype.closeUserModal=function(e){this.isUserModalShown=!1,this.userForm={role_id:2},e.refetch()},f.prototype.handleUserAdd=function(){this.isUserFormAdd=!0,this.isUserModalShown=!0},f.prototype.handleUserEdit=function(e){this.isUserFormAdd=!1,this.isUserModalShown=!0;var n=c({},e);this.userForm.role_id=e.role_id,delete n.__typename,delete n.role,delete n.created_at,delete n.updated_at,this.userForm=n},f.prototype.handleUserDelete=function(e,n){var t=e.id;return function(e,n,t,i){return new(t=t||Promise)(function(r,a){function o(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){e.done?r(e.value):new t(function(n){n(e.value)}).then(o,s)}l((i=i.apply(e,n||[])).next())})}(this,void 0,void 0,function(){return function(e,n){var t,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=0<(r=o.trys).length&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e],i=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,function(e){switch(e.label){case 0:return[4,Object(l.a)(this.$t("resource.delete_confirmation",{resource:"User"}),!0)];case 1:return e.sent()?[4,this.$apollo.mutate({mutation:s.a,variables:{id:t}})]:[2];case 2:return e.sent(),Object(l.a)(this.$t("resource.deleted",{resource:"User"}),!1),n.refetch(),[2]}})})},Object.defineProperty(f.prototype,"searchInputPlaceHolder",{get:function(){return this.$t("resource.search",{resource:"Users"})},enumerable:!0,configurable:!0}),u([Object(a.d)()],f.prototype,"usersDataTableHeader",void 0),f=u([Object(a.a)({components:{UserForm:function(){return t.e(14).then(t.bind(null,"gZnO"))}}})],f)),v=t("KHd+"),p=Object(v.a)(m,function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("lvql-layout",{attrs:{name:"Admin"}},[i("apollo-query",{attrs:{query:t("24XT")},scopedSlots:e._u([{key:"default",fn:function(n){var t=n.result,r=t.data,a=t.loading,o=t.error,s=n.query;return[a?i("div",{staticClass:"loading apollo"},[i("grid",[i("grid-row",[i("grid-item",{attrs:{fill:""}},[e._v(e._s(e.$t("core.loading")))])],1)],1)],1):o?i("div",{staticClass:"error apollo"},[i("grid",[i("grid-row",[i("grid-item",{attrs:{fill:""}},[i("pre",[e._v(e._s(o))])])],1)],1)],1):r?i("div",{staticClass:"result apollo"},[i("lvql-modal",{attrs:{show:e.isUserModalShown},on:{close:function(n){return e.closeUserModal(s)}}},[i("user-form",{attrs:{"is-add":e.isUserFormAdd,user:e.userForm}})],1),i("grid",[i("grid-row",[i("grid-item",[i("lvql-button",{attrs:{variant:"success"},on:{click:e.handleUserAdd}},[e._v(e._s(e.$t("resource.add",{resource:"User"})))])],1)],1),i("grid-row",[i("grid-item",{attrs:{fill:""}},[i("data-table",{attrs:{header:e.usersDataTableHeader,data:r.users,placeholder:e.searchInputPlaceHolder},scopedSlots:e._u([{key:"actions",fn:function(n){var t=n.row;return[i("lvql-button",{attrs:{variant:"accent",isGhost:!0},on:{click:function(n){return e.handleUserEdit(t)}}},[i("i",{staticClass:"fas fa-pencil-alt"})]),1!==t.role_id?i("lvql-button",{attrs:{variant:"danger",isGhost:!0},on:{click:function(n){return e.handleUserDelete(t,s)}}},[i("i",{staticClass:"fas fa-trash"})]):e._e()]}}],null,!0)})],1)],1)],1)],1):e._e()]}}])})],1)},[],!1,null,null,null);n.default=p.exports},y4MM:function(e,n,t){"use strict";var i=t("mTVC"),r=t("QcY0"),a=Object(i.create)(r.default,"message","isConfirm");n.a=a}}]);