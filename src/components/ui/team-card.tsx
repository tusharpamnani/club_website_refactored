import Image from "next/image"
import type { TeamMember } from "../../types/team"
import SocialLinks from "./social-links"

interface TeamCardProps {
  member: TeamMember
  gradient: string
}

export function TeamCard({ member, gradient }: TeamCardProps) {
  return (
    <div className="flex-shrink-0 w-64 rounded-xl overflow-hidden" style={{ background: gradient }}>
      <div className="h-auto bg-black/20">
        <Image
          src={member.profilePic!}
          alt={member.alt}
          width={130}
          height={130}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium">{member.name}</h3>
        <p className="text-gray-200 text-sm">{member.position}</p>
        <SocialLinks socials={member.socials} />
      </div>
    </div>
  )
}

