import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    // clean up
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <div className="flex-1 px-6 overflow-y-auto py-8">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg, idx) => {
              const isMine = msg.senderId === authUser._id;
              const isOptimistic = msg.isOptimistic;
              return (
                <div
                  key={msg._id || idx}
                  className={`flex w-full ${isMine ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`relative max-w-[70%] sm:max-w-[60%] px-4 py-3 rounded-2xl shadow-sm border border-white/40 backdrop-blur-md transition-opacity duration-200 ${
                      isOptimistic ? "opacity-60 grayscale-[20%]" : "opacity-100"
                    } ${
                      isMine
                        ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-tr-sm ml-auto"
                        : "bg-white/60 text-gray-800 rounded-tl-sm"
                    }`}
                  >
                    {msg.image && (
                      <img src={msg.image} alt="Shared" className="rounded-xl h-48 w-full object-cover mb-2 border border-white/10 shadow-sm" />
                    )}
                    {msg.text && <p className="leading-relaxed break-words">{msg.text}</p>}
                    <span className="block mt-1.5 text-[10px] uppercase tracking-wider font-medium opacity-60 text-right">
                      {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      {isMine && (
                        <span className="ml-2 inline-block">
                          {isOptimistic ? "⏳" : "✓"}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
            {/* 👇 scroll target */}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;
