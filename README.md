# Easy Mobile

Gestures for mobile web applications.

Single tap, double tap, drag and pinch gestures are all supported. Full-screen functionality is also included.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Related projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy RichTextarea](https://github.com/djalbat/easy-richTextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy Layout with [npm](https://www.npmjs.com/):

    npm install easy-mobile

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-mobile.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Two mixins are provided, one for touch functionality and one for full-screen functionality.
They should be assigned to the class's prototype in the usual manner.
In order to make use of the mixins, call their associated enable and disable functions when mounting and unmounting.

```
import { touchMixins } from "easy-movile";

class View extends Element {
  dragUpCustomHandler = (event, element, top, left) => {
    console.log("drag up", top)
  }

  ...

  didMount() {
    this.onCustomDragUp(this.dragUpCustomHandler);
    
    ...

    this.enableTouch();
  }

  willUnmount() {
    this.disableTouch();

    this.offCustomDragUp(this.dragUpCustomHandler);
    
    ...
  }
}

Object.assign(View.prototype, touchMixins);
```

Only one handler is shown here. The complete list of custom events that can be handled is:

* `drag-up`
* `drag-down`
* `drag-left`
* `drag-right`
* `drag-start`
* `swipe-up`
* `swipe-down`
* `swipe-left`
* `swipe-right`
* `pinch-move`
* `pinch-start`
* `single-tap`
* `double-tap`
* `full-screen-change`

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
