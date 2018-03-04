
# 4 ways for making http requests with node

reference https://codeburst.io/4-ways-for-making-http-s-requests-with-node-js-c524f999942d

## Requests with callbacks

* http.get and https.get, a native way

*Pros:*
- native API, there is no need to install third party modules
- the response is a stream*

*Cons:*
- a bit verbose
- the response is a stream*
- no support for promises

* The Request Module
*Pros:*
- ease of use

*Cons:*
- no support for promises
- it’s a third party module with many dependencies

## Requests with promises

* The node-fetch module
*Pros:*
- support for promises
- same API as window.fetch
- few dependencies

*Cons:*
- same API as window.fetch

Some people can’t stand out the fact that in order to manipulate the response you have to chain then() two times (and some other quirks) but in the end it’s a matter of getting the job done: use whichever library you prefer.

* The axios module
*Pros:*
- support for promises
- ease of use
- few dependencies (it has only 2 dependencies)

*Cons:*
- ??

With Axios you don’t need to explicitly process the response in order to get the JSON as you did with node-fetch: axios will do it automagically.


