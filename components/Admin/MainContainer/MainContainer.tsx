"use client"
import { useAppSelector } from '@/lib/hooks/hooks'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function MainContainer() {
    const admin = useAppSelector(state=>state.cartReduicer.admin)
    const router = useRouter()
  
  return (
    <div>
      
    </div>
  )
}
