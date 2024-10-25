import { redirect } from "next/navigation";

export default function Accounts() {
  const userProfileInfo = null;
  if (userProfileInfo === null) redirect("/products?search=product2");
  return (
    <div>
      <h1>Accounts page</h1>
    </div>
  );
}
