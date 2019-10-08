const url = require('url');
const qs = require('querystring');

var href = 'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

var href_obj = new url.URL(href);

// console.log(href_obj);

// 1 获取查询参数query的值
// a: 通过searchParams
// console.log(href_obj.searchParams.get('query'));
// href_obj.searchParams.set('t', 1);

// console.log(href_obj.href);

// b: querystring
var params = qs.parse(href_obj.search.slice(1));

console.log(params.query);
