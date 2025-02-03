import type { Resource } from "../../types/resources"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.link}
      className="block group rounded-lg overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-full bg-gradient-to-b from-gray-800 to-gray-900 p-6 transition-all duration-300 hover:from-gray-700 hover:to-gray-800">
        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
        {/* <p className="text-gray-400 text-sm mb-4">{resource.link}</p> */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex gap-2">
            {resource.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}

