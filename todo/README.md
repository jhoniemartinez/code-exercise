# TODO: #

1. Implement typeahead 
2. Swap out endpoint to use Github Search API v3

  A. Track the rate limit and calculate the amount of calls remaining. This would be helpful for displaying a counter on the page itself.  
  B. Conditional Requests. Making a conditional request and receiving a 304 response does not count against the rate limit. Many responses return a Last-Modified header that can be passed in future requests as a 'If-Modified-Since' header. 

3. Implement CSS transitions

  A. Maybe an ease-in, ease-out on the child row when its parent is clicked

4. Integrate redux

  A. This might be overkill for a single component application. If the application expands to feature more search functionality, however, it would prove helpful.     
