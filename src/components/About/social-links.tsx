import { SlSocialInstagram } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import type { SocialLinks } from "../../types/team"

/**
 * SocialLinks Component
 * 
 * This component renders social media icons (LinkedIn and Instagram) with clickable links.
 * It checks if the provided `socials` prop contains LinkedIn and Instagram URLs,
 * and displays the corresponding icons with hover effects.
 * 
 * Refer to 'src/components/about/team-card.tsx' for more context on how this component is used.
 */

interface SocialLinksProps {
  socials?: SocialLinks;
}

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="flex gap-2 mt-2">
      {socials?.linkedin && (
        <a
          href={socials?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <LuLinkedin className="w-5 h-5" />
        </a>
      )}
      {socials?.instagram && (
        <a
          href={socials?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
          aria-label="Instagram Profile"
        >
          <SlSocialInstagram className="w-5 h-5" />
        </a>
      )}
    </div>
  )
}
