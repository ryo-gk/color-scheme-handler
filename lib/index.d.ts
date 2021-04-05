export declare type ColorSchemeType = 'light' | 'dark';
export declare function reflectCurrentColorScheme(): ColorSchemeType;
export declare function switchCurrentColorScheme(): void;
export declare function setColorScheme(type: ColorSchemeType): void;
export declare function isCurrentColorSchemeDark(): boolean;
export declare function getCurrentColorScheme(): ColorSchemeType;
