'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RedirectNoLogin = () => {
    const [log, setLog] = useState('false')
    useEffect(() => {
        localStorage.getItem('tKeyId') ? setLog(`${localStorage.getItem('tKeyId')}`) : setLog(log)
    }, [])
    const router = useRouter()
    log === 'false' ? router.push('/auth/login') : <></>
    return (null)
}

export default RedirectNoLogin