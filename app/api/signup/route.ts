// Create: app/api/signup/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const response = await fetch(process.env.SIGN_UP_API_KEY!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([formData])
    })
    
    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to submit' }, 
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API Route error:', error)
    return NextResponse.json(
      { success: false, error: 'Server error' }, 
      { status: 500 }
    )
  }
}
