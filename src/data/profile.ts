/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Ruby Anne Aguilar',
  firstName: 'Ruby',
  handle: '@ruby_virtualassistant',
  role: 'Website Designer',
  avatarSrc: '/ruby.png',
  verifiedLabel: 'PLACEHOLDER - what the tick means (e.g. a certification)',
  email: 'rubyanneaguilar@gmail.com',
  location: 'Philippines',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '5 yrs', label: 'Freelancer', Icon: Briefcase },
    { value: '3 yrs', label: 'Content Specialist', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Strategic Websites', line2: 'for Service Brands' },
  hero: {
    body: 'I design thoughtful, visually engaging websites that help business owners express their brand, connect with their audience, and show up confidently online.',
    portraitSrc: '/ruby.png',
    portraitAlt: 'Portrait of Ruby Anne Aguilar',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/rubyfunnelpro/', iconPath: '/icons/facebook.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/rubyanneaguilar/', iconPath: '/icons/linkedin.svg' },
    { label: 'Instagram profile', href: 'https://www.instagram.com/ruby_virtualassistant/', iconPath: '/icons/instagram.svg' },
  ],
}
