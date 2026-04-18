import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center shadow-sm border border-indigo-200">
        <MessageCircleIcon className="w-8 h-8 text-indigo-500" />
      </div>
      <div>
        <h4 className="text-gray-800 font-bold mb-1 text-lg">No conversations yet</h4>
        <p className="text-gray-500 text-sm px-6 font-medium">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;
