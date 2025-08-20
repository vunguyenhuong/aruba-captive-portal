import { useEffect } from "react";

export default function Home({ query }) {
  useEffect(() => {
    // Gửi POST tự động về /api/auth
    fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        switchip: query.switchip || "",
        mac: query.mac || "",
        url: query.url || ""
      }),
    });
  }, [query]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold">Đang kết nối Internet...</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { query: context.query } };
}
