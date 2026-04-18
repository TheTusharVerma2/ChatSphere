import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-200 transition-all hover:scale-105 hover:bg-indigo-200">
        <MessageCircleIcon className="size-10 text-indigo-500" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">Select a conversation</h3>
      <p className="text-gray-500 max-w-md font-medium text-lg">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
