import Link from 'next/link'
import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from './flowbite-react'

/**
 * The footer of the application
 */
export default function Footer() {
  return (
    <FlowbiteFooter container>
      <FooterCopyright by="NCoding" href="#" year={2021} />
      <FooterLinkGroup>
        <FooterLink as={Link} href="#">
          Regulatory Information
        </FooterLink>
        <FooterLink as={Link} href="#">
          Terms of Use & Privacy Policy
        </FooterLink>
        <FooterLink as={Link} href="#">
          Careers
        </FooterLink>
      </FooterLinkGroup>
    </FlowbiteFooter>
  )
}
