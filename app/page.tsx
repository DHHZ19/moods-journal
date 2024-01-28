import Image from "next/image";
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' :  '/new-user'

  return (
    <div className="flex bg-black w-screen h-screen flex-col items-center justify-between p-24 text-white">
      <div className="w-full max-w-[620px] mx-auto">
        <h1 className="text-7xl">Awesome Mood App</h1>
        <p className="text-2xl text-white/6 mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          itaque?
        </p>
        <Link href={href}>
        <button className="mt-4 bg-blue px-2 py-4 rounded-lg text-xl bg-slate-500">
          {" "}
          Click Here!
        </button>
        </Link>
      </div>
    </div>
  );
}
