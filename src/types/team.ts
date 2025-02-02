export interface SocialLinks {
    linkedin?: string
    instagram?: string
  }
  
  export interface TeamMember {
    name: string
    position: string
    alt: string
    profilePic?: string
    socials: SocialLinks
  }
  
  export interface TeamSection {
    title: string
    discord?: string
    tags: string[]
    bgColorStyle: {
      background: string
    }
    members: TeamMember[]
  }
  
  