import UserCard from "@/components/UserCard";
import styles from "./user.module.css";
import Image from "next/image";

export default async function UserPage({ params }) {
  const { id } = await params;

  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users/${id}.json`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user);

  return (
    <main className={styles.postPage}>
      <div className={styles.container}>
        <h3>{user.name}</h3>
        <Image
          src={user.image}
          alt={user.name}
          width={1000}
          height={500}
          className={styles.avatarImage}
        />
      </div>
    </main>
  );
}
