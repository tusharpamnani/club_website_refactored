import coursesData from "@/data/courses.json"
import { CourseCard } from "@/components/Resources/course-card"
import type { Course } from "@/types/course"

/**
 * This page displays a list of all available courses in a grid layout.
 * The course data is fetched from the courses.json file, and each course
 * is rendered using the CourseCard component.
 * 
 * The container supports vertical scrolling to handle overflow content
 * while maintaining a fixed height relative to the viewport.
 */

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Courses</h1>
        <div className="h-[calc(100vh-8rem)] overflow-y-auto pr-4 -mr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.courses.map((course: Course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

