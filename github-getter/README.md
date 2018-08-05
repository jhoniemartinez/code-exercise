# Github Getter

## Overview

Write a single page JavaScript application that allows users to search through Github repositories via keyword.

While this is a relatively open-ended exercise, please abide by the following rules and requirements...

1. Write your app using either a) "vanilla" javascript or b) React.js. Lodash (included) is the only other additional library allowed.
1. Do not spend more than four (4) hours on this task, unless you'd like to write both a vanilla and React version of the app. In that case, you'll be allowed (8) hours.
1. Some files have been created for you in advance – `app.js`, `styles.css` and `index.html` – but edit as you see fit.
1. `index.html` contains three elements: one for the search term, one for the results, and one for an overlay. Update as you wish.
1. Search results should display as a list. Each list item should display the repository's _name_ and _owner_.
1. When a result is clicked/tapped, please display the repository's _language_, _followers_, _url_ and _description_.
1. Be cognizant of unnecessary network noise. Strongly consider data caching.
1. UI presentation and search UX is up to you.
1. Build for the latest version of Chrome only.
1. And lastly, please follow up with some thoughts on where you would take this feature post-submission. For example, maybe you'd refine the UI further, or process github data differently. Add these thoughts to the README. 


    # Endpoint URL #

    https://api.github.com/legacy/repos/search/{query}

    Note: Github imposes a rate limit of 60 request per minute. Documentation can be found at http://developer.github.com/v3/.

    # Example Response JSON #

    {
      "meta": {...},
      "data": {
        "repositories": [
          {
            "type": string,
            "watchers": number,
            "followers": number,
            "username": string,
            "owner": string,
            "created": string,
            "created_at": string,
            "pushed_at": string,
            "description": string,
            "forks": number,
            "pushed": string,
            "fork": boolean,
            "size": number,
            "name": string,
            "private": boolean,
            "language": number
          },
          {...},
          {...}
        ]
      }
    }
