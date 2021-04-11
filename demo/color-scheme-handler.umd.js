(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ColorSchemeHandler = {}));
}(this, (function (exports) { 'use strict';

    var WebStorage = function WebStorage(type) {
        this.storage = type === 'local'
            ? window.localStorage
            : window.sessionStorage;
    };
    WebStorage.prototype.get = function get (key) {
        return this.storage.getItem(key);
    };
    WebStorage.prototype.set = function set (key, value) {
        this.storage.setItem(key, value);
    };

    var COLOR_SCHEME = 'color-scheme';
    function reflectColorScheme() {
        if (isColorSchemeDark()) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
        setColorScheme(getColorScheme());
        return getColorScheme();
    }
    function switchColorScheme() {
        var oldColor = getColorScheme();
        var newColor = oldColor === 'light' ? 'dark' : 'light';
        setColorScheme(newColor);
    }
    function isColorSchemeDark() {
        return getColorScheme() === 'dark';
    }
    function getColorScheme() {
        var storage = new WebStorage('session');
        if (storage.get(COLOR_SCHEME) == null) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        else {
            return storage.get(COLOR_SCHEME);
        }
    }
    function setColorScheme(type) {
        var storage = new WebStorage('session');
        storage.set(COLOR_SCHEME, type);
        if (type === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }

    exports.getColorScheme = getColorScheme;
    exports.isColorSchemeDark = isColorSchemeDark;
    exports.reflectColorScheme = reflectColorScheme;
    exports.setColorScheme = setColorScheme;
    exports.switchColorScheme = switchColorScheme;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=color-scheme-handler.umd.js.map
