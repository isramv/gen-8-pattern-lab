module.exports = {
  basePath: './',
  tasks: {
    css: {
      enabled: true,
      type: 'default',
      src: [
        'source/_patterns/**/*.scss',
        'source/css/src/**/*.scss'
      ],
      dest: './source/css/dist',
      outputStyle: 'expanded',
      includePaths: [
        './source/_patterns/00-base',
        'node_modules'
      ],
      autoPrefixerBrowsers: [
        'last 2 versions',
        '>= 1%',
        'ie >= 11'
      ],
      removeSourceComments: false,
      flattenDest: true,
      lint: true,
    },
    js: {
      enabled: true,
      type: 'default',
      src: [
        'source/_patterns/**/*.js',
        'source/js/src/**/*.js'
      ],
      dest: './source/js/dist',
      concat: {
        enabled: false,
        dest: 'all.js'
      },
      babel: true,
      uglify: false,
      lint: true
    },
    images: {
      enabled: true,
      type: 'default',
      src: [
        'source/images/src/**/*{.png,.gif,.jpg,.jpeg,.svg}'
      ],
      dest: './source/images/dist',
      flattenDest: false
    },
    icons: {
      enabled: false,
      type: 'default',
      src: [
        'source/icons/src/**/*.svg'
      ],
      dest: './source/icons/dist',
      destName: 'icons.svg'
    },
    patternLab: {
      enabled: true,
      type: 'default',
      basePath: './',
      watchedExtensions: ['twig', 'yml', 'yaml', 'json', 'md', 'css', 'js'],
      scssToYml: [
        {
          scss: '_patterns/00-base/00-colors/_variables.scss',
          yml: '_patterns/00-base/00-colors/colors.yml'
        },
        {
          scss: '_patterns/00-base/01-typography/_variables.scss',
          yml: '_patterns/00-base/01-typography/typography.yml'
        },
        {
          scss: '_patterns/00-base/02-breakpoints/_variables.scss',
          yml: '_patterns/00-base/02-breakpoints/breakpoints.yml'
        },
        {
          scss: '_patterns/00-base/03-grid/_variables.scss',
          yml: '_patterns/00-base/03-grid/grid.yml'
        },
        {
          scss: '_patterns/00-base/04-spacing/_variables.scss',
          yml: '_patterns/00-base/04-spacing/spacing.yml'
        },
        {
          scss: '_patterns/02-molecules/00-styles/_variables.scss',
          yml: '_patterns/02-molecules/00-styles/styles.yml'
        }
      ],
    }
  },
  browserSync: {
    enabled: true,
    baseDir: './public',
    startPath: '',
    domain: '',
    startupBehavior: false,
    ui: false,
  }
};
