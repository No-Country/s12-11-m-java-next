import { Header } from '@/components/Header/Header'

const routesLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className="bg-gradient-to-b from-lightViolet to-darkViolet text-white w-full">
            <Header />
            {children}
        </main>
    )
}

export default routesLayout