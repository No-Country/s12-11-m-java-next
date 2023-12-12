'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const RedirectNoLogin = () => {
    const [log, setLog] = useState('false')
    useEffect(() => {
        localStorage.getItem('tKeyId') !== null ? setLog(`${localStorage.getItem('tKeyId')}`) : setLog(log)
    }, [])
    const router = useRouter()
    log === 'false' ? router.push('/auth/login') : <></>
    return (null)
}

