import Link from "next/link"

export const SignUp = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-full flex flex-col items-center gap-12">
        <div className="w-full max-w-lg flex justify-center bg-slate-100 outline outline-1 outline-black rounded-2xl">
          <form
            action=""
            className="w-full max-w-sm flex flex-col gap-4 px-6 py-8 "
          >
            <label htmlFor="email" className=" grid gap-2">
              <span className="ml-3">Email</span>
              <input id="email" type="text" className="p-2" />
            </label>
            <label htmlFor="password" className="grid gap-2">
              <span className="ml-3">Password</span>
              <input id="password" type="text" className="p-2" />
            </label>
            <label htmlFor="repeat-password" className="grid gap-2">
              <span className="ml-3">Repeat Password</span>
              <input id="repeat-password" type="text" className="p-2" />
            </label>
          </form>
        </div>
        <Link href="#" className="bg-slate-200 py-2 px-6 rounded-3xl">
          Continue
        </Link>
      </div>
    </section>
  )
}
