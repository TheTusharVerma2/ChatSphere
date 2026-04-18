import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex bg-white/40 backdrop-blur-md p-1.5 m-4 rounded-2xl shadow-sm border border-white/60">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
          activeTab === "chats"
            ? "bg-white text-indigo-600 shadow-sm"
            : "text-gray-500 hover:text-gray-700 hover:bg-white/30"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
          activeTab === "contacts"
            ? "bg-white text-indigo-600 shadow-sm"
            : "text-gray-500 hover:text-gray-700 hover:bg-white/30"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
