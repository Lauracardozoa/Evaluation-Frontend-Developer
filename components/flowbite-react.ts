'use client'

/**
 * `flowbite-react` is a third-party package and its components do not have the
 * 'use client' directive, so the following workaround
 * https://nextjs.org/docs/getting-started/react-essentials#third-party-packages
 * is used
*/

import { Footer } from 'flowbite-react'

export * from 'flowbite-react'
export const FooterCopyright = Footer.Copyright
export const FooterLink = Footer.Link
export const FooterLinkGroup = Footer.LinkGroup
