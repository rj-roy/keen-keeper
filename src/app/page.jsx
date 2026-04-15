import AllFriends from "./components/allFriends/page";

export default function Home() {

  return (
    <div className="font-sans w-full max-w-6xl mx-auto space-y-5 my-15 p-10">
      <div className="text-center space-y-2">
        <h1 className="text-5xl">Friend to Keep Close in Your Life</h1>
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
          relationships that matter most.</p>
      </div>
      <button className="bg-green-950 flex mx-auto text-white p-2 rounded-sm items-center cursor-pointer hover:bg-green-900">
        + Add a Friend
      </button>

      <AllFriends/>
    </div>
  );
}
