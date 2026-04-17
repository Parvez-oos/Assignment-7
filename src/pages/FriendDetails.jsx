import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Bell,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  ArrowLeft,
} from "lucide-react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry } = useContext(AppContext);

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend)
    return (
      <div className="p-12 text-center text-2xl font-bold">
        Friend not found
      </div>
    );

  const handleInteraction = (type) => {
    addTimelineEntry(friend.name, type);
    toast.success(`${type} interaction added to timeline!`, { icon: "✅" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 text-gray-500 hover:text-brand flex items-center gap-2 transition-colors font-medium"
      >
        <ArrowLeft size={18} /> Back to Friends
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold mb-2">{friend.name}</h2>
            <span
              className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded-full mb-3 ${friend.status === "overdue" ? "bg-red-500 text-white" : friend.status === "almost due" ? "bg-yellow-500 text-white" : "bg-green-700 text-white"}`}
            >
              {friend.status}
            </span>
            <div className="flex gap-2 justify-center mb-4">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-500 italic text-sm mb-2">"{friend.bio}"</p>
            <p className="text-sm text-gray-500 mb-2">{friend.email}</p>
            <p className="text-xs text-gray-400">Preferred: email</p>
          </div>

          <button className="bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-medium text-gray-700">
            <Bell size={18} /> Snooze 2 Weeks
          </button>
          <button className="bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-medium text-gray-700">
            <Archive size={18} /> Archive
          </button>
          <button className="bg-white border border-red-200 text-red-500 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 font-medium">
            <Trash2 size={18} /> Delete
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
              <div className="text-4xl font-bold text-[#244D3F] mb-2">
                {friend.days_since_contact}
              </div>
              <div className="text-sm text-gray-500">Days Since Contact</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
              <div className="text-4xl font-bold text-[#244D3F] mb-2">
                {friend.goal}
              </div>
              <div className="text-sm text-gray-500">Goal (Days)</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
              <div className="text-2xl font-bold text-[#244D3F] mb-2 mt-2">
                {friend.next_due_date}
              </div>
              <div className="text-sm text-gray-500 mt-4">Next Due</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-2xl text-[#244D3F] mb-1">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-600">
                Connect every{" "}
                <span className="font-bold text-black">{friend.goal} days</span>
              </p>
            </div>
            <button className="border border-gray-300 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleInteraction("Call")}
                className="flex flex-col items-center justify-center gap-3 border border-gray-100 p-6 rounded-xl hover:bg-gray-50 transition group"
              >
                <img
                  src="/assets/call.png"
                  alt="Call"
                  className="w-10 h-10 group-hover:scale-110 transition"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Call
                </span>
              </button>

              <button
                onClick={() => handleInteraction("Text")}
                className="flex flex-col items-center justify-center gap-3 border border-gray-100 p-6 rounded-xl hover:bg-gray-50 transition group"
              >
                <img
                  src="/assets/text.png"
                  alt="Text"
                  className="w-10 h-10 group-hover:scale-110 transition"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Text
                </span>
              </button>

              <button
                onClick={() => handleInteraction("Video")}
                className="flex flex-col items-center justify-center gap-3 border border-gray-100 p-6 rounded-xl hover:bg-gray-50 transition group"
              >
                <img
                  src="/assets/video.png"
                  alt="Video"
                  className="w-10 h-10 group-hover:scale-110 transition"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
