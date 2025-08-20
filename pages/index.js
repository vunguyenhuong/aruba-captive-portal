export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Guest WiFi</h1>
        <form method="POST" action="/api/auth" className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            className="border p-2 rounded" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="border p-2 rounded" 
            required 
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
