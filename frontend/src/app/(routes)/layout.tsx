import { Header } from "@/components/Header/Header"

const routesLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default routesLayout