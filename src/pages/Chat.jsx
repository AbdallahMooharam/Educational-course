import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiChatsCircle } from "react-icons/pi";

// Dummy data for dynamic content
const initialMessages = [
  {
    id: 1,
    sender: "Sylvester Stallone",
    content: "Hi everyone! Glad you could join! I am making a new movie.",
    timestamp: "12:45 pm",
    color: "#DDECF2",
  },
  {
    id: 2,
    sender: "Tom Cruise",
    content: "Hi all! I have one question for the movie",
    timestamp: "12:45 pm",
    color: "#FCF4CB",
  },
  {
    id: 3,
    sender: "Harrison Ford",
    content: "Again?",
    timestamp: "12:45 pm",
    color: "#F2F2F2",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [gitMessages, setGitMessages] = useState([]);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VuaWgwbWUuY29tL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzI0MzcyNTMwLCJleHAiOjE3MjQzNzYxMzAsIm5iZiI6MTcyNDM3MjUzMCwianRpIjoic0d6aW9uenBsTnlpbGFPUSIsInN1YiI6IjUzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.amiBttvidN_h1OV_XmRd-6s1uy4HbwU3RGI0x1Jguio"; // Replace with your actual token

  useEffect(() => {
    // Fetch messages from the Git API
    const fetchGitMessages = async () => {
      try {
        const response = await axios.get("https://unih0me.com/api/auth/chats/2", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        // Assuming the response contains an array of messages
        const fetchedMessages = response.data.map((gist, index) => ({
          id: index + 4, // Ensure unique IDs
          sender: gist.owner ? gist.owner.login : "Unknown",
          content: gist.description || "No content",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          color: "#E0F7FA",
        }));
        setGitMessages(fetchedMessages);
      } catch (err) {
        console.error(err);
        setError("Error fetching messages from Git. Please try again later.");
      }
    };

    fetchGitMessages();
  }, [token]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        color: "#D1F7C4", // A different color for new messages
      };

      try {
        // POST request to API
        await axios.post(
          "https://unih0me.com/api/chat/store", // Replace with your API endpoint
          { content: newMessage },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Add the token here
            },
          }
        );

        // Update local messages state
        setMessages([...messages, newMsg]);
        setNewMessage("");
        setError(null); // Clear any existing error
      } catch (err) {
        console.error(err);
        setError("Error sending message. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="lg:w-1/3 w-full border-r border-gray-200 flex flex-col lg:min-w-[250px] bg-white lg:bg-gray-50">
        {/* Header */}
        <div className="py-2 px-3 bg-gray-200 flex justify-between items-center">
          <img
            className="w-10 h-10 rounded-full"
            alt="User"
            src="https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"
          />
          <div className="flex space-x-4">
            <button aria-label="More options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#727A7E"
              >
                <path d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z" />
              </svg>
            </button>
            <button aria-label="Chat settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#263238"
              >
                <path
                  opacity=".55"
                  d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                />
              </svg>
            </button>
            <button aria-label="More options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#263238"
              >
                <path d="M7 12.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4-6.5h-10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Search */}
        <div className="py-2 px-2 bg-gray-100">
          <input
            type="text"
            className="w-full px-3 py-2 text-sm rounded border border-gray-300"
            placeholder="Search or start new chat"
          />
        </div>
        {/* Contacts */}
        <div className="flex-1 overflow-auto bg-gray-50">
          {[
            "Expendables 4",
            "Arnold Schwarzenegger",
            "Russell Crowe",
            "Tom Cruise",
            "Harrison Ford",
          ].map((contact, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
            >
              <img
                alt={contact}
                className="h-12 w-12 rounded-full"
                src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              />
              <div className="ml-4 flex-1">
                <p className="text-gray-800">{contact}</p>
                <p className="text-xs text-gray-600">12:45 pm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Chat Area */}
      <div className="lg:w-2/3 w-full flex flex-col">
        {/* Header */}
        <div className="py-2 px-3 bg-gray-100 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
              alt=""
            />
            <div className="ml-4">
              <p className="text-gray-800">New Movie! Expendables 4</p>
              <p className="text-gray-600 text-xs mt-1">
                Andrés, Tom, Harrison, Arnold, Sylvester
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#263238"
              >
                <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.9l4 4v-4l-4-4zm-7.1 0c-3.1 0-5.7-2.5-5.7-5.7s2.5-5.7 5.7-5.7 5.7 2.5 5.7 5.7-2.5 5.7-5.7 5.7z" />
              </svg>
            </button>
            <button aria-label="Options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="#263238"
              >
                <path d="M7 12.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4-6.5h-10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Chat Messages */}
        <div className="flex-1 overflow-auto p-3 bg-gray-50">
          {[...messages, ...gitMessages].map((message) => (
            <div
              key={message.id}
              className={`flex items-start mb-4 ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender !== "You" && (
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://randomuser.me/api/portraits/men/${message.id}.jpg`}
                  alt={message.sender}
                />
              )}
              <div
                className={`p-3 rounded-lg ${
                  message.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                } max-w-xs`}
                style={{ backgroundColor: message.color }}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
              </div>
              {message.sender === "You" && (
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="You"
                />
              )}
            </div>
          ))}
        </div>
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-2 text-sm">
            {error}
          </div>
        )}
        {/* Message Input */}
        <div className="border-t border-gray-200 p-3 bg-gray-100">
          <div className="flex items-center">
            <PiChatsCircle
              size={24}
              className="text-gray-500 cursor-pointer"
              onClick={() => console.log("Chat icon clicked")} // Add functionality as needed
            />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-3 py-2 text-sm rounded border border-gray-300 ml-2"
              placeholder="Type your message here..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
