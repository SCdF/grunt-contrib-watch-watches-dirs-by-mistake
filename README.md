# grunt-contrib-watch-watches-dirs-by-mistake
grunt-contrib-watch fires on new directories even if not asked to

## Problem

Tasks gets fired for new directories created in a base directory of a file it is watching, even if they do not match what you're supposed to be watching.

## Test case

To reproduce locally:
 - Check out this code base
 - `npm install`
 - Run `grunt`
 - Note that if you edit `shouldFire` or `shouldFireDir/shouldFire` you get a message in grunt, which is correct!
 - Note that if you edit `shouldNotFire` you **don't** get a message in grunt, which is _also_ correct!
 - Now create a new directory in the root, e.g. `mkdir blah`
 - Or, create a new directory in the `shouldFireDir`, e.g. `mkdir shouldFireDir/blah`
 
What should happen: Nothing! The grunt watch statement:
```js
shouldFire: {
  files: ['shouldFire', 'shouldFireDir/shouldFire'],
  tasks: ['printstuff']
}
```
Has two specific files in it, and nothing else.

What **actually** happens: the `printstuff` watch target fires.

## Additional notes

This only happens for directories: `touch`ing files in directories that watch knows about doesn't cause an issue. It doesn't matter if `files` is an array or a string.
