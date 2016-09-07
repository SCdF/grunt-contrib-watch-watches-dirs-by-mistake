# grunt-contrib-watch-watches-dirs-by-mistake
grunt-contrib-watch fires on new root directories even if not asked to

## Problem

When you watch files in your root directory, the task gets fired for new directories created in that directory, even if they do not match what you're supposed to be watching.

## Test case

To reproduce locally:
 - Check out this code base
 - `npm install`
 - Run `grunt`
 - Note that if you edit `shouldFire` you get a message in grunt, which is correct!
 - Note that if you edit `shouldNotFire` you **don't** get a message in grunt, which is _also_ correct!
 - Now create a new directory in the root, e.g. `mkdir blah`
 - 
 
What should happen: Nothing!

What **actually** happens: the `printstuff` watch target fires.

## Additional notes

This only happens for directories. It doesn't matter if `files` is an array or a string.
