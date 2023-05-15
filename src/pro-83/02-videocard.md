---
layout: layout.njk
title: What is the PRO-VIDEO?
permalink: "pro-83/{{ title | slugify }}/"
eleventyExcludeFromCollections: true
tags:
- PRO-83
- PRO-VIDEO
- z80
---
# {{ title }}

So as per the previous article, I have a working PRO-83 computer.
It does all the things the manual claims it does.

But what about that extra card it came with?

The manual claims the slot on the main unit is an S-100 slot, but a number of the pins carry different signals compared to the S-100 spec.
The card that I have is clearly intended to go with this machine though, so whether it's truly S-100 compatible may not be important at the moment.

So what about that card?
- It says PRO-VIDEO on it
- It has a two-pin connector labeled "TV"
- Near the TV connector is an MC6847P video chip and associated circuitry
- It's got a handful of pin headers
- There's an empty socket
- There are three EPROMs labeled U6, U7, and JEU
- There are 8 extra SRAM chips
- There's a switch labeled +5 and +25

Clearly there's some video output here, but it seems like a LOT of extra circuitry and memory chips just for that.

At this point in my "career," I didn't have anything handy that could easily accept what I assumed was an RF signal on the TV connector, so it wasn't as simple as hooking it up and giving it a go.
I'd have to do some digging around "on paper" to get some sense of what's going on.

To start, I constructed a crude adapter to read the old 2532 EPROMs and dumped them to my lab PC.
I couldn't make too much sense of the result at first.
It seemed like *maybe* it was code?
There was a lot of what seemed like junk in there though.

Using the built-in system monitor tool, I was able to locate the memory space for the EPROMs, but something wasn't right.
Big parts of the dump didn't match what I was seeing on the actual system.
There had to be something wrong with my adapter.

Rather than fiddle around with that and risking shorting some pins or otherwise fouling up the irreplaceable EPROMs, I decided to try a different way.
I used an Arduino connected to the parallel IO chip on the PRO-83 to capture data and send it to my PC via the Arduino's serial connection.
After some debugging, I got the PRO-83 program working and dumped the EPROMs to my PC via the Arduino.

Now I had valid ROM dumps and everything matched what I saw on the system itself.
Running them through a Z80 disassembler yielded something that sort of resembled program code, but it would take a lot of work to actually make sense of it. (A topic for a future article, of course)

