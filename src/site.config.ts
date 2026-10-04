// Your details, in one place. Change these and the whole site updates.
export const site = {
  name: 'Gbeke Odubanjo',
  role: 'Product Manager. AI Builder.',
  email: 'gbekeodubanjo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gbeke-odubanjo-77376696/',
  cv: '/files/Gbeke-Odubanjo-CV.pdf',
  location: 'Dubai, UAE',
  // Optional: paste a Calendly (or similar) link and "Let's talk" will open it instead of email.
  bookingUrl: '',
};

export const contactHref = site.bookingUrl || `mailto:${site.email}`;
