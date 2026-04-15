import { getFriends } from "@/app/lib/getFriends";
import { Archive, Bell, Delete, DeleteIcon, LucideDelete, MessageCircle, PhoneCall, RemoveFormatting, Timer, Trash, VideoIcon, WatchIcon } from "lucide-react";
import Image from "next/image";
import QuickCheckIn from "../components/quickCheckIn/page";

const FriendDetails = async ({ params }) => {
  const { slug } = await params;
  const friends = await getFriends();
  const friend = friends.find((f) => f.slug === slug);

  const {
    picture,
    name,
    days_since_contact,
    tags,
    status,
    bio,
    goal,
    next_due_date
  } = friend;

  if (!friend) return <div className="h-[50dvh] flex text-center justify-center mx-auto items-center text-4xl font-bold">{slug} does not exist...</div>;

  return (
    <div className="gap-5 w-full max-w-6xl mx-auto mt-10 my-10 grid grid-cols-1 md:grid-cols-7 px-4">
      <aside className="h-full space-y-4 md:col-span-2">
        <div href={`/${slug}`} className='text-center mx-auto bg-gray-100 w-full space-y-1 flex flex-col justify-center items-center p-5 rounded-2xl shadow-sm border border-gray-200 cursor-pointer'>

          <div className='flex justify-center'>
            <Image className='rounded-full' src={picture} alt="avatar" width={100} height={100} />
          </div>
          <div>
            <h3 className='text-xl font-medium my-2'>{name}</h3>
            <p className='text-gray-600'>{days_since_contact} Days Ago</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-3'>
            <div className='flex gap-2 justify-center'>
              {
                tags.map((t, i) => <p className='p-1 bg-green-200 rounded-full px-3 font-bold text-green-900' key={i}> {t} </p>)
              }
            </div>
            <div className={`text-white p-1 px-3 w-35 rounded-full flex justify-center ${status === "on-track" ? "bg-green-900" : status === "overdue" ? "bg-red-600" : "bg-yellow-600"}`}>{status}</div>
          </div>
          <p className="text-gray-400">{bio}</p>
        </div>
        <div className="space-y-4 font-bold">
          <button className="flex border w-full justify-center bg-gray-200 border-gray-100 p-3 rounded-sm cursor-pointer gap-1">
            <Bell />
            Snooze 2 weeks
          </button>
          <button className="flex border w-full justify-center bg-gray-200 border-gray-100 p-3 rounded-sm cursor-pointer gap-2">
            <Archive />
            Archive
          </button>
          <button className="flex border w-full justify-center bg-gray-200 border-gray-100 p-3 rounded-sm cursor-pointer text-red-600 items-center gap-2">
            <Trash />
            Delete
          </button>
        </div>
      </aside>

      <section className="md:col-span-5 rounded-xl space-y-5">
        <div className="flex justify-center gap-4">
          <div className="bg-gray-200 p-7 text-center rounded-xl w-full">
            <span className="text-2xl font-bold text-green-900">
              {days_since_contact}
            </span>
            <p className="text-gray-600">Days Since Contact</p>
          </div>
          <div className="bg-gray-200 p-7 text-center rounded-xl w-full">
            <span className="text-2xl font-bold text-green-900">
              {goal}
            </span>
            <p className="text-gray-600">Goal (Days)</p>
          </div>
          <div className="bg-gray-200 p-7 text-center rounded-xl w-full">
            <span className="text-2xl font-bold text-green-900">
              {next_due_date}
            </span>
            <p className="text-gray-600">Next Due</p>
          </div>
        </div>

        <div className="bg-gray-200 p-6 rounded-xl space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-medium">Relationship Goal</h4>
            <button className="p-1 px-3 border border-gray-400 rounded-sm flex items-center justify-center font-medium cursor-pointer">Edit</button>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700">Connect Every</p>
            <b>{goal} Days</b>
          </div>
        </div>

          <QuickCheckIn name={name} />
      </section>
    </div>
  );
};

export default FriendDetails;