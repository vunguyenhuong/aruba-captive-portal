export default function Home({ query }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form method="POST" action="/api/auth" className="bg-white p-6 rounded-xl shadow-md">
        <input type="hidden" name="switchip" value={query.switchip || ""} />
        <input type="hidden" name="mac" value={query.mac || ""} />
        <input type="hidden" name="url" value={query.url || ""} />

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600"
        >
          Kết nối WiFi
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { query: context.query } };
}
