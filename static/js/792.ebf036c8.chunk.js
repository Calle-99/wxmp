"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[792],{792:function(e,t,n){n.r(t),n.d(t,{yacas:function(){return k}});var r=function(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),o="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",a=new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"),i=new RegExp(o),c=new RegExp(o+"?_"+o),u=new RegExp(o+"\\s*\\(");function l(e,t){var n;if('"'===(n=e.next()))return t.tokenize=s,t.tokenize(e,t);if("/"===n){if(e.eat("*"))return t.tokenize=p,t.tokenize(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var o=e.match(/^(\w+)\s*\(/,!1);null!==o&&r.hasOwnProperty(o[1])&&t.scopes.push("bodied");var l=f(t);if("bodied"===l&&"["===n&&t.scopes.pop(),"["!==n&&"{"!==n&&"("!==n||t.scopes.push(n),("["===(l=f(t))&&"]"===n||"{"===l&&"}"===n||"("===l&&")"===n)&&t.scopes.pop(),";"===n)for(;"bodied"===l;)t.scopes.pop(),l=f(t);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(a,!0,!1)?"number":e.match(c,!0,!1)?"variableName.special":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(u,!0,!1)?(e.backUp(1),"variableName.function"):e.match(i,!0,!1)?"variable":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function s(e,t){for(var n,r=!1,o=!1;null!=(n=e.next());){if('"'===n&&!o){r=!0;break}o=!o&&"\\"===n}return r&&!o&&(t.tokenize=l),"string"}function p(e,t){for(var n,r;null!=(r=e.next());){if("*"===n&&"/"===r){t.tokenize=l;break}n=r}return"comment"}function f(e){var t=null;return e.scopes.length>0&&(t=e.scopes[e.scopes.length-1]),t}var k={startState:function(){return{tokenize:l,scopes:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},indent:function(e,t,n){if(e.tokenize!==l&&null!==e.tokenize)return null;var r=0;return"]"!==t&&"];"!==t&&"}"!==t&&"};"!==t&&");"!==t||(r=-1),(e.scopes.length+r)*n.unit},languageData:{electricInput:/[{}\[\]()\;]/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);
//# sourceMappingURL=792.ebf036c8.chunk.js.map