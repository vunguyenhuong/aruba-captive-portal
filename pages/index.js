export default function Home({ query }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Guest WiFi</h1>
        <form method="POST" action="/api/auth">
          {/* Aruba sẽ redirect kèm query: ?switchip=...&mac=...&url=... */}
          <input type="hidden" name="switchip" value={query.switchip || ""} />
          <input type="hidden" name="mac" value={query.mac || ""} />
          <input type="hidden" name="url" value={query.url || ""} />

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Kết nối Internet
          </button>
        </form>
      </div>
    </div>
  );
}

// Lấy query Aruba gửi khi redirect
export async function getServerSideProps(context) {
  return { props: { query: context.query } };
}
