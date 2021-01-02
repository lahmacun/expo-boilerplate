# Expo Boilerplate with `React Navigation` and `Redux`


Very simple boilerplate for expo managed projects. Including `React Navigation` and `Redux`. And also there is a little counter app sample in this boilerplate.


Directory Structure:
```
Project Root
- App.tsx
- src/
--- AppWrapper.tsx
--- redux/
------ actions/
------ reducers/
--- components/
------ common/
------ homescreen/
--- res/
------ images/
--- screens/
```


Here's the structure that I prefer. I want to explain that structure.
I just put `AppWrapper` and `Provider` component in my `App.tsx` file and create the `store` here. I do not want a messy `App.tsx` file.

In `AppWrapper.tsx` file, I put all my stacks and screens together. Also I put my screens to `src/screens` directory.

I put all my redux related stuff to `src/redux` directory. Reducers and actions are in their own directories in `src/redux`.

`components` directory is for components 😂 &nbsp;I categorize them by screen name or usage. If I use a component in few screens, I put it in `common` directory.
If I use it in just one screen, I put it in `xxxscreen` directory.

Lastly, I put all of my images and resources in `res` directory.

PS: I'm not an expert RN developer. So, if you think something is wrong here, just send a pull request or open an issue.

I wish you all nice year 🥳
