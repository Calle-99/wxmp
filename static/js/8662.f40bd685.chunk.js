"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8662],{8662:function(e,t,r){function n(e,t,r){return t(r),r(e,t)}r.r(t),r.d(t,{elm:function(){return w}});var i=/[a-z]/,u=/[A-Z]/,o=/[a-zA-Z0-9_]/,f=/[0-9]/,a=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,l=/[(),[\]{}]/,c=/[ \v\f]/;function p(){return function(e,t){if(e.eatWhile(c))return null;var r=e.next();if(l.test(r))return"{"===r&&e.eat("-")?n(e,t,h(1)):"["===r&&e.match("glsl|")?n(e,t,d):"builtin";if("'"===r)return n(e,t,x);if('"'===r)return e.eat('"')?e.eat('"')?n(e,t,k):"string":n(e,t,m);if(u.test(r))return e.eatWhile(o),"type";if(i.test(r)){var p=1===e.pos;return e.eatWhile(o),p?"def":"variable"}if(f.test(r)){if("0"===r){if(e.eat(/[xX]/))return e.eatWhile(a),"number"}else e.eatWhile(f);return e.eat(".")&&e.eatWhile(f),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(f)),"number"}return s.test(r)?"-"===r&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===r?"keyword":"error"}}function h(e){return 0==e?p():function(t,r){for(;!t.eol();){var n=t.next();if("{"==n&&t.eat("-"))++e;else if("-"==n&&t.eat("}")&&0===--e)return r(p()),"comment"}return r(h(e)),"comment"}}function k(e,t){for(;!e.eol();){if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(p()),"string"}return"string"}function m(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function x(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function d(e,t){for(;!e.eol();){if("|"===e.next()&&e.eat("]"))return t(p()),"string"}return"string"}var g={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1},w={startState:function(){return{f:p()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return g.hasOwnProperty(n)?"keyword":r}}}}]);
//# sourceMappingURL=8662.f40bd685.chunk.js.map