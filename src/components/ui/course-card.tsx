import Link from "next/link"
import Image from "next/image"
import type { Course } from "@/types/course"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/resources/courses/${course.id}`} className="block group">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-50" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
          <p className="text-gray-200 text-sm">{course.description}</p>
        </div>
      </div>
    </Link>
  )
}

