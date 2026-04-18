function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-start" : "chat-end"} animate-pulse`}
        >
          <div className={`chat-bubble ${index % 2 === 0 ? "bg-white/60" : "bg-indigo-100/60"} text-transparent w-32 border border-white/40 shadow-sm`}></div>
        </div>
      ))}
    </div>
  );
}
export default MessagesLoadingSkeleton;
