import { UsersCard } from "@/components/usersCard";


const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  const users = data.data;
  return users
}

export default async function Home() {
  const users = await fetchUsers()
  return (
    <main className=" min-h-screen grid grid-cols-4 items-center ">
      <UsersCard users={users}/>
    </main>
  );
}
