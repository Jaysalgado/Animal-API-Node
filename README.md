# Animal API

## What is this?

This is a simple project that shows an example of calling the animals REST API from a platform called API Ninjas.
The animals API documentation can be found [here](https://api-ninjas.com/api/animals).

This repo was made as a teaching tool for a lesson in Quinnipiac's Open-Source Development class -- it's intentionally lacking certain features "gimme" features, and some code is written purposefully suboptimal in order to give the students in the class a chance to make things better. :wink:

## How to set this project up?

Project was written in Node.
Recommend Node version 18, but this project is simple enough where any version >= 16 should reasonably work without issue.

- Clone project
- Install npm packages
- Rename `.env.sample` to `.env`
- If you do not have one already, sign up for an account at [API Ninjas](https://api-ninjas.com) and create an access token through their website
- Place API Ninjas access token in `.env` file as API_KEY

## How to run this project?

Simply run this project using `node ./src/index.js` (or you can use the shortcut `npm run start`).
If it ran successfully, you should output containing a list of animal names from the API that have "cat" somewhere in their name.

