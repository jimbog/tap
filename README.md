TAP.JS for Meteor
===

Description
---

This is a packaged version of the excellent library
(tap.js)[https://github.com/pukhalski/tap]

It handles various user interactions (click, touch, pointer) with a single event 'tap'.
Which gets rid of the 300ms delay in mobile browsers!

Installation
---
`meteor add jimbog:tap`

Use
---
The tap event is used just like any other event, here is an example for
an anchor element:

```javascript
  Template.MyTemplate.events({
    'tap a': function(evt, tmpl){
      evt.preventDefault();
      console.log('you tapped the link');
    }
  })
```
