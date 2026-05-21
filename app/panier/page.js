'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Panier() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/devis')
  }, [router])

  return null
}
