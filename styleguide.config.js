const path = require('path');

module.exports = {
  assetsDir: 'src/lib/assets/',
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*-helper-*.js',
  ],
  require: [
    path.join(__dirname, 'src/lib/index.css'),
    path.join(__dirname, 'src/lib/style/styleguidist.css'),
  ],
  sections: [
    {
      name: 'Decred UI React',
      content: 'src/lib/docs/ui.md',
    },
    {
      name: 'Color themes',
      content: 'src/lib/docs/themes.md',
    },
    {
      name: 'Icons',
      content: 'src/lib/docs/icons.md',
    },
    {
      name: 'Buttons',
      content: 'src/lib/components/buttons/buttons.md',
      components: 'src/lib/components/buttons/**/*.js',
    },
    {
      name: 'Feedback',
      content: 'src/lib/components/feedback/feedback.md',
      components: 'src/lib/components/feedback/**/*.js',
    },
    {
      name: 'Layout',
      content: 'src/lib/components/layout/layout.md',
      components: 'src/lib/components/layout/**/*.js',
    },
    {
      name: 'Text',
      components: 'src/lib/components/text/*.js',
    },
    {
      name: 'Custom styles',
      content: 'src/lib/components/style/readme.md',
    },
    {
      name: 'Animations',
      content: 'src/lib/components/animations/readme.md',
    },
  ],
  showUsage: true,
  styles: {
    Logo: {
      logo: {
        color: '#2ED6A1',
      },
    },
    SectionHeading: {
      sectionName: {
        borderBottom: '2px solid #0C1E3E',
        fontWeight: 'bold',
        marginBottom: 20,
        textDecoration: 'none !important',
      },
    },
  },
  theme: {
    color: {
      link: '#2ED6A1',
      linkHover: '#2971FF',
      sidebarBackground: '#0C1E3E',
    },
    fontFamily: {
      base: '"DefaultText", sans-serif',
    },
    fontSize: {
      base: 15,
      text: 16,
      small: 12,
      h1: 24,
      h2: 18,
      h3: 16,
      h4: 14,
      h5: 12,
      h6: 12,
    },
    sidebarWidth: 200,
  },
  title: 'Decred UI style guide',
};
