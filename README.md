# color-scheme-handler
`color-scheme-handler` is a library to handle color-scheme such as light or dark.

## How to use
### Install
`npm install color-scheme-handler`<br>
or<br>
`yarn add color-scheme-handler`

### Initial load
You need to call `reflectCurrentColorScheme()` after Dom is loaded.<br>
`reflectCurrentColorScheme` is a function which read color-scheme user use, and reflect css to :root.<br>
If the user use dark mode, `.dark-mode` class is added to the root.<br>
And in case of light mode, `.light-mode` class is added to the root.

```
import { reflectCurrentColorScheme } from 'color-handler-scheme'

document.addEventListener('DOMContentLoaded', reflectCurrentColorScheme)
```

### Write style for light mode and dark mode
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

### Call "switchCurrentColorScheme" when change color scheme
You can call `switchCurrentColorScheme()` when you want to change color scheme dark -> light or light -> dark.<br>

```
import { switchCurrentColorScheme } from 'color-handler-scheme'

document.getElementById('change-color-scheme').addEventListener('click', switchCurrentColorScheme)
```

## Other API
#### setColorScheme(type) <br>
Can set 'light' or 'dark' type as color scheme.

#### getCurrentColorScheme() <br>
Can get current color scheme, 'light' or 'dark'


## License
Code released under [MIT license](LICENSE).
