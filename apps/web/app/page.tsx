const { client } = require("@repo/db/client");

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Your user ID is: {user.password}</p>
        </div>
      ) : (
        <div>
          <h1>Welcome to the App!</h1>
          <p>No user Found.</p>
        </div>
      )}
    </div>
  );
}
