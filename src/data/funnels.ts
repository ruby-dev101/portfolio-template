export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
}

export const gymFunnel: Funnel[] = []

export const bookingFunnel: Funnel[] = []

export const websiteFunnel: Funnel[] = [
  {
    file: 'indiewebsite.html',
    label: 'Indie Book Festival',
    tag: 'Website',
    desc: 'A website design project for a book convention.',
    dir: 'samples',
  },
  {
    file: 'fablewebsite.html',
    label: 'Fable Book Convention',
    tag: 'Website',
    desc: 'A website design project for a book convention.',
    dir: 'samples',
  },
  {
    file: 'contractingwebsite.html',
    label: 'Dietterich Contracting',
    tag: 'Website',
    desc: 'A website design project for a contractor.',
    dir: 'samples',
  },
]

/** Tag-to-color map for portfolio categories. */
export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#FF7A1A',
}