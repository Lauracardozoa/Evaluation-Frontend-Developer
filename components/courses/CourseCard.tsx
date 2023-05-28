import Course from '@/entities/course'
import { Card } from '../flowbite-react'

type CourseCardProps = Course & {
  /**
   * Child component to add it to the botton of the card
   */
  actions?: React.ReactNode
}

/**
 * Displays a card with the information of a course
 */
export default function CourseCard({
  portrait,
  title,
  description,
  rating,
  nReviews,
  duration,
  actions,
}: CourseCardProps) {
  return (
    <Card imgSrc={portrait} imgAlt="Course">
      <h5 className="font-bold">{title}</h5>
      <p className="text-justify">{description}</p>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2">
          <span className="font-bold">{rating}</span> ({nReviews})
        </span>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <b className="ml-2">{duration}</b>
      </div>
      {actions}
    </Card>
  )
}
