import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const messages = [
  {
    id: 1,
    user: "Alice",
    avatar: "/placeholder.svg",
    content: "Hey everyone! How's it going?",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    user: "Bob",
    avatar: "/placeholder.svg",
    content: "Hi Alice! All good here, how about you?",
    timestamp: "2:32 PM",
  },
  {
    id: 3,
    user: "Charlie",
    avatar: "/placeholder.svg",
    content: "Hello! Just joined the server. Excited to be here!",
    timestamp: "2:35 PM",
  },
];

const Index = () => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={message.avatar} alt={message.user} />
            <AvatarFallback>{message.user[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{message.user}</span>
              <span className="text-xs text-muted-foreground">{message.timestamp}</span>
            </div>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;