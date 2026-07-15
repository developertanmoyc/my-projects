import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// We must handle CORS so your web browser allows the connection
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Get the user's message from the frontend
    const { message } = await req.json()
    
    // 2. Get your hidden Gemini API Key from Supabase Secrets
    const apiKey = Deno.env.get('GEMINI_API_KEY')

    // 3. Talk to Google Gemini
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: `You are an English Grammar Tutor for a quiz app called Quizlish. Keep answers short, friendly, and helpful. The student asks: ${message}` }]
        }]
      })
    })

    const data = await response.json()
    
    // 4. Extract the text and send it back to the frontend
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      const aiText = data.candidates[0].content.parts[0].text
      return new Response(
        JSON.stringify({ answer: aiText }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    } else {
      throw new Error("Invalid response from AI")
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ answer: "Oops! My connection to the AI is broken." }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    )
  }
})