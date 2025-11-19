// Client Component - needed for useState to manage image preview
"use client"; // Mark as client component

import Image from "next/image";
import { useState } from "react";
import styles from "./FormPost.module.css";

export default function FormPost({ action, post, user }) {
  // Local state for image preview
  const [image, setImage] = useState(post?.image);

  return (
    // Form uses Server Action passed as prop
    <form action={action} method="POST" className={styles.formPost}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        aria-label="name"
        placeholder="Write your name..."
        defaultValue=""
      />
      <label htmlFor="caption">Caption</label>
      <input
        id="caption"
        name="caption"
        type="text"
        aria-label="caption"
        placeholder="Write a caption..."
        defaultValue={post?.caption}
      />
      <label htmlFor="image">Image</label>
      <input
        type="url"
        name="image"
        id="image"
        defaultValue={post?.image}
        aria-label="image"
        placeholder="Paste an image URL"
        onChange={(event) => setImage(event.target.value)}
      />
      <label htmlFor="image-preview"></label>
      {/* Live image preview */}
      <Image
        id="image-preview"
        className={styles.imagePreview}
        src={
          image
            ? image
            : "https://placehold.co/600x400.webp?text=Paste+image+URL"
        }
        width={600}
        height={400}
        alt={post?.caption || "Image preview"}
      />
      <div className={styles.btns}>
        <button>{post?.caption ? "Update" : "Create"}</button>
      </div>
    </form>
  );
}
