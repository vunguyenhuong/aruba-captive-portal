export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Login Successful!</h1>
        <p>You may now access the Internet.</p>
      </div>
    </div>
  );
}
