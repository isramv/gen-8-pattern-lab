---
state: documentation
---

Helper classes are available, along with Sass mixins:

- The `font-size()` mixin converts `px` to `rem` units based on the `$base-font-size` variable. It should be used to the assign `font-size` property to a given element in SCSS.

    ```scss
    @include font-size(14px);
    ```

- The `font()` mixin provides a shorter syntax for referencing fonts, and should be used to assign font family to a given element in SCSS.

    ```scss
    @include font('avenir', 'light');
    ```
