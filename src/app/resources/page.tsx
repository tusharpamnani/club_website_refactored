import resourcesData from "@/data/resources.json"
import { ResourceCard } from "../../components/ui/resource-card"
import type { Resource } from "@/types/resources"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-white mb-8">Resources</h1>
        <div className="h-[calc(100vh-8rem)] pr-4 -mr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData.resources.map((resource: Resource, index: number) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

