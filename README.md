<h1 align="center">Default Shades for TailwindCSS</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/tailwindcss-default-shades)](https://bundlephobia.com/package/tailwindcss-default-shades)
[![license](https://img.shields.io/github/license/brandonmcconnell/tailwindcss-default-shades?label=license)](https://github.com/brandonmcconnell/tailwindcss-default-shades/blob/main/LICENSE)
[![version](https://img.shields.io/npm/v/tailwindcss-default-shades)](https://www.npmjs.com/package/tailwindcss-default-shades)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

</div>

`tailwindcss-default-shades` simplifies working with color shades by introducing default aliases. It is a function that wraps the colors defined in your Tailwind CSS config file. With `tailwindcss-default-shades` in use, you can use colors without specifying a shade, like `bg-blue` instead of `bg-blue-500`.

- [Installation](#installation)
- [Usage](#usage)
  - [Specifying Default Shades](#specifying-default-shades)
    - [Example: Single Default Shade](#example-single-default-shade)
    - [Example: Granular Default Shades](#example-granular-default-shades)
- [Why Use `tailwindcss-default-shades`](#why-use-tailwindcss-default-shades)

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-default-shades
```

## Usage

By default, `tailwindcss-default-shades` automatically maps the `500` shade of each color as its base name. This means that specifying a class like `bg-blue` will effectively apply the `bg-blue-500` shade.

```js
const defaultShades = require('tailwindcss-default-shades');

module.exports = {
  plugins: [
    defaultShades({
      blue: {
        // ...
        500: '#3b82f6',
        // ...
      }
    }),
  ]
};
```

In this example, the `bg-blue` class will apply the `bg-blue-500` shade, `#3b82f6`.

The default shade can, however, be overridden by specifying a different shade as the second argument in the `tailwindcss-default-shades` function, or even an object specifying which shade to use per color in your colors object, with an optional fallback for unspecified colors, which also defaults to `500`.

### Specifying Default Shades

If you wish to customize the default shades for specific colors, you can do so by providing a different shade key, or an object with the color name as the key and the default shade as the value, as the second argument in the `tailwindcss-default-shades` function.

#### Example: Single Default Shade

```js
const defaultShades = require('tailwindcss-default-shades');

module.exports = {
  plugins: [
    defaultShades({
      red: { /* your shades */ },
      green: { /* your shades */ },
      blue: { /* your shades */ },
    }, 300),
  ]
};
```

In this example, the `bg-blue` class will apply the `bg-blue-300` shade, and the `bg-red` and `bg-green` classes will apply the `bg-red-300` and `bg-green-300` shades, respectively.

#### Example: Granular Default Shades

```js
const defaultShades = require('tailwindcss-default-shades');

module.exports = {
  plugins: [
    defaultShades({
      red: { /* your shades */ },
      green: { /* your shades */ },
      blue: { /* your shades */ },
    }, {
      DEFAULT: 100,
      red: 300,
      green: 400,
    }),
  ]
};
```

In this example, the `bg-red` class will apply the `bg-red-300` shade, the `bg-green` class will apply the `bg-green-400` shade, and the `bg-blue` class will apply the `bg-blue-100` shade because it falls back to the `DEFAULT` shade. Had `DEFAULT` not been specified in this example, the `bg-blue` class would have applied the `bg-blue-500` shade, as `500` is the general default shade.

## Why Use `tailwindcss-default-shades`

`tailwindcss-default-shades` enhances your workflow by reducing the need to specify shades explicitly when a default shade suffices. This leads to cleaner, more readable utility class usage without sacrificing the flexibility and power that Tailwind CSS offers.

---

To experiment with `tailwindcss-default-shades`, try out the demo here on Tailwind Play: https://play.tailwindcss.com/x7YCj9Dauo

I hope you find `tailwindcss-default-shades` a valuable addition to your Tailwind CSS toolkit. If you have any feedback or suggestions, don't hesitate to open an issue or pull request.

Enjoy more simplified styles with `tailwindcss-default-shades`! 🚀

---

I hope you find `tailwindcss-default-shades` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.

If you liked this, you might also like my other Tailwind CSS plugins:
* [tailwindcss-multi](https://github.com/brandonmcconnell/tailwindcss-multi): Group utilities together by variant
* [tailwindcss-signals](https://github.com/brandonmcconnell/tailwindcss-signals): Apply styles based on parent or ancestor state, a state-driven alterative to groups
* [tailwindcss-members](https://github.com/brandonmcconnell/tailwindcss-members): Apply styles based on child or descendant state, the inverse of groups
* [tailwindcss-mixins](https://github.com/brandonmcconnell/tailwindcss-mixins): Construct reusable & aliased sets of utilities inline
* [tailwind-lerp-colors](https://github.com/brandonmcconnell/tailwind-lerp-colors): Expand your color horizons and take the fuss out of generating new—or expanding existing—color palettes
* [tailwindcss-selector-patterns](https://github.com/brandonmcconnell/tailwindcss-selector-patterns): Dynamic CSS selector patterns
* [tailwindcss-js](https://github.com/brandonmcconnell/tailwindcss-js): Effortless build-time JS script injection
* [tailwindcss-directional-shadows](https://github.com/brandonmcconnell/tailwindcss-directional-shadows): Supercharge your shadow utilities with added directional support (includes directional `shadow-border` utilities too ✨)