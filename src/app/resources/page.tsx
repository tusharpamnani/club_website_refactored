import coursesData from "@/data/courses.json"
import { CourseCard } from "@/components/ui/course-card"
import type { Course } from "@/types/course"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.courses.map((course: Course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}

