'use client'
import { useRouter } from 'next/navigation'

export const RedirectNoLogin = () => {
    //localStorage.setItem('tKeyId', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FxdWluQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQxNTkxNCwiZXhwIjoxNzAyNTAyMzE0fQ.OJS-03nn0asE5Pf64ku-pfCIp_AraI-whhhxx_p4OHc')
    const router = useRouter()
    !localStorage.getItem('tKeyId') ?
        router.push('/auth/login')
        : <></>
    return (null)
}

