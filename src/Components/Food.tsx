'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    image: string
    title: string
    id: number
}

const Food = ({ image, title, id }: Props) => {
    const pathname = usePathname()
    const newUrl = `${pathname}/${id}`

    return (
        <Link href={newUrl}>
            <div className="bg-white/90 rounded-xl shadow-md overflow-hidden p-4 transition-transform hover:scale-105 cursor-pointer">
                <div className="w-full h-48 relative mb-3">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <p className="text-gray-800 font-bold text-base text-center">{title}</p>
            </div>
        </Link>
    )
}

export default Food
