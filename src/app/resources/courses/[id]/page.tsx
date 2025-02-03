import resourcesData from "@/data/resources.json"
import coursesData from "@/data/courses.json"
import { ResourceCard } from "@/components/ui/resource-card"
import { notFound } from "next/navigation"
import type { Course, Resource } from "@/types/course"

export default async function CoursePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { id } = params;

  const course = coursesData.courses.find((course: Course) => course.id === id);
  const resources = resourcesData[id as keyof typeof resourcesData];

  if (!course || !resources) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-gray-400">{course.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource: Resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  )
}