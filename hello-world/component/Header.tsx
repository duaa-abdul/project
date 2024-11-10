import Link from "next/link"

export default function Header(){
    return(
        <div>
            <ul className="flex bg-orange-600 gap-6">
        <li><Link href="/home">home</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/career">career</Link></li>
        <li><Link href="/contact">contact</Link></li>
    </ul>
        </div>
    )
}