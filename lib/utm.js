'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

/**
 * UTM & Campaign Tracker
 * Captures: utm_source, utm_medium, utm_campaign, utm_content, utm_term
 * Also captures: gclid (Google Ads), gbraid, fbclid (Meta), ttclid (TikTok)
 * Stores in sessionStorage for use in form submissions
 */

export function useUTMCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = [
      'utm_source', 'utm_medium', 'utm_campaign',
      'utm_content', 'utm_term',
      'gclid', 'gbraid', 'fbclid', 'ttclid',
      'tm', 'ap', 'aaid',
    ]

    const captured = {}
    params.forEach((p) => {
      const val = searchParams.get(p)
      if (val) captured[p] = val
    })

    if (Object.keys(captured).length > 0) {
      sessionStorage.setItem('campaign_params', JSON.stringify(captured))
    }
  }, [searchParams])
}

export function getCampaignParams() {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(sessionStorage.getItem('campaign_params') || '{}')
  } catch {
    return {}
  }
}
