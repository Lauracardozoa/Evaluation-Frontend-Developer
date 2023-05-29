import { NextResponse } from 'next/server'
import User from '@/entities/user'
import courses from '../../courses/data'

export function GET() {
  return NextResponse.json<User>({
    id: '1',
    fullName: 'Charlie Brown',
    email: 'charlie.brown@local.org',
    password: 'Control123*',
    country: 'Mexico',
    courses: [courses[0], courses[2], courses[4]],
  })
}
