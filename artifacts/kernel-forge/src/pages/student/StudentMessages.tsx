import { useEffect, useState } from 'react';
import { Search, MoveVertical as MoreVertical, Send, Paperclip, MessageSquare } from 'lucide-react';
import { getData, Message } from '@/lib/data';

export default function StudentMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const data = getData<Message>('messages');
    setMessages(data);
    if (data.length > 0) {
      setSelectedId(data[0].id);
    }
  }, []);

  const selectedMessage = messages.find(m => m.id === selectedId);

  return (
    <div className="h-[calc(100vh-8rem)] max-w-6xl mx-auto flex flex-col">
      <div className="mb-4 shrink-0">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Messages</h1>
      </div>

      <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex min-h-0">
        {/* Sidebar */}
        <div className="w-1/3 min-w-[280px] max-w-xs border-r border-slate-200 flex flex-col bg-slate-50 shrink-0">
          <div className="p-4 border-b border-slate-200 bg-white">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                className="w-full pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {messages.map(msg => (
              <div
                key={msg.id}
                onClick={() => setSelectedId(msg.id)}
                className={`p-4 border-b border-slate-100 cursor-pointer transition-colors flex gap-3 ${selectedId === msg.id ? 'bg-blue-50/50' : 'hover:bg-slate-100 bg-white'}`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold shrink-0 text-sm">
                  {msg.from.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{msg.from}</h4>
                    <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{msg.time}</span>
                  </div>
                  <p className={`text-sm truncate ${msg.unread > 0 ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>
                    {msg.preview}
                  </p>
                </div>
                {msg.unread > 0 && (
                  <div className="w-5 h-5 bg-blue-600 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 self-center">
                    {msg.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedMessage ? (
          <div className="flex-1 flex flex-col min-w-0 bg-white">
            {/* Chat Header */}
            <div className="h-16 border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold text-sm">
                  {selectedMessage.from.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{selectedMessage.from}</h3>
                  <p className="text-xs text-slate-500">Enseignant • Informatique</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              <div className="flex justify-center">
                <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Aujourd'hui</span>
              </div>

              <div className="flex items-end gap-2 max-w-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mb-1">
                  {selectedMessage.from.charAt(0)}
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-bl-sm shadow-sm text-sm text-slate-700 leading-relaxed">
                  {selectedMessage.preview}
                </div>
                <span className="text-xs text-slate-400 mb-1">10:15</span>
              </div>

              <div className="flex items-end gap-2 max-w-lg self-end ml-auto justify-end">
                <span className="text-xs text-slate-400 mb-1">10:20</span>
                <div className="bg-blue-900 p-3.5 rounded-2xl rounded-br-sm shadow-sm text-sm text-white leading-relaxed">
                  Oui bien sûr, les graphes orientés ou non-orientés ? Je peux vous envoyer le document récapitulatif.
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 flex items-center">
                  <input
                    type="text"
                    placeholder="Écrivez votre message..."
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder-slate-400"
                  />
                </div>
                <button className="p-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-full transition-colors shadow-sm shrink-0">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
            <MessageSquare className="w-12 h-12 mb-4 text-slate-300" />
            <p className="text-sm">Sélectionnez une conversation pour commencer à discuter</p>
          </div>
        )}
      </div>
    </div>
  );
}
