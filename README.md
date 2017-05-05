# console.scope

Little enhancement for the console tool.

## Usage

### console.scope(scope_name, ...args)

The first parameter is the `scope_name`.

Scope accept N arguments.

### console.theme_dark

If you use a dark theme in your console, you must set this value at true.

### console.defineScope(scope_name, font_color, additional_css)

Use this function to predifine the scope style.

The `font_color` accept hexacode or rgb or a predefined color name.

The `additional_css` is to add additional CSS like background color, font-size, font-famile, text-shadow, etc. You must right it in inlinne CSS style.

### console.defineScopes(scopes)

Use this function to predefine multiple scope style

The `scopes` variable is an object, that take has property name the scope name and the proprety is an object with 2 optionnals properties color and css.

## Predefinned color available

red => `#f44336`

pink => `#e91e63`

purple => `#9c27b0`

deepPurple => `#673AB7`

indigo => `#3F51B5`

blue => `#2196F3`

lightBlue => `#03A9F4`

cyan => `#00BCD4`

teal => `#009688`

green => `#4CAF50`

lightGreen => `#8BC34A`

lime => `#CDDC39`

yellow => `#FFEB3B`

amber => `#FFC107`

orange => `#FF9800`

deepOrange => `#FF5722`

brown => `#795548`

grey => `#9E9E9E`

blueGrey => `#607D8B`