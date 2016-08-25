# React native experiments...

This is just a repo for doing some experiments of what it is possible to do with RN. Built as a series of experiments, for internal consumption only, but open to the public in case it ends up being useful for someone.

Here are the questions to answer, more or less in order...

* [x] What can we do with **text**?

* [x] How can we make a **button** that has an appropriate mobile feel?

* [x] How do we make **navigation** work with proper transitions?
* [x] How do we make a custom **navbar**?

* [x] What is the best way to integrate **icons** into a RN app?

* [ ] How can we build a **tabbed menu**?
  * [x] How can we build a tabbed menu with native icons?
  * [ ] How can we build a tabbed menu with custom icons?

* [ ] How can we create a **slider menu** (the infamous hamburguer menu) -- even in iOS?
 * [x] How can we have one general slider menu from the left that is always present?
 * [x] How can we have one general slider menu from the left and right that is always present?
 * [x] Understand why, by default, swipe back is from the right (and make it swipe back from the left)?
 * [x] How can we disable a swipe back gesture in a view with a DrawerLayout?
 * [x] How can we hide navigation bar when drawer is inside a scene (and inside the `Navigator` component)?
 * [x] How can we trigger menus from menu icon presses?
 * [ ] How can we address the performance issues when rendering transitions
     between scenes?

* [ ] How do we customize **lists** (`ListView`) -- both items and the overall list look?
  * [x] How can we create **swipe** actions on list items?
  * [ ] How can we add an images to a list item?

* [ ] What kind of form components can we use, and how can we customize them?
  * [ ] In particular, how can we create a Calendar component that is mobile
   friendly (can we use [this native library](https://github.com/jivesoftware/PDTSimpleCalendar))?

* [ ] Create a "filters/settings" view that is triggered from the navigation bar
  * [ ] Add form components to "filters/settings" view

### Nice to have...

* [ ] How can we connect to native components?
* [ ] How to use external package managers such as CocoaPods in React Native?

* [ ] How can we create graphics and plots (is there an alternative to d3.js for react native)?
* [ ] What are the best practices for form validation?

* [ ] What kind of **animations** can we trigger and how?


### List of potentially useful react native libraries

* [React native spinkit](https://github.com/maxs15/react-native-spinkit)
* [React native svg](https://github.com/react-native-community/react-native-svg)
* React native Art (apparently now in core) - and a nice [tutorial](http://browniefed.com/blog/react-native-animated-with-react-art-firework-show/)
* [A list of open source quality native components for iOS](https://medium.com/app-coder-io/27-ios-open-source-libraries-to-skyrocket-your-development-301b67d3124c#.w3gsnhw7d)

## TL;DR

In summary, this repo aims to answer the question of how to customize RN elements as much as possible from a styling perspective.
