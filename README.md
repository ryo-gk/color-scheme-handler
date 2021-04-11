# color-scheme-handler
`color-scheme-handler` is a library to handle color-scheme such as light or dark.

## How to use
#### Install

```
npm install color-scheme-handler
```
or
```
yarn add color-scheme-handler
```

#### Initial load
You need to call `reflectColorScheme()` after Dom is loaded.<br>
`reflectColorScheme` is a function which read color-scheme user use, and reflect css to :root.<br>
If the user use dark mode, `.dark-mode` class is added to the root.<br>
And in case of light mode, `.light-mode` class is added to the root.

```
import { reflectColorScheme } from 'color-scheme-handler'

document.addEventListener('DOMContentLoaded', reflectColorScheme)
```

#### Write style for light mode and dark mode
As mentioned above, `.light-mode` or `.dark-mode` class is added to the css root.<br>
So you can write styles for each color scheme like this.

```
.light-mode {
  background-color: #ffffff;
  color: #333333;
}

.light-mode a {
  color: #1a0dab;
}

.dark-mode {
  background-color: #333333;
  color: #ffffff;
}

.dark-mode a {
  color: #ffffff;
}
```

#### Call "switchColorScheme" when change color scheme
You can call `switchColorScheme()` when you want to change color scheme dark -> light or light -> dark.<br>

```
import { switchColorScheme } from 'color-scheme-handler'

document.getElementById('change-color-scheme').addEventListener('click', switchColorScheme)
```

## API
#### - reflectColorScheme() <br>
Can reflect current color scheme according to session storage value if there is. If no value there, according to OS settings.

#### - switchColorScheme() <br>
Can switch current color scheme.

#### - isColorSchemeDark() <br>
Can get boolean value if current color scheme is dark.

#### - getColorScheme() <br>
Can get current color scheme, 'light' or 'dark'.

#### - setColorScheme(type) <br>
Can set 'light' or 'dark' type as color scheme.

## License
Code released under [MIT license](LICENSE).
