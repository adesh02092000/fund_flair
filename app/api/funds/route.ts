import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const funds = await prisma.fund.findMany({})

  return NextResponse.json(funds)
}
