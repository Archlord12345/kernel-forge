'use client'

import { useEffect, useState } from 'react'
import { localDataClient } from '@/lib/local-data'
import { Loader, Trash2, Mail } from 'lucide-react'
import { ContactMessage } from '@/lib/local-data'

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)

  useEffect(() => {
    loadMessages()
  }, [])

  async function loadMessages() {
    try {
      const { data, error } = await localDataClient
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMessages(data || [])
    } catch (error) {
      console.error('Error loading messages:', error)
    } finally {
      setLoading(false)
    }
  }

  async function markAsRead(id: string) {
    try {
      const { error } = await localDataClient
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id)
      if (error) throw error
      setMessages(messages.map((m) => (m.id === id ? { ...m, read: true } : m)))
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  async function deleteMessage(id: string) {
    if (!confirm('Are you sure you want to delete this message?')) return

    try {
      const { error } = await localDataClient.from('contact_messages').delete().eq('id', id)
      if (error) throw error
      setMessages(messages.filter((m) => m.id !== id))
      if (selectedMessage?.id === id) setSelectedMessage(null)
    } catch (error) {
      console.error('Error deleting message:', error)
      alert('Failed to delete message')
    }
  }

  return (
    <div className="flex-1 flex">
      {/* Messages List */}
      <div className="flex-1 flex flex-col max-w-md border-r border-border">
        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="px-6 py-4">
            <h1 className="text-lg font-bold text-foreground">Messages</h1>
            <p className="text-xs text-muted-foreground mt-1">
              {messages.filter((m) => !m.read).length} unread
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader className="w-6 h-6 text-primary animate-spin" />
            </div>
          ) : messages.length > 0 ? (
            <div className="divide-y divide-border">
              {messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message)
                    if (!message.read) markAsRead(message.id)
                  }}
                  className={`w-full text-left p-4 hover:bg-secondary transition-colors border-l-4 ${
                    !message.read ? 'border-l-primary bg-primary/5' : 'border-l-transparent'
                  } ${selectedMessage?.id === message.id ? 'bg-secondary' : ''}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-sm text-foreground truncate">{message.subject}</p>
                    {!message.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{message.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{message.message}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No messages</p>
            </div>
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="flex-1 flex flex-col">
        {selectedMessage ? (
          <>
            {/* Header */}
            <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
              <div className="px-8 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedMessage.subject}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selectedMessage.name}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-muted-foreground hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 overflow-auto p-8">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="font-semibold text-foreground">{selectedMessage.name}</p>
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {selectedMessage.email}
                  </a>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-foreground">
                    {new Date(selectedMessage.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="whitespace-pre-wrap text-foreground">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Select a message to view</p>
          </div>
        )}
      </div>
    </div>
  )
}
