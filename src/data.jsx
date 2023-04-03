import {hatchful,heroicons,ionicons,logo,reactICon,} from './assets/section-icons/'; // prettier-ignore
import { FaRegPaperPlane } from 'react-icons/fa';
import {animista,tachyons,animateCSS,tailwind,cubic} from './assets/section-css/'; // prettier-ignore
import { DiCss3 } from 'react-icons/di';
import {opencolor, maketintsandshades, coolors, colorhunt} from './assets/section-colors/' // prettier-ignore
import { IoColorPaletteOutline } from 'react-icons/io5';

const cssSection = {
  title: 'css and tools',
  linkName: 'css',
  icon: <DiCss3 />,
  items: [
    {
      name: 'Tachyons',
      link: 'https://tachyons.io/',
      icon: tachyons,
      description:
        'Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.',
    },
    {
      name: 'Tailwind css',
      link: 'https://tailwindcss.com/',
      icon: tailwind,
      description:
        'A utility-first CSS framework packed with classes, that can be composed to build any design, directly in your markup.',
    },
    {
      name: 'animista',
      link: 'https://animista.net/',
      icon: animista,
      description: 'creat cool animation with animista css animation library',
    },
    {
      name: 'Animate.css',
      link: 'https://animate.style/',
      icon: animateCSS,
      description:
        'A library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.',
    },
    {
      name: 'cubic-bezier',
      link: 'https://cubic-bezier.com/#.17,.67,.83,.67',
      icon: cubic,
      description: 'easy cubic-bezier generator preview and compare',
    },
  ],
};

const colorSection = {
  title: 'colors and tools',
  linkName: 'colors',
  icon: <IoColorPaletteOutline />,
  items: [
    {
      name: 'Open Color',
      link: 'https://yeun.github.io/open-color/',
      icon: opencolor,
      description:
        'An open-source color scheme, optimized for UI. My go-to resource to choose colors from scratch.',
    },
    {
      name: 'Tint and Shade Generator',
      link: 'https://maketintsandshades.com/',
      icon: maketintsandshades,
      description:
        'Easily create lighter and darker versions of any base color. Perfect for hovers, borders and gradients.',
    },
    {
      name: 'Contrast Checker',
      link: 'https://coolors.co/contrast-checker/112a46-acc8e5',
      icon: coolors,
      description:
        'Tool to check whether two colors have a good contrast ratio. Essential for building accessible websites!',
    },
    {
      name: 'Colorhunt Palettes',
      link: 'https://www.colorhunt.co/',
      icon: colorhunt,
      description:
        "Don't know what colors to use for your website? Colorhunt helps you with beautiful color palettes.",
    },
    {
      name: 'Gradient Maker',
      link: 'https://coolors.co/gradient-maker/ff930f-fff95b',
      icon: coolors,
      description:
        'Collection of beautiful color gradients for you to choose from and export to your project.',
    },
  ],
};

const iconsSection = {
  title: 'icons and logos',
  linkName: 'icons',
  icon: <FaRegPaperPlane />,
  items: [
    {
      name: 'Ionicons',
      link: 'https://ionic.io/ionicons',
      icon: ionicons,
      description:
        'Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font. Completely open source',
    },
    {
      name: 'heroicons',
      link: 'https://heroicons.com/',
      icon: heroicons,
      description:
        'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
    },
    {
      name: 'React Icon',
      link: 'https://react-icons.github.io/react-icons/',
      icon: reactICon,
      description:
        'Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.',
    },
    {
      name: 'LOGO',
      link: 'https://logo.com/',
      icon: logo,
      description: 'Get a free logo and tools to build a brand you love.',
    },
    {
      name: 'hatchful',
      link: 'https://www.shopify.com/tools/logo-maker',
      icon: hatchful,
      description:
        'Hatchful is a logo maker built for entrepreneurs on the go. No design experience is required to create your own logo from scratch',
    },
  ],
};

const data = [cssSection, colorSection, iconsSection];

export default data;
