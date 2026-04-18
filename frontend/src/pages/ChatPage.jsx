import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-7xl h-[85vh] xl:h-[90vh]">
      <div className="flex h-full w-full rounded-[2.5rem] glass-panel overflow-hidden relative z-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60">
        {/* LEFT SIDE: INBOX & CONTACTS */}
        <div className="w-80 border-r border-white/40 flex flex-col bg-white/30 backdrop-blur-md">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE: CHAT AREA */}
        <div className="flex-1 flex flex-col bg-white/20 relative backdrop-blur-sm">
          {/* Subtle gradient overlay for the chat area */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-indigo-50/30 pointer-events-none" />
          
          <div className="relative h-full flex flex-col z-10">
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;
