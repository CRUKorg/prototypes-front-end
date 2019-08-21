# React Native Workshop

## Getting started
* Follow [React Native Official Guide](https://facebook.github.io/react-native/docs/getting-started.html) to setup development environment
* Ensure all denpendeies setup (i.e: cocoapod..)
* Download [YLD course content](https://www.yld.io/)
    * [Day 1](https://tinyurl.com/rn-yld-auth0-day1-darwin)
    * [Day 2 - Auth0](https://tinyurl.com/rn-yld-auth0-day2-darwin)

### Run course app
`./react-native-basis.app/Contents/MacOS/react-native-basis`

### Run simulator
```
react-native run-ios
```
within simulater

* `cmd + R` to refresh the build
* `cmd + D` to open debug tool

### Link module
After `npm install module_name`, link module to react native
```
react-naive link module_name
```

## Troubleshooting

### iOS
* ensure xCode version works with OSX version
* clear cache
```
watchman watch-del-all
```

```
rm -f /ios/build
```
