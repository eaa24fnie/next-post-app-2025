import { redirect } from "next/navigation";
import FormPost from "@/components/FormPost";
import styles from "./page.module.css";

export default function CreatePage() {
  const url = `${process.env.NEXT_PUBLIC_FB_DB_URL}/posts.json`; // Get Firebase Realtime Database URL

  async function createPost(formData) {
    "use server";
    const caption = formData.get("caption");
    const image = formData.get("image");

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caption,
        image,
        uid: "OPPe5jue2Ghxx3mtnxevB5FwCYe2", // TODO: Replace with actual user ID from auth
        createdAt: new Date().toISOString()
      })
    });

    if (response.ok) {
      redirect("/posts");
    }
  }

  return (
    <section className={styles.formPage}>
      <div className={styles.container}>
        <h1>Create New Post</h1>
        <FormPost action={createPost} />
      </div>
    </section>
  );
}
