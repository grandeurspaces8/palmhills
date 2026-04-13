/**
 * POST /api/leads
 * Receives lead form data + campaign params
 * Replace the placeholders below with your CRM / email service
 */

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      name, phone, email,
      unit_type, budget,
      // UTM / campaign tracking
      utm_source, utm_medium, utm_campaign,
      gclid, gbraid, fbclid, ttclid,
      aaid, ap, tm,
    } = body

    // --- Validation ---
    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // --- Build lead object ---
    const lead = {
      name,
      phone,
      email: email || null,
      unit_type: unit_type || null,
      budget: budget || null,
      source: {
        utm_source: utm_source || ap || 'direct',
        utm_medium: utm_medium || tm || null,
        utm_campaign: utm_campaign || null,
        gclid: gclid || null,
        gbraid: gbraid || null,
        fbclid: fbclid || null,
        ttclid: ttclid || null,
        aaid: aaid || null,
      },
      created_at: new Date().toISOString(),
    }

    // -------------------------------------------------------
    // OPTION 1: Send to your CRM (HubSpot, Salesforce, etc.)
    // -------------------------------------------------------
    // const crmRes = await fetch('https://api.hubspot.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`,
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       firstname: name,
    //       phone,
    //       email,
    //       hs_lead_source: lead.source.utm_source,
    //     }
    //   })
    // })

    // -------------------------------------------------------
    // OPTION 2: Send email notification (Nodemailer / Resend)
    // -------------------------------------------------------
    // await sendEmail({ to: process.env.SALES_EMAIL, lead })

    // -------------------------------------------------------
    // OPTION 3: Save to database (Supabase, MongoDB, etc.)
    // -------------------------------------------------------
    // await db.collection('leads').insertOne(lead)

    // -------------------------------------------------------
    // OPTION 4: Send to Google Sheets via Apps Script
    // -------------------------------------------------------
    // await fetch(process.env.SHEETS_WEBHOOK_URL, {
    //   method: 'POST',
    //   body: JSON.stringify(lead),
    // })

    // For now: just log (replace with real integration)
    console.log('📩 New Lead:', JSON.stringify(lead, null, 2))

    return Response.json({ success: true, message: 'Lead received' }, { status: 200 })

  } catch (err) {
    console.error('Lead API error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
