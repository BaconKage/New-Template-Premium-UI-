import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

const conversations = [
  { id: 1, name: "Rahul Sharma", lastMessage: "Thanks for the workout tips!", unread: 2, time: "10:30 AM" },
  { id: 2, name: "Priya Patel", lastMessage: "When is my next session?", unread: 0, time: "Yesterday" },
  { id: 3, name: "Amit Kumar", lastMessage: "Can I reschedule tomorrow?", unread: 1, time: "9:15 AM" },
  { id: 4, name: "Sneha Singh", lastMessage: "Great session today!", unread: 0, time: "Tuesday" },
  { id: 5, name: "Vikram Joshi", lastMessage: "I have a question about diet", unread: 3, time: "11:45 AM" },
];

const dummyMessages = [
  { id: 1, sender: "member", text: "Hi, I wanted to ask about nutrition plans", time: "10:25 AM" },
  { id: 2, sender: "trainer", text: "Hello! I'd be happy to help. What specific area are you interested in?", time: "10:27 AM" },
  { id: 3, sender: "member", text: "I'm looking to build muscle. What should I focus on?", time: "10:28 AM" },
  { id: 4, sender: "trainer", text: "Great! Focus on protein intake (1.6-2.2g per kg body weight), consistent training, and adequate rest.", time: "10:30 AM" },
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState("");

  return (
    <div className="h-[calc(100vh-200px)]">
      <Card className="h-full flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r overflow-y-auto">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">Messages</h2>
          </div>
          <div className="divide-y">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 text-left transition-colors hover:bg-muted/50 ${
                  selectedConversation.id === conv.id ? "bg-muted" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {conv.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{conv.name}</p>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {selectedConversation.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{selectedConversation.name}</p>
              <p className="text-xs text-muted-foreground">Premium Member</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {dummyMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "trainer" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    msg.sender === "trainer"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === "trainer" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setMessageText("");
                  }
                }}
              />
              <Button size="icon" onClick={() => setMessageText("")}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
