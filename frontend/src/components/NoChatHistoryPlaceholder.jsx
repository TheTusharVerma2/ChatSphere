import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-5 shadow-sm border border-indigo-200">
        <MessageCircleIcon className="size-10 text-indigo-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        Start your conversation with {name}
      </h3>
      <div className="flex flex-col space-y-3 max-w-md mb-6">
        <p className="text-gray-500 text-sm font-medium">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-indigo-200 to-transparent mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-5 py-2.5 text-sm font-semibold text-indigo-700 bg-white shadow-sm border border-indigo-100 rounded-full hover:bg-indigo-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
          👋 Say Hello
        </button>
        <button className="px-5 py-2.5 text-sm font-semibold text-indigo-700 bg-white shadow-sm border border-indigo-100 rounded-full hover:bg-indigo-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
          🤝 How are you?
        </button>
        <button className="px-5 py-2.5 text-sm font-semibold text-indigo-700 bg-white shadow-sm border border-indigo-100 rounded-full hover:bg-indigo-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
