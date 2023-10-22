---
title: "The Transition to Native as a Web Developer"
description: "Part 1: It's hard, ok? I'm transitioning from React to React Native, and it's not easy. I'm documenting my journey here, so stay tuned for more updates. I have some plans to build some awesome apps (if I can figure it out)..."
pubDate: "2023-10-22"
hero: "/images/sad-react-native.jpeg"
tags: ["react, react-native, web-development, mobile-development, javascript, typescript, native, react-native-web, react-native-dom, react-native-web-dom, react-native-web-dom"]
layout: "../../layouts/BlogPostLayout.astro"
---
# It's hard, ok?

You see, I've been working with React for a little while now, and I love it. It's fast, flexible, and fun to use. I've built some amazing websites with it, and I'm proud of my skills. But then, we starting building the new version of [Mystlink](https://mystl.ink), and I wanted it to be an app too, to compare and fight against [Linktree](https://linkt.ee) and [Beacons](https://beacons.ai). Sounds simple, right? Just use the same framework, but for a different platform. How hard can it be?

Well, let me tell you: it's hard. Very hard. Like, pulling-your-hair-out hard. Why? Because React Native is not React. Sure, they share some concepts and syntax, but they are very different beasts. React Native is not a web framework. It's a native framework. That means you can't use HTML, CSS, or any of the web APIs you're used to. No more [ShadCN](https://ui.shadcn.com/), no more [DaisyUI](https://daisyui.com/), no more [Framer Motion](https://www.framer.com/motion/)... Instead, you have to use native components, stylesheets, and modules that are specific to each platform (iOS or Android). And trust me, they are not as intuitive or consistent as the web ones.

For example, do you know how to create a simple button in React Native? You can't just use a `<button>` tag. No, you have to use a `<TouchableOpacity>` component, which is a wrapper around a native touchable element. And then you have to style it with a StyleSheet object, which is similar to CSS but not quite which is hard enough as someone who's primarily a developer who uses [Tailwind](https://tailwindcss.com/). And then you have to handle the onPress event, which is similar to onClick but not quite. And then you have to test it on both platforms, because they might look or behave differently. And then you have to repeat this process for every single UI element you need.

Don't get me wrong: I'm not saying React Native is bad. It's actually very powerful and impressive. It allows you to create native apps with TypeScript and React, which is awesome. It has a lot of features and libraries that make development easier and faster. It has a great community. It's definitely the future of mobile development. I'm really excited to start learning Native because I'm hoping it can also do websites too, so then I can just have one codebase for everything, isn't that the damn dream? I'm one dude, I can't do everything, I need to be able to do everything with one codebase, and I'm hoping Native can do that for me.

But it's very challenging and frustrating at times. Especially if you're coming from a web background like me. You have to learn a lot of new things, unlearn some old habits, and adapt to a different environment and workflow. You have to deal with platform-specific issues, debugging tools, performance optimization, and deployment processes. You have to be patient and persistent, two things I am not!

That's why I'm writing this blog post: to share my struggles and tips with you. Maybe you're in the same boat as me, or maybe you're thinking about making the switch someday.

So buckle up, grab your coffee (or tea), and let's dive into the wonderful world of React Native! I'll be documenting my journey here, so stay tuned for more updates. I have some plans to build some awesome apps (if I can figure it out)...