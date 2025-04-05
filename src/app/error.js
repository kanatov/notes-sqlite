"use client";
import Link from "next/link";
export default function ErrorPage({ error }) {
  return (
    <section className="border-2 m-8 p-8 text-center w-full">
      <h1>Ups!</h1>
      <p>Something went wrong:</p>
      <pre className="border-2 border-gray-400 p-4 mx-auto break-all whitespace-pre-wrap">
        {JSON.stringify(error.message, null, 2)}
      </pre>
      <Link href="/">Back to home page</Link>
    </section>
  );
}
