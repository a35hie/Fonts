import { defineEntrypoint } from '@a35hie/entrypoints'

export default defineEntrypoint({
  dir: 'css',
  title: 'ash\'s Fonts',
  description: 'My hosted webfont collection.',
  favicon: 'favicon.ico',
  buttons: [
    {
      type: 'prominent',
      title: 'Learn More',
      icon: 'solar:book-line-duotone',
      href: 'https://l.a35.dev/fonts'
    }
  ]
})
