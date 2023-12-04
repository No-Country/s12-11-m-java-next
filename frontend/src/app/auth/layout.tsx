import Link from "next/link"

const authLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className="bg-[#DEDEDE] pt-2">
            <Link href='/' className='ml-2 w-14 h-14 rounded-full bg-black text-white flex justify-center items-center'>logo</Link>
            {children}
        </section>
    )
}

export default authLayout