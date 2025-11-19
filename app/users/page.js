import UserCard from "@/components/UserCard";
import Link from "next/link";
import styles from "./page.module.css";

// Server Component
export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/users.json`;
  const response = await fetch(url);
  const dataObject = await response.json();

  const users = Object.keys(dataObject).map((key) => ({
    id: key,
    ...dataObject[key],
  }));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.grid}>
          {users.map((user) => (
            <Link href={`/posts/${user.id}`} key={user.id}>
              <a>
                <UserCard user={user} />
              </a>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
