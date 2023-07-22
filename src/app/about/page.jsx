'use client'
import { useRouter } from 'next/navigation'

export default function About () {
    const router = useRouter();
    return (
    <div>
    <p>This Portfolio is about me!</p>
    <button onClick={() => router.push('/')}>Home</button>
    </div>)
}