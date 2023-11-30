'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { LinkFeed } from '../../utils/Links'

const Sidebar = () => {
    const params = useParams()
    console.log(params.routes);

    return (
        <aside className='p-5 w-52'>
            <ul className='flex flex-col gap-10'>

                {LinkFeed.map(res =>
                    <li key={res.label} className='flex flex-row gap-2 items-center'>
                        <res.icon />
                        <Link href={res.path}>{res.label}</Link>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar