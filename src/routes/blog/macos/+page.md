---
title: "How I use my Mac"
date: "2023-03-24"
---

I'm frequently asked how I make macOS work for me, so I figured it
would be useful to have a single place I can point people to with all of the
configurations I make and the apps I use.

# Configuration

## Hot Corners


[Hot Corners](https://support.apple.com/guide/mac-help/use-hot-corners-mchlp3000/mac) allows you to assign an action
to each of the corners of your screen. When you move your mouse pointer to that corner, the assigned action is preformed.

<div style="text-align: center;">
	<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/hotcorners.png" height="60%" width="60%"/>
</div>

While not immediately obvious, you can assign a modifier key (`command`, `shift`, `option` or `control`) that needs to be
pressed when your mouse enters the hot corner. To do this, just hold down the modifier when selecting the action. This makes
accidental activations of your hot corner actions significantly less common.

## Key Repeat Speed and Delay
I set the key repeat speed higher than is possible through the slider in Settings.app and the key repeat delay slower than
is possible. This drastically decreases the amount of time it takes to delete a sentence or a line of code. I know their are faster ways to do this, especially in a text editor like [Vim](https://www.vim.org/) but holding down backspace is muscle memory at this point. I couldn't break this habit even if I wanted to.

You can use the following shell commands to accomplish this:

### Key Repeat Speed

```shell
defaults write -g KeyRepeat -int 1

# return to default:
defaults write -g KeyRepeat -int 2
```

### Key Repeat Delay
```shell
defaults write -g InitialKeyRepeat -int 10

# return to default
defaults write -g InitialKeyRepeat -int 15
```

You will need to log out and log back in for the changes to go into effect.


### Remapping Caps Lock to Escape

I never use the Caps Lock key for its intended function and use Vim key bindings whenever they are available. Remapping the
Caps Lock key to escape means I need to move my fingers significantly less in order to switch modes. I've also noticed
myself using the Caps lock key to dismiss modal alerts.

# Apps

## Utilities

### 1Password

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/1password.png" width="108px" height="108px"/>

### [Magnet](https://apps.apple.com/us/app/magnet/id441258766?mt=12)

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/magnet.png" height="100px" width="100px"/>

I'm not a fan of how macOS handles window management out of the box. While Apple has tried over the years to improve the window
management situation, like with [Split View](https://support.apple.com/en-us/HT204948) and
[Stage Manager](https://support.apple.com/en-us/HT213315), I still find myself turning to third party solutions to allow me to
manage my windows in a way that makes sense to my brain.

Magnet enables Windows style window snapping and also allows you to bind common window management tasks, like snapping a window
to half of the screen to a keyboard shortcut. I've tried a whole bunch of utilities over the years but in my experience
magnet has been the most reliable.

You can purchase Magnet for $7.99 on the [App Store](https://apps.apple.com/us/app/magnet/id441258766?mt=12). Free alternatives
like [Rectangle](https://rectangleapp.com) also exist.

### [Bartender](https://www.macbartender.com/)
<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/bartender.png" height="128px" width="128px"/>

As you start to install more apps on your mac you'll quickly realize that the menu bar gets pretty cluttered. While some apps
allow you to disable their menu bar items, a surprising amount don't. This is incredibly frustrating and I really wish macOS
offered a built-in way to handle this. Fortunately, a whole bunch of third party apps exist to help fix this.

My app of choice, Bartender provides a whole bunch of tools that help you to take control of your menu bar.
The most important is its ability to hide just about any menu bar item from your menu bar.

<div style="text-align: center;">
	<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/bartender-menu-bar.png" width="75%" height="75%"/>
</div>

Bartender also gives
you a second menu bar that becomes visible when clicking on the Bartender menu bar item. I have a handful of menu bar
items that I always want to see, like my CPU and memory usage through iStat Menus and my upcoming events through Fantastical.
Some others are useful but don't always need to be taking up menu bar, for instance the Google Drive menu bar item that I only need to if my files
stop syncing. Bartender does do a whole bunch more but I haven't really experimented with its power user features like Quick Search and Triggers.

Bartender can be purchased from the [developers website](https://www.macbartender.com/) for $16.00 and is also available on [Setapp](setapp.com).
While I haven't used it myself, [Dozer](https://github.com/Mortennn/Dozer) is a free and open source alternative that is less powerful but still
allows you to hide menu bar items.

### [Permute](https://software.charliemonroe.net/permute/)
<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/permute.png" width="128px" height="128px"/>

Permute is a simple utility that allows you to convert between file formats. While this can be done on the command line,
I prefer having a GUI app since I'm horrible and remembering commands. With Permute all that I need to do to convert a file is drag it
onto permutes dock icon and choose the file format.

<div style="text-align: center;">
	<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/permute-screenshot.png" width="50%" height="50%"/>
</div>

Permute costs $14.99 but if you are a student you can get a 30% discount if you buy it through the
[developers website](https://software.charliemonroe.net/permute/).

### [Maestral](https://github.com/samschott/maestral)

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/Maestral.png" width="128px" height="128px"/>

Maestral is a third party Dropbox client that is much less bloated than the official client. It's rock solid and using it doesn't
count against your device limit on the Dropbox free tier.

Maestral is free and open source and can be downloaded from [GitHub](https://github.com/samschott/maestral).

### [Gestimer](https://apps.apple.com/us/app/gestimer/id990588172?mt=12)

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/Gestimer.png" width="128px" height="128px"/>

Until macOS Ventura, macOS did not have a built-in way to start timers. Because of that I spent a bunch of time trying to find
an easy to use timer app, during that search I came across Gestimer.

Gestimer lives in the menu bar and lets you create timers by dragging the menu bar icon. When a timer is completed you'll get a
push notification.

Gestimer is available for $3.99 on the [Mac App Store](https://apps.apple.com/us/app/gestimer/id990588172?mt=12).

I love Gestimer because of its creative UI and its ability to create multiple named timers which is something the Clock app added
in macOS Ventura cannot do.

## Productivity Apps

### Fantastical

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/fantastical.png" width="128px" height="128px"/>

### CleanShot X

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/cleanshot.png" width="128px" height="128px"/>

### Tot

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/tot.png" width="128px" height="128px"/>

Tot is a simple but very elegant app created by [the iconfactory](https://iconfactory.com). It provides you 7 "Dots" which are basically just
individual text files.

<div style="text-align: center;">
	<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/tot-screenshot.png" width="75%" height="75%"/>
</div>

I use Tot daily for a whole bunch of things like planning out my agenda for the day and a scratchpad to draft out text messages and emails
before I send them.

Tot can be downloaded for free from the [Mac App Store](https://apps.apple.com/us/app/tot/id1491071483?mt=12). It also has an accompanying
[iOS app](https://apps.apple.com/us/app/tot-pocket/id1498235191) which can be purchased for $19.99 and a standalone
[watchOS](https://apps.apple.com/us/app/tot-mini/id1644609331) app that is available for $1.99.

### WallCal

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/Wallcal.png" width="128px" height="128px"/>

WallCal is a really snazzy app that adds your calendar to your desktop. While apps like Fantastical let you see your calendar in
the menu bar or a widget, nothing can beat the convenience just having your calendar live on your desktop.

WallCal can be downloaded from the [Mac App Store](https://apps.apple.com/app/wallcal-wallpaper-calendar/id1581367286) for free
(with an $11.99 in-app purchase to unlock all of its features) or through [Setapp](https://setapp.com).

### Craft

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/craft.png" width="128px" height="128px"/>

## Developer Tools
## GitFinder

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/GitFinder.png" width="128px" height="128px"/>

## Transmit

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/Transmit.png" width="128px" height="128px"/>

## Nova

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/nova.png" width="128px" height="128px"/>

## GitUp

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/gitup.png" width="128px" height="128px"/>

## iTerm

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/iterm.png" width="128px" height="128px"/>

## Kalidescope

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/kaleidoscope.png" width="128px" height="128px"/>

## Monodraw

<img src="https://s3.csh.rit.edu/lontronix-website/blog/macos/monodraw.png" width="128px" height="128px"/>
