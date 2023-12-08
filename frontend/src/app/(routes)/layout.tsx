import { Header } from '@/components/Header/Header'
import RedirectNoLogin from '@/components/RedirectNoLogin/redirectNoLogin'

const routesLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="bg-gradient-to-b from-lightViolet to-darkViolet text-white">
            <RedirectNoLogin />
            <Header />
            {children}
        </main>
    )
}

export default routesLayout