"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1973],{1973:function(e,t,r){r.r(t),r.d(t,{tiddlyWiki:function(){return y}});var n={},i={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},a=/[\w_\-]/i,u=/^\-\-\-\-+$/,o=/^\/\*\*\*$/,f=/^\*\*\*\/$/,c=/^<<<$/,l=/^\/\/\{\{\{$/,m=/^\/\/\}\}\}$/,k=/^<!--\{\{\{-->$/,s=/^<!--\}\}\}-->$/,h=/^\{\{\{$/,b=/^\}\}\}$/,p=/.*?\}\}\}/;function d(e,t,r){return t.tokenize=r,r(e,t)}function $(e,t){var r=e.sol(),i=e.peek();if(t.block=!1,r&&/[<\/\*{}\-]/.test(i)){if(e.match(h))return t.block=!0,d(e,t,z);if(e.match(c))return"quote";if(e.match(o)||e.match(f))return"comment";if(e.match(l)||e.match(m)||e.match(k)||e.match(s))return"comment";if(e.match(u))return"contentSeparator"}if(e.next(),r&&/[\/\*!#;:>|]/.test(i)){if("!"==i)return e.skipToEnd(),"header";if("*"==i)return e.eatWhile("*"),"comment";if("#"==i)return e.eatWhile("#"),"comment";if(";"==i)return e.eatWhile(";"),"comment";if(":"==i)return e.eatWhile(":"),"comment";if(">"==i)return e.eatWhile(">"),"quote";if("|"==i)return"header"}if("{"==i&&e.match("{{"))return d(e,t,z);if(/[hf]/i.test(i)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==i)return"string";if("~"==i)return"brace";if(/[\[\]]/.test(i)&&e.match(i))return"brace";if("@"==i)return e.eatWhile(a),"link";if(/\d/.test(i))return e.eatWhile(/\d/),"number";if("/"==i){if(e.eat("%"))return d(e,t,v);if(e.eat("/"))return d(e,t,W)}if("_"==i&&e.eat("_"))return d(e,t,g);if("-"==i&&e.eat("-")){if(" "!=e.peek())return d(e,t,x);if(" "==e.peek())return"brace"}return"'"==i&&e.eat("'")?d(e,t,w):"<"==i&&e.eat("<")?d(e,t,_):(e.eatWhile(/[\w\$_]/),n.propertyIsEnumerable(e.current())?"keyword":null)}function v(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=$;break}n="%"==r}return"comment"}function w(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=$;break}n="'"==r}return"strong"}function z(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(p)||r&&e.sol()&&e.match(b)?(t.tokenize=$,"comment"):(e.next(),"comment")}function W(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=$;break}n="/"==r}return"emphasis"}function g(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=$;break}n="_"==r}return"link"}function x(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=$;break}n="-"==r}return"deleted"}function _(e,t){if("<<"==e.current())return"meta";var r=e.next();return r?">"==r&&">"==e.peek()?(e.next(),t.tokenize=$,"meta"):(e.eatWhile(/[\w\$_]/),i.propertyIsEnumerable(e.current())?"keyword":null):(t.tokenize=$,null)}var y={startState:function(){return{tokenize:$}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);
//# sourceMappingURL=1973.bb4f073d.chunk.js.map