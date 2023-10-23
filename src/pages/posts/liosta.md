---
title: "Liosta - My First React Native App"
description: "Join me on my journey where I discuss the idea behind my first ever app using react native, expo, typescript, and gluestack"
pubDate: "2023-10-23 14:50"
hero: "/images/social.jpg"
tags: ["react, react-native, web-development, mobile-development, javascript, typescript, native, react-native-web, react-native-dom, react-native-web-dom, react-native-web-dom"]
layout: "../../layouts/BlogPostLayout.astro"
---

## Introduction
For a quick overview, I built Liosta because I was looking for a simple todo app for me and my partner to help manage things like what we want when going shopping, simple tasks to do around the house, etc. All todo apps are overly complicated, force ads for free versions, or just some other shady practises. I just wanted a simple todo app so we can just manage everything day to day. If it's on the list, it needs to be completed/bought/etc.

## The Development Process
If you remember from my previous post, I've been wanting to transfer over from a web development background over to app development. Being someone who uses React & Typescript, it only made sense I give [Expo](https://expo.dev) a shot. Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase. It's also free and open source, and will always be free and open source.

### How I started
I started like everyone else, seaching [YouTube](https://youtube.com). I found a channel called [Simon Grimm](https://www.youtube.com/@galaxies_dev) who has great videos on the matter, and followed along with [one of his livestream VODS](https://www.youtube.com/live/IhzrgITqOWE?si=601eZQQZU2C83nNe) to learn Expo Router which really helped me get my foot in the door. While I understood file based routing thanks to [Astro](https://astro.build), the `_layout` files were confusing to me, as well as the `<Stack>` components, but he went over everything in just over an hour, and I was able to understand.

### UI Design
I simply cloned the basic app I built following [Simon Grimm](https://www.youtube.com/@galaxies_dev)'s tutorial, and starting planning. I knew I wanted two pages to start with; the main app itself, and a little info window where I could further explain why I built it, and how it works.

I started looking for a UI library, as I'd usually use the likes of [DaisyUI](https://daisyui.com) or [ShadCN](https://ui.shadcn.com) with [TailwindCSS](https://tailwindcss.com), however it's not that simple on mobile. [TamaGUI](https://tamagui.dev/) looked promising, but seemed overly complicated, and eventually settled on [Gluestack](https://www.gluestack.io/). From my brief testing it wasn't perfect, but it had enough for me to get started. In the future I'll dig in and see if I can get more used to it, or if I should find something else. If you have any ideas, let me know!

### Functions
From that point, I created a container element, and using flex I added a `grip` icon, an input box, and a checkbox. I then hit up my ol' buddy [GitHub Copilot](https://copilot.github.com) and broke everything down. I'm no expert at Typescript, and knew I needed the help. I first told it that when I click the `Add` button, it should create a new `ItemBox`; it done it seemlessly. Then I was like "ok, you see that grip icon? I wanna drag it and reorder everything" and was basically like "I got you sham" and started adding in all the native dependancies from Native and got it working. It at first wasn't working with the icon but anywhere on the `ItemBox` which made it impossible to scroll, but after giving out to it a few times, it figured it out.
The checkbox was a pain. Until this morning I was facing a bug where that if you checked the top item, it got deleted but then it'd auto check and delete anything below it in a row, and you slowly just watch all your items get removed and you can't do anything to stop it. This was my first bug.

### The Bug
This was the first time I was having to be the one to troubleshoot the Typescript, because Copilot was just being funny, and even though I knew which type it was coming from, Copilot wouldn't listen and kept insisting it was the const for removing the item, specifically the "checked" status, where the bug was actually to do with the `CheckboxCheck` component. I made `isChecked` a boolean to set the state, and setup a `timeoutId` so `(ifChecked)` becomes `false`. This resolved my issues, and I was able to focus on the colorset, which isn't that important.. I just chose a color and went with it.

### Pre Release
As of the time of writing, the app isn't released yet. I'm going to be releasing it on Android first, then on iOS in a few weeks. I don't have an iPhone to properly test the app, so I'm getting an iPad and will test there in a few weeks once it arrives.

### Future Plans
I eventually want to bring in some cloud integration so I can add more features like sync. I'll also be adding features like creating multiple lists, and the option to share a list with another user, as this was the entire purpose of the application. I might stay away from invites and such like that, and just use a `UID` a user generates and shares with another user to authenticate, but I'm not entirely sure yet.

## Conclusion
I'm delighted with the outcome of my app and genuinely eager to explore the future of app development. The journey ahead is filled with promise and potential, and I can't wait to see where my skills take me.
The possibilities in the world of app development are limitless, and I'm excited to embark on this creative journey.

If you want to take a look at the app, feel free to check it out on [GitHub](https://github.com/tommertom/liosta)