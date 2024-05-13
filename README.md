# Easy Mobile

Touch gestures for mobile web applications.

Single tap, double tap, drag, pinch and swipe gestures are all supported. 
A little full-screen functionality is also included.

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

Two mixins are provided, one for the touch functionality and one for the full-screen functionality.
They should be assigned to the class's prototype in the usual manner.
In order to make use of the mixins, call their associated enable and disable functions when mounting and unmounting.

### Touches functionality

The following listing gives an example of touch mixin usage:

```
import { Element } from "easy";
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

Note that only one handler is shown. 
The complete list of custom touch events that can be handled is:

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

As well as the usual `event` and `element` first and second arguments, the handlers can take various other arguments.

* The `single-tap` and `double-tap` event handlers as well as the `drag-start` event handler have `top` and `left` additional arguments for the position of the touch.
 
* The `drag-up`, `drag-down`, `drag-left` and `drag-right` event handlers also have `top` and `left` additional arguments but they are relative to the position of the touch at the start of the drag.
 
* The `pinch-start` event handler takes no additional arguments.
 
* The `pinch-move` event handler has a `ratio` additional argument that is the ratio of the distance between the two touch positions divided by the distance between the two starting touch positions.
 
* The `swipe-up`, `swipe-down`, `swipe-left` and `swipe-right` event handlers have `top` and `left` additional arguments for the touch position at the start of the swipe. They also have a `speed` argument which is the speed of the touch position projected in the swipe's direction.

### Full-screen functionality

There are two methods that the full-screen mixin provides along with the usual methods to enable and disable the functionality as well as register or deregister the handler.
The following listing should suffice for an explanation:

```
import { Element } from "easy";
import { fullScreenMixins, fullScreenUtilities } from "easy-mobile";

import FullScreenButton from "../button/fullScreen";

const { isFullScreen } = fullScreenUtilities;

class FullScreenDiv extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    ///
  }

  fullScreenButtonClickHandler = (event, element) => {
    const fullScreen = isFullScreen();

    fullScreen ?
      this.exitFullScreen() :
        this.requestFullScreen();
  }

  didMount() {
    this.enableFullScreen();

    this.onCustomFullScreenChange(this.fullScreenButtonClickHandler)
  }

  willUnmount() {
    this.offCustomFullScreenChange(this.fullScreenButtonClickHandler)

    this.disableFullScreen();
  }

  childElements() {
    return (

      <FullScreenButton onClick={this.fullScreenButtonClickHandler} />

    );
  }

  ...
}

Object.assign(FullScreenDiv.prototype, fullScreenMixins);
```

There is only one full-screen custom event:

* `full-screen-change`

This should always be used as there will be times when full-screen requests are denied.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
