"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[637],{637:function(e,a,t){t.r(a),t.d(a,{mathematica:function(){return $}});var n="[a-zA-Z\\$][a-zA-Z0-9\\$]*",c="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m="(?:`(?:`?"+c+")?)",r=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+m+"?(?:\\*\\^[+-]?\\d+)?))"),o=new RegExp("(?:"+c+m+"?(?:\\*\\^[+-]?\\d+)?)"),z=new RegExp("(?:`?)(?:"+n+")(?:`(?:"+n+"))*(?:`?)");function i(e,a){var t;return'"'===(t=e.next())?(a.tokenize=A,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=Z,a.tokenize(e,a)):(e.backUp(1),e.match(r,!0,!1)||e.match(o,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string.special":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variableName.special":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"character":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variableName.constant":e.match(z,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function A(e,a){for(var t,n=!1,c=!1;null!=(t=e.next());){if('"'===t&&!c){n=!0;break}c=!c&&"\\"===t}return n&&!c&&(a.tokenize=i),"string"}function Z(e,a){for(var t,n;a.commentLevel>0&&null!=(n=e.next());)"("===t&&"*"===n&&a.commentLevel++,"*"===t&&")"===n&&a.commentLevel--,t=n;return a.commentLevel<=0&&(a.tokenize=i),"comment"}var $={startState:function(){return{tokenize:i,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},languageData:{commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);
//# sourceMappingURL=637.c835011f.chunk.js.map