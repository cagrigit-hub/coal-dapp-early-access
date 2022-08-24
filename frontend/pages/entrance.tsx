import { useState } from "react";
import CoaLogo from "../components/CoaLogo";
import ConnectButton from "../components/ConnectButton";

export default function EntrancePage({ }) {
  const [user,setUser] = useState<string>("");
  return (
    <main className="h-screen flex flex-col space-y-4 justify-center items-center">
        <CoaLogo />
        <ConnectButton userPassed={user} setUserPassed={setUser}/>
    </main>
  )
}