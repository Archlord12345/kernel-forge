import { NextRequest, NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      )
    }

    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: 'Le service de contact n’est pas encore configuré. Écrivez-nous directement à ravelnghomsi@kernelforge.codes.' },
        { status: 503 },
      )
    }

    // Insert into database
    const { error, data } = await supabase
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ])
      .select()

    if (error) throw error

    return NextResponse.json(
      { message: 'Message envoyé avec succès.', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Impossible d’envoyer le message pour le moment.' },
      { status: 500 }
    )
  }
}
