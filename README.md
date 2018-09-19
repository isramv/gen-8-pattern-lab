# Gen 8 Pattern Lab

This instance of Pattern Lab was installed with [pattern-lab/edition-drupal-standard pattern-lab](https://github.com/pattern-lab/edition-php-drupal-standard), along with the following components, which were merged:

- [pattern-lab/plugin-drupal-twig-components](https://github.com/pattern-lab/plugin-drupal-twig-components)
- [pattern-lab/starterkit-twig-drupal-minimal](https://github.com/pattern-lab/starterkit-twig-drupal-minimal)


## Development

The steps involved for getting up and running involve installing Composer and Node dependencies, and from there just running Gulp. The Gulp build script handles starting and rebuilding the Pattern Lab instance.

## Initial Installation

### Composer Install

```bash
composer install
```

Composer install will ask you a bunch of questions, here's how you respond:

```bash
the path ./source/_twig-components/filters already exists. merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r >
```

`M`

```bash
the path ./source/_twig-components/functions already exists. merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r >
```

`M`

```bash
the path ./source/_twig-components/tags already exists. merge or replace with the contents of pattern-lab/drupal-twig-components package? M/r >
```

`M`

```bash
update the config option ishMinimum (320) with the value 240? Y/n >
```

`n`

```bash
update the config option ishControlsHide with the value from the package install? Y/n >
```

`n`

```bashupdate the config option styleguideKitPath (/...pl/vendor/pattern-lab/styleguidekit-twig-default) with the value vendor/pattern-lab/styleguidekit-twig-default? Y/n >```

`n`


### NPM Install

```bash
npm i
npm run gulp
```


## Running the Build Script

```bash
npm run gulp
```

IMPORTANT: `npm run gulp` is required UNLESS you have Gulp v4 installed globally. Since it's not released yet, chances are you do not (nor would I recommend this), so be sure to prefix the command with `npm run` which allows for running the locally installed gulp directly through NPM.

### Server

While the Gulp task is running, visit the local BrowserSync UI, which is usually http://localhost:3000.

```bash
[Browsersync] Access URLs:
 -----------------------------------
    Local: http://localhost:3000
 External: http://192.168.1.182:3000
 -----------------------------------
```

Happy coding!

## Architecture

@todo
