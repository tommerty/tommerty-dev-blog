---
title: "Astro Is The Future of Web Development (And I'm Not Just Saying That Because I'm Using It)"
description: "Astro is more than a static site generator, and I wish people knew that more. It's a framework for building websites and web apps, and it's awesome. Here's why I love it so much and why all my web only projects are based on it..."
pubDate: "2023-10-22 02:20"
hero: "/images/social.jpg"
tags: ["react, react-native, web-development, mobile-development, javascript, typescript, native, react-native-web, react-native-dom, react-native-web-dom, react-native-web-dom"]
layout: "../../layouts/BlogPostLayout.astro"
---
## What is Astro?
Astro is mostly known as being a static site generator, but it's actually much more than that. It's a framework for building websites and web apps, and it's awesome. It has support for standard HTML components inside `*.astro` components, but also has support for React, Svelte, etc! It's also very fast, and has a lot of cool features like server-side rendering, and more. It's also very easy to use, and has a great community.

But unlike other static site generators, Astro can also handle dynamic content and server-side rendering. In fact, Astro is a serious contender to NextJS, the popular React framework for hybrid applications. Let me show you why.

### Any Framework, Anywhere on the DOM

As mentioned before, Astro lets you use any frontend framework you like, or none at all. You can write plain HTML, CSS and JavaScript, or use React, Vue, Svelte, Preact, Solid or any other library of your choice. Astro will automatically optimize your code and bundle only what's needed for each page. This means faster loading times and better performance.

Astro also supports server-side rendering (SSR), which means that your pages will be rendered on the server before being sent to the client. This is great for SEO purposes, as search engines will be able to index your content more easily. It's also great for performance, as the browser doesn't have to wait for the server to render the page before displaying it.

You can also use it to build dynamic applications with server-side rendering and API routes. Astro supports both full and partial hydration, meaning you can choose which parts of your page need interactivity and which don't. This way, you can avoid sending unnecessary JavaScript to the browser and keep your site fast and lightweight. Astro calls this Islands, and it's pretty damn cool. Basically, you can have a fully static page, but make only a single component dynamic, and it'll only load the JS for that component, and nothing else. It's pretty damn cool, and makes it super lightweight. Want a static site with a navbar built in React while having a button that's built in Svelte? You can do that with Astro.

### Markdown, MDX, and other cool things

Astro has some amazing features that make web development fun and easy. For example, you can use MDX to write markdown with embedded components (I'm yet to convert this blog from MD to MDX). This is great for writing blog posts, documentation or landing pages with interactive elements. You can also use Astro's built-in components to add features like image optimization, pagination, RSS feeds([which this blog has if you want to add it to your RSS reader 👀](https://blog.tommerty.click/rss.xml)) or syntax highlighting with zero configuration.

### Personal Experience

I've been using it for about 4 months, and while I've not shipped any production websites yet, I can't wait to. Some things I've built with Astro include:

- [This Blog](https://blog.tommerty.click)
- [My Personal Website](https://tommerty.click)
- [Blurp.app](https://blurp.app) - WIP, but will basically be a blogging platform with a focus on author integrity and ease of use. 
- [Doras.to](https://doras.to) - Our replacement of [Mystlink](https://mystl.ink), which is a link in bio service. We're building the website entirely out of Astro using React, and the app will be built with React Native sharing the same components where possible.

## Want to get started with Astro?

First of all, you need to install Astro on your machine. You can do this by running the following command in your terminal:

```js
npm init astro
```

This will create a new Astro project in your current directory. You can also use a template to start with some pre-configured settings and files. For example, you can use the blog template to create a blog site with Astro:

```js
npm init astro -- --template blog
```

You can see the full list of templates on the Astro website: https://astro.build/docs/installation

Next, you need to choose which frontend framework you want to use with Astro. As mentioned before, you can use any framework you like, or none at all.
To use a frontend framework with Astro, you need to install it as a dependency and import it in your Astro files. For example, if you want to use React, you need to run:

```npm install react react-dom```


You can see the full documentation on how to use different frontend frameworks with Astro here: https://astro.build/docs/core-concepts/component-hydration

Finally, you need to write some code and see the results. Astro uses a file-based routing system, meaning that the structure of your pages matches the structure of your files. For example, if you have a file called `index.astro` in your `src/pages` folder, it will be rendered as the homepage of your site. You can also use dynamic parameters and nested routes to create more complex pages.

To see the results of your code, you need to run the development server by running `npm run dev`. This will start a local server on port 3000 where you can see your site in action. You can also run `npm run build` to generate a production-ready version of your site in the `dist` folder.

As you can see, Astro is a powerful and versatile framework that can handle any kind of web project. Whether you want to build a simple blog, a complex e-commerce site or anything in between, Astro has you covered. If you're curious to learn more, check out their website at https://astro.build/ and give it a try. You won't regret it!

I hope you enjoyed this post and learned something new about Astro. If you have any questions or feedback, feel free to let me know on [Twitter](https://twitter.com/IRLCreate).