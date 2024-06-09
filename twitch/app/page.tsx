import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-2 p-1">
      <h1>User Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
