---
title: 'Automating Your Life #1 — Getting Notified When Your Favourite Movie is Out (via ShoutOUT Lite)'
description: 'ShoutOUT Lite was released a couple of hours ago (as of writing) and this gave me an excuse to mess around with an old project of mine I did called ‘movie-notifier’. To the uninitiated, ShoutOUT Lite…'
date: '2016-12-23T07:15:02.522Z'
categories:
  - Bots
  - Tutorial
  - DIY

published: true
canonical_link: https://blog.imarikar.com/getting-notified-when-your-favourite-movie-is-out-via-shoutout-lite-cd7d7f636e87
redirect_from:
  - /getting-notified-when-your-favourite-movie-is-out-via-shoutout-lite-cd7d7f636e87
---

[ShoutOUT Lite](https://lite.getshoutout.com) was released a couple of hours ago (as of writing) and this gave me an excuse to mess around with an old project of mine I did called ‘movie-notifier’.

_To the uninitiated,_ [_ShoutOUT Lite_](https://lite.getshoutout.com) _is ShoutOUT Lab’s SMS API for Developers, which aims to be more of a pay-as-you-go and streamlined approach to the whole SMS-sending shebang, allowing you to also easily manage sender IDs and view logs and statistics from an easy to use dashboard._

Back when Deadpool was all the craze and amazing an*d you just had to watch the movie*, I really wanted to be able to get notified as soon as tickets were available so I could watch it with my best-friend. I didn’t want spend most of my time refreshing the page just to be able to, so, like any hacker/developer would do, I decided to automate the whole thing.

I tend to prefer Savoy to MC when it comes to movies, just because _[retracted]_, so I snooped around the [EAP Movies](http://eapmovies.com) website, looking for ways I could extract the current movies being played. Anybody who knew me well enough would know that I absolutely loathe scraping websites and would only resort to it as a last measure, so with persistence, I found a little URL endpoint that just responded with movie names wrapped in HTML (which was used to fill that little list box you use when trying to select a movie to purchase tickets for) and that was enough for me.

A couple of hours after and I had finished a rather crude, but functional script that worked, which would notify us via a telegram bot and put it up on my server.

[**ishan-marikar/deadpool-ticket-notifier**  
\_deadpool-ticket-notifier - Notifies you when Savoy starts selling tickets for DeadPool ^^,\_github.com](https://github.com/ishan-marikar/deadpool-ticket-notifier/blob/master/index.js 'https://github.com/ishan-marikar/deadpool-ticket-notifier/blob/master/index.js')[](https://github.com/ishan-marikar/deadpool-ticket-notifier/blob/master/index.js)

It worked. I bought tickets and we enjoyed the movie (although the popcorn was a tad bit overpriced if you ask me). I’d say it was well worth the effort I had put into being notified of it.

As per usual, I then turned it into a module so anybody could plug it in and play with it.

[**movie-notifier-lk**  
\_A simple module to notifier you when your favourite movie is being played at most Sri Lankan cinemas.\_www.npmjs.com](https://www.npmjs.com/package/movie-notifier-lk 'https://www.npmjs.com/package/movie-notifier-lk')[](https://www.npmjs.com/package/movie-notifier-lk)

It’s as easy as cake .. or pie, or cheesecake or .. well, you get the idea.

<Embed src="https://gist.github.com/ishan-marikar/4f60feb598b0affe2e12890981090612.js" aspectRatio={0.357} />

Now Telegram may be the most open and easiest way to integrate into, but not a lot of people used Telegram, and there weren’t many platforms to do this with (at the time, Facebook Bot API wasn’t released yet, but if you ask me: Telegram Bots > Facebook Bots). WhatsApp was out of the question unless you really wanted to get banned, not many people actively check their emails, quite a few percentage of people had Twitter accounts, and the only other solution was SMS. With most SMS gateways, it was a hit or miss, and in my case, it was constantly a miss. Either you had to pay high monthly fees or the API was either insecure-ish, too simple or too unusable, and didn’t seem to suite my little side projects.

ShoutOUT Lite seemed to hit the right balance for me and thus, I tried it again.

<Embed src="https://gist.github.com/ishan-marikar/e473481969a1ad1bc9098beb1d6f02be.js" aspectRatio={0.357} />

![](./asset-1.jpeg)

.. and lo and behold it works. My movie-notifier module is still a bit buggy though (if you think you can make it better/more efficient, I’d absolutely love a pull-request), but I’m satisfied with what I have currently.

I’d even consider turning this into a full fledged web-app where you could set which movies you’d like to get notified of when the tickets are available, and would handle all that for you.
