import { Resource } from "@/types/course"

/*
    * Refer to `src/app/resources/courses/[id]/page.tsx` for more context of this card component
*/

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group rounded-lg overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-6 transition-all duration-300 hover:from-gray-700 hover:to-gray-800"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
      <p className="text-gray-400 text-sm">{resource.description}</p>
    </a>
  )
}

