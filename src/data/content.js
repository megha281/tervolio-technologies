// All website text lives here, so you can edit copy without touching the components.

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

// "icon" is an SVG path (24x24 grid) drawn by the Services component.
export const SERVICES = [
  {
    title: 'Website Design & Development',
    text: 'Fast, responsive websites designed around what your visitors need to do.',
    icon: 'M3 5h18v14H3z M3 9h18',
  },
  {
    title: 'Custom Software Development',
    text: 'Tools built for the way you work, from internal dashboards to full web apps.',
    icon: 'M8 8l-4 4 4 4 M16 8l4 4-4 4 M13 6l-2 12',
  },
  {
    title: 'AI-Powered Applications',
    text: 'Practical AI features, such as assistants and automation, added where they genuinely help.',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v3 M12 19v3 M2 12h3 M19 12h3',
  },
  {
    title: 'E-commerce Solutions',
    text: 'Online stores with clear product pages, simple checkout and room to grow.',
    icon: 'M3 4h2l2.2 11h10.6L20 7H6.5 M9 20h.01 M17 20h.01',
  },
  {
    title: 'Portfolio & Business Websites',
    text: 'A professional online presence for freelancers, studios and small businesses.',
    icon: 'M4 7h16v12H4z M9 7V5h6v2',
  },
  {
    title: 'Website Maintenance',
    text: 'Updates, fixes and improvements so your site stays secure and current.',
    icon: 'M15 4a4 4 0 00-4 5l-7 7 4 4 7-7a4 4 0 005-4l-3 2-3-3z',
  },
]

export const PROJECTS = [
  {
    kind: 'career',
    name: 'CareerCraft',
    status: 'In development',
    text: 'Our planned resume-building and career-preparation platform. We are designing the experience now. It has not launched and has no users yet.',
    tags: ['Resume builder', 'Career preparation', 'Planned product'],
  },
  {
    kind: 'business',
    name: 'Business Website Solutions',
    status: 'Concept designs',
    text: 'Sample website concepts that show what we can build for small businesses: clear layouts, quick loading and easy updates. These are illustrative concepts, not client work.',
    tags: ['Small business', 'Responsive design', 'Concept'],
  },
]

export const PRINCIPLES = [
  { title: 'Useful technology', text: 'We start with the problem. If a feature does not help the person using it, it does not ship.' },
  { title: 'Clean design', text: 'Clear layouts, readable type and calm interfaces that work well on any screen.' },
  { title: 'Practical solutions', text: 'Straightforward builds you can understand, maintain and grow, without unnecessary complexity.' },
]

export const PROCESS = [
  { title: 'Discover', text: 'We listen to your goals, your audience and your constraints.' },
  { title: 'Plan', text: 'We agree on scope, structure and design direction before building.' },
  { title: 'Build', text: 'We develop in clear stages and share progress so nothing is a surprise.' },
  { title: 'Launch', text: 'We test, publish and make sure you know how to run what we built.' },
]
