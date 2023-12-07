import { Header } from "@/components/Header/Header"

const routesLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-b from-lightViolet to-darkViolet text-white">
                {children}
            </main>
        </>
    )
}

export default routesLayout