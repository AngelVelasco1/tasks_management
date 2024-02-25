"use client"
import Image from "next/image";

interface Users {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export const UsersCard = ({ users } : { users: Users[] }) => {
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className="bg-emerald-300/95 py-14 px-16 m-5 flex flex-col items-center justify-center rounded-lg">
                    <Image width={120} height={120} src={user.avatar} alt={user.email} className="rounded-full" />
                    <p className="text-slate-700 text-xl font-bold">{user.first_name} {user.last_name}</p>
                    <p className="tracking-wide font-bold text-lg text-green-800">{user.email}</p>
                </div>
            ))}
        </>
    )
}