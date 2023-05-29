import Course from '@/entities/course'
import { NextResponse } from 'next/server'
import data from './data'

export function GET() {
  return NextResponse.json<Course[]>(data)
}
