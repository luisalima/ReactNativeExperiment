# Navigator


To customize the navigator, you need to use `Navigator` and not `NavigatorIOS`. In [https://github.com/facebook/react-native/issues/1219](https://github.com/facebook/react-native/issues/1219):

> I believe that by reading the docs for each it is not too difficult to determine the differences, but agree that it might be useful to have a sentence at the top explaining how they relate to each other.

> Notice how with NavigatorIOS there is no way to add your own custom navigation bar? It uses the native implementation for it. Navigator allows you to write your own component to use as a navigation bar. Additionally, NavigatorIOS adds support for swipe-back, but Navigator has many more transitions available (eg: you can swipe a view down to dismiss it with floatFromTop), and they can be customized as well!

Also from the same issue:

> From what I understand, the two drawbacks Navigator has are swipe-to-go-back and JS driven animations - while there are a number of other benefits. Any view 'controller' that iOS provides can very well be in JS because it is just logic. The view continues to remain native, but the control is now driven from JS. This makes it more customisable.

> Fortunately even the two drawbacks as mentioned can theoretically be fixed. Apple provides a EdgeSwipe UIGestureRecognizer that can be used/enabled on Navigator, to get fluid swipe to go back animation. Also JS driven animations will definitely get better as the RN team is working/exploring it very deeply.

### More on the differences between navigators

http://stackoverflow.com/questions/30033942/what-is-different-between-navigator-and-navigatorios-in-react-native

### A good tutorial for Navigator

https://medium.com/@dabit3/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.f79skyij3

### Navigator demo

https://github.com/h87kg/NavigatorDemo/blob/master/index.ios.js

# Side menu

https://github.com/react-native-community/react-native-side-menu - react native component to make a swipe menu for iOS and Android

http://www.levvel.io/blog-post/an-ios-developers-perspective-on-react-native-part-2 - using a port of `UISplitViewController` to build a hamburguer menu in iOS

# Atom - debugging RN projects

https://nuclide.io/docs/platforms/react-native/

# An overview of developing with React Native

In particular, the fact that updates without submitting to App Store are allowed: https://gist.github.com/nsimmons/d2ae624d2336f4ac436b

# Positioning

http://moduscreate.com/aligning-children-using-flexbox-in-react-native/

# Icons

https://github.com/oblador/react-native-vector-icons

https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f#.r0xpprl1l

# Some more interesting links

https://robots.thoughtbot.com/building-ios-interfaces-swift-primer

http://www.reactnativeexpress.com/