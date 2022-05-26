# Colorpicker With EasyLogic


This project was created to implement a color picker. It implemented basic functions for color and implemented image filters.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![](https://data.jsdelivr.com/v1/package/npm/easylogic-colorpicker/badge)](https://www.jsdelivr.com/package/npm/easylogic-colorpicker)

[![NPM](https://nodei.co/npm/@easylogic/pure-colorpicker.png)](https://npmjs.org/package/@easylogic/pure-colorpicker)

Document Site: https://colorpicker.easylogic.studio/#colorpicker-for-standalone


# Install 

## npm 

```npm
npm install @easylogic/pure-colorpicker
```

   
# How to use (for  browser) 

```
<link href="https://cdn.jsdelivr.net/npm/@easylogic/pure-colorpicker@latest/dist/style.css" />
<script src="https://cdn.jsdelivr.net/npm/@easylogic/pure-colorpicker@latest/dist/pure-colorpicker.umd.js"></script>
```

# How to use 
 
```
import '@easylogic/pure-colorpicker/style.css'
import ColorPickerUI from '@easylogic/pure-colorpicker' 
```


# Use ColorPicker 

```js
import '@easylogic/pure-colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/pure-colorpicker'

 this.colorPicker = ColorPickerUI.create({
   type: "sketch",
   position: "inline",
   container: document.getElementById('app'),
   color: this.props.value || defaultColor,
   onChange: c => {
     this.changeColor(c);
   }
 });

```

# Use GradientPicker 

```js
import '@easylogic/pure-colorpicker/dist/colorpicker.css';
import ColorPickerUI from '@easylogic/pure-colorpicker'


 this.gradientPicker = ColorPickerUI.createGradientPicker({
   position: "inline",
   container: this.refs.$color.el,
   gradient: 'linear-gradient(to right, white 0%, black 100%)',
   onChange: (gradientString) => {
     console.log(gradientString);
   }
 });


 // set value 
 this.gradientPicker.setValue('radial-gradient(circle, white 0%, black 100%'));

 // get value
 var gradientString = this.gradientPicker.getValue()

```


# Developments 

## local dev 

```
git clone https://github.com/easylogic/pure-colorpicker
cd pure-colorpicker
npm install 
npm run dev 
```

## build 

```
npm run build 
```

# License : MIT 
