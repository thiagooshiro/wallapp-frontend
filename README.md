## Welcome to WallApp FrontEnd

This is the Front-End application for the Wall App. 
WallApp is a social-media application where: 
  1 - A authenticated User see all posts and make new posts on the wall.
  2 - A guest can see all posts but cannot post.
  3 - Users recieve an confirmation e-mail when they register a new account.

Here is the [link](https://github.com/thiagooshiro/wall-app-backend) for the WallApp Backend repository

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

And also utilized: Material UI, axios and react-toastfy as additional packages.

## Getting Started

Clone the repository:
```bash
  gitclone git@github.com:thiagooshiro/wallapp-frontend.git
```
Install the packages:
```bash
  npm install
```

Then you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The name of the files indicates the pages of the application, in this app there are three pages: 
  index - Home page of the project
  account - where users can register a new account
  thewall - where are the posts and registered users can make new posts.

The components where separeted by page in the components directory.

## Environemnt Variables

BASE_URL: This is the base url of your app, if you're running locally it will probably be the localhost
BACKEND_PORT: It's the port where the API is running.


## Final Thoughts

There are still work to be done here, but I think the basis of the project is well established, next step would be to create E2E tests and make changes that the app looks better, create functionalities so the user can edit or delete their own posts and problably some other stuff that I'm not remembering right now.

It was really an experience writing this Full Stack application, I learned a lot throughout the process, it become one of my favorite projects and I will surely come back to it in the future. 