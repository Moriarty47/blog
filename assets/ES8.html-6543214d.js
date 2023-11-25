import{_ as o,M as c,p as l,q as p,N as t,V as e,Q as n,t as s,a0 as u}from"./framework-5411b43d.js";const i={},r=n("h3",{id:"padstart-padend",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#padstart-padend","aria-hidden":"true"},"#"),s(),n("code",null,"padStart()/padEnd()")],-1),k=n("p",null,[n("code",null,"padStart()"),s("用于头部补全。 返回新字符串，不修改原始字符串。 "),n("code",null,"padEnd()"),s("用于尾部补全。 返回新字符串，不修改原始字符串。")],-1),d=n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}"),s(` maxLength 当前字符串需要填充到的目标长度。若这个数值小于当前字符串的长度，则返回当前字符串本身。
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token punctuation"},"{"),s("string="),n("span",{class:"token punctuation"},"}"),s(` fillString 填充字符串，若字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左(padStart)/最右(padEnd)的部分，其他部分会被截断，默认值为" " (U+0020)
 */`)]),s(`
`),n("span",{class:"token function"},"padStart"),n("span",{class:"token punctuation"},"("),s("maxLength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" fillString"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"padEnd"),n("span",{class:"token punctuation"},"("),s("maxLength"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" fillString"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),f=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),m=n("pre",{class:"language-javascript"},[n("code",null,[s("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'abc'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"padStart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'0.0'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"padStart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'abc'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"padEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'0.0'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"padEnd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),b=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),A=n("h3",{id:"async-await",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#async-await","aria-hidden":"true"},"#"),s(),n("code",null,"async/await")],-1),v=n("p",null,"async 函数实际上是 Generator 函数与自动执行器包装在一个函数中。",-1),g=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello world!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),B=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),E=n("p",null,"等同于",-1),y=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"spawn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"genFunc"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" gen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"genFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nextFunc"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" next"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
        next `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"nextFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},"."),s("done"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      Promise`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("next"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" gen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" gen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"throw"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"step"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" gen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"spawn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"yield"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" args"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello world!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),h=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),w=n("h4",{id:"async-await-示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#async-await-示例","aria-hidden":"true"},"#"),s(" async/await 示例")],-1),x=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fakeRequest"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("time"),n("span",{class:"token punctuation"},","),s(" val")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
  `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" fakeRequests "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token function"},"fakeRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"fakeRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"fakeRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"fakeRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"reqs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Start'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" req "),n("span",{class:"token keyword"},"of"),s(" reqs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"req"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'End'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("fakeRequests"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),_=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),D=n("h3",{id:"object-values",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#object-values","aria-hidden":"true"},"#"),s(),n("code",null,"Object.values()")],-1),j=n("p",null,[n("code",null,"Object.values()"),s(" 类似 "),n("code",null,"Object.keys()"),s("，返回 "),n("code",null,"Object"),s(" 自身属性的所有值，不包括继承值。")],-1),C=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"foo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"baz"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'baz'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" values "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("values"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// ['foo', 'bar', 'baz']"),s(`
`)])],-1),F=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),q=n("h3",{id:"object-entries",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#object-entries","aria-hidden":"true"},"#"),s(),n("code",null,"Object.entries()")],-1),S=n("p",null,[n("code",null,"Object.entries()"),s(" 返回一个给定对象自身可枚举属性的键值对的数组。")],-1),z=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"foo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"baz"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'baz'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},": "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 'foo: foo'"),s(`
`),n("span",{class:"token comment"},"// 'bar: bar'"),s(`
`),n("span",{class:"token comment"},"// 'baz: baz'"),s(`
`)])],-1),O=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),P=n("h3",{id:"object-getownpropertydescriptors",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#object-getownpropertydescriptors","aria-hidden":"true"},"#"),s(),n("code",null,"Object.getOwnPropertyDescriptors()")],-1),R=n("p",null,[n("code",null,"Object.getOwnPropertyDescriptors()"),s(" 用于获取一个对象所有自身属性的描述符。若无，则返回空对象。")],-1),T=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"foo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"baz"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'baz'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" descriptors "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getOwnPropertyDescriptors"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("descriptors"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),L=n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})],-1),N=u('<h3 id="sharedarraybuffer" tabindex="-1"><a class="header-anchor" href="#sharedarraybuffer" aria-hidden="true">#</a> <code>SharedArrayBuffer</code></h3><p><code>SharedArrayBuffer</code> 用于表示一个通用的，固定长度的原始二进制数组缓冲区，类似 <code>ArrayBuffer</code>，它们用来在共享内存(Shared Memory)上创建视图，但与 <code>ArrayBuffer</code> 不同的是，<code>SharedArrayBuffer</code> 不能被分离。</p><h3 id="atomics" tabindex="-1"><a class="header-anchor" href="#atomics" aria-hidden="true">#</a> <code>Atomics</code></h3><p><code>Atomics</code> 对象提供了一组静态方法用来对 <code>SharedArrayBuffer</code> 对象进行原子操作。 <code>Atomics</code> 不是构造函数，因此不能使用 <code>new</code> 操作符调用，也不能将其当作函数直接调用。<code>Atomics</code> 的所有属性和方法都是静态的(与 <code>Math</code> 对象相同)。 多个共享内存的线程能够同时读写同一位置上的数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作过程不会中断。</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Atomics.add()</code></td><td style="text-align:left;">将指定位置上的数组元素与给定的值相加，并返回相加前该元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.and()</code></td><td style="text-align:left;">将指定位置上的数组元素与给定的值相与，并返回与操作前该元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.compareExchange()</code></td><td style="text-align:left;">如果数组中指定的元素与给定的值相等，则将其更新为新的值，并返回该元素原本的值</td></tr><tr><td style="text-align:left;"><code>Atomics.exchange()</code></td><td style="text-align:left;">将数组中指定的元素更新为给定的值，并返回该元素更新前的值。</td></tr><tr><td style="text-align:left;"><code>Atomics.load()</code></td><td style="text-align:left;">返回数组中指定元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.or()</code></td><td style="text-align:left;">将指定位置上的数组元素与给定的值相或，并返回或操作前该元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.store()</code></td><td style="text-align:left;">将数组中指定的元素设置为给定的值，并返回该值</td></tr><tr><td style="text-align:left;"><code>Atomics.sub()</code></td><td style="text-align:left;">将指定位置上的数组元素与给定的值相减，并返回相减前该元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.xor()</code></td><td style="text-align:left;">将指定位置上的数组元素与给定的值相异或，并返回异或操作前该元素的值</td></tr><tr><td style="text-align:left;"><code>Atomics.wait()</code></td><td style="text-align:left;">检测数组中某个指定位置上的值是否仍然是给定值，是则保持挂起直到被唤醒或超时。返回值为 &quot;ok&quot;、&quot;not-equal&quot; 或 &quot;time-out&quot;。调用时，如果当前线程不允许阻塞，则会抛出异常（大多数浏览器都不允许在主线程中调用 wait()）。</td></tr><tr><td style="text-align:left;"><code>Atomics.wake()</code></td><td style="text-align:left;">唤醒等待队列中正在数组指定位置的元素上等待的线程。返回值为成功唤醒的线程数量。</td></tr><tr><td style="text-align:left;"><code>Atomics.isLockFree(size)</code></td><td style="text-align:left;">可以用来检测当前系统是否支持硬件级的原子操作。对于指定大小的数组，如果当前系统支持硬件级的原子操作，则返回 true；否则就意味着对于该数组，Atomics 对象中的各原子操作都只能用锁来实现。此函数面向的是技术专家。</td></tr></tbody></table>',5);function V(H,M){const a=c("CodeTool");return l(),p("div",null,[r,k,t(a,{class:"language-typescript line-numbers-mode","data-ext":"ts",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"undefined",async:"undefined",content:"%2F**%0A%20*%20%40param%20%7Bnumber%7D%20maxLength%20%E5%BD%93%E5%89%8D%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%9C%80%E8%A6%81%E5%A1%AB%E5%85%85%E5%88%B0%E7%9A%84%E7%9B%AE%E6%A0%87%E9%95%BF%E5%BA%A6%E3%80%82%E8%8B%A5%E8%BF%99%E4%B8%AA%E6%95%B0%E5%80%BC%E5%B0%8F%E4%BA%8E%E5%BD%93%E5%89%8D%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E9%95%BF%E5%BA%A6%EF%BC%8C%E5%88%99%E8%BF%94%E5%9B%9E%E5%BD%93%E5%89%8D%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%9C%AC%E8%BA%AB%E3%80%82%0A%20*%20%40param%20%7Bstring%3D%7D%20fillString%20%E5%A1%AB%E5%85%85%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%8C%E8%8B%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%AA%E9%95%BF%EF%BC%8C%E4%BD%BF%E5%A1%AB%E5%85%85%E5%90%8E%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E8%B6%85%E8%BF%87%E4%BA%86%E7%9B%AE%E6%A0%87%E9%95%BF%E5%BA%A6%EF%BC%8C%E5%88%99%E5%8F%AA%E4%BF%9D%E7%95%99%E6%9C%80%E5%B7%A6(padStart)%2F%E6%9C%80%E5%8F%B3(padEnd)%E7%9A%84%E9%83%A8%E5%88%86%EF%BC%8C%E5%85%B6%E4%BB%96%E9%83%A8%E5%88%86%E4%BC%9A%E8%A2%AB%E6%88%AA%E6%96%AD%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%22%20%22%20(U%2B0020)%0A%20*%2F%0ApadStart(maxLength%3A%20number%2C%20fillString%3F%3A%20string)%3A%20string%3B%0ApadEnd(maxLength%3A%20number%2C%20fillString%3F%3A%20string)%3A%20string%3B%0A",ext:"typescript"},{default:e(()=>[d,f]),_:1}),t(a,{id:"string-pad-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"console.log('abc'.padStart(5%2C%20'd'))%3B%0Aconsole.log('0.0'.padStart(4%2C%20'10'))%3B%0A%0Aconsole.log('abc'.padEnd(5%2C%20'd'))%3B%0Aconsole.log('0.0'.padEnd(4%2C%20'10'))%3B%0A",ext:"javascript"},{default:e(()=>[m,b]),_:1}),A,v,t(a,{id:"async-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"async%20function%20fn(args)%20%7B%0A%20%20const%20res%20%3D%20await%20new%20Promise((resolve)%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20resolve(args)%3B%0A%20%20%20%20%7D%2C%202000)%3B%0A%20%20%7D)%3B%0A%20%20console.log(res)%3B%0A%7D%0Afn('Hello%20world!')%3B%0A",ext:"javascript"},{default:e(()=>[g,B]),_:1}),E,t(a,{id:"async-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"function%20spawn(genFunc)%20%7B%0A%20%20return%20new%20Promise((resolve%2C%20reject)%20%3D%3E%20%7B%0A%20%20%20%20const%20gen%20%3D%20genFunc()%3B%0A%20%20%20%20function%20step(nextFunc)%20%7B%0A%20%20%20%20%20%20let%20next%3B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20next%20%3D%20nextFunc()%3B%0A%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20return%20reject(e)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(next.done)%20%7B%0A%20%20%20%20%20%20%20%20return%20resolve(next.value)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20Promise.resolve(next.value).then(%0A%20%20%20%20%20%20%20%20(v)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20step(()%20%3D%3E%20gen.next(v))%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20step(()%20%3D%3E%20gen.throw(e))%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%20%20step(()%20%3D%3E%20gen.next(undefined))%3B%0A%20%20%7D)%3B%0A%7D%0Afunction%20fn(args)%20%7B%0A%20%20spawn(function*%20()%20%7B%0A%20%20%20%20yield%20new%20Promise((resolve)%20%3D%3E%20setTimeout(()%20%3D%3E%20resolve()%2C%202000))%3B%0A%20%20%20%20return%20args%3B%0A%20%20%7D).then((res)%20%3D%3E%20%7B%0A%20%20%20%20console.log(res)%3B%0A%20%20%7D)%3B%0A%7D%0Afn('Hello%20world!')%3B%0A",ext:"javascript"},{default:e(()=>[y,h]),_:1}),w,t(a,{id:"async-await-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"const%20fakeRequest%20%3D%20(time%2C%20val)%20%3D%3E%20()%20%3D%3E%0A%20%20new%20Promise((resolve)%20%3D%3E%20setTimeout(()%20%3D%3E%20resolve(val)%2C%20time))%3B%0Aconst%20fakeRequests%20%3D%20%5B%0A%20%20fakeRequest(2000%2C%20'a')%2C%0A%20%20fakeRequest(1000%2C%20'b')%2C%0A%20%20fakeRequest(3000%2C%20'c')%2C%0A%20%20fakeRequest(5000%2C%20'd')%2C%0A%5D%3B%0Aasync%20function%20request(reqs)%20%7B%0A%20%20console.log('Start')%3B%0A%20%20for%20(const%20req%20of%20reqs)%20%7B%0A%20%20%20%20console.log(await%20req())%3B%0A%20%20%7D%0A%20%20console.log('End')%3B%0A%7D%0Arequest(fakeRequests)%3B%0A",ext:"javascript"},{default:e(()=>[x,_]),_:1}),D,j,t(a,{id:"object-values-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"const%20obj%20%3D%20%7B%20foo%3A%20'foo'%2C%20bar%3A%20'bar'%2C%20baz%3A%20'baz'%20%7D%3B%0Aconst%20values%20%3D%20Object.values(obj)%3B%0Aconsole.log(values)%3B%0A%2F%2F%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D%0A",ext:"javascript"},{default:e(()=>[C,F]),_:1}),q,S,t(a,{id:"object-entries-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"const%20obj%20%3D%20%7B%20foo%3A%20'foo'%2C%20bar%3A%20'bar'%2C%20baz%3A%20'baz'%20%7D%3B%0Afor%20(const%20%5Bkey%2C%20value%5D%20of%20Object.entries(obj))%20%7B%0A%20%20console.log(%60%24%7Bkey%7D%3A%20%24%7Bvalue%7D%60)%3B%0A%7D%0A%2F%2F%20'foo%3A%20foo'%0A%2F%2F%20'bar%3A%20bar'%0A%2F%2F%20'baz%3A%20baz'%0A",ext:"javascript"},{default:e(()=>[z,O]),_:1}),P,R,t(a,{id:"object-getownpropertydescriptors-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"const%20obj%20%3D%20%7B%0A%20%20foo%3A%20'foo'%2C%0A%20%20baz()%20%7B%0A%20%20%20%20return%20'baz'%3B%0A%20%20%7D%2C%0A%7D%3B%0Aconst%20descriptors%20%3D%20Object.getOwnPropertyDescriptors(obj)%3B%0Aconsole.log(descriptors)%3B%0A",ext:"javascript"},{default:e(()=>[T,L]),_:1}),N])}const $=o(i,[["render",V],["__file","ES8.html.vue"]]);export{$ as default};
