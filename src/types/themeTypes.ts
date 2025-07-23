type Theme = 'light' | 'dark';

export type themeState = {
    theme: Theme,
    toggleTheme: () => void,
    setTheme: (theme: Theme) => void
}