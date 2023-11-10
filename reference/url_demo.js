const url= require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=123&status=active');

//serialized Url
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);

//hostname (no port number)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serailaized query
console.log(myUrl.search)

//ParamsObject
console.log(myUrl.searchParams);

//add parameters
myUrl.searchParams.append('anything', 'something');
console.log(myUrl.searchParams);

//loop through parameters
myUrl.searchParams.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});