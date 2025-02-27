import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-gray-100 border-r shadow-md">
      {/* User Info Section */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <FaSearch className="text-4xl text-gray-600" />
        <h1 className="text-lg font-semibold">My Chats</h1>
      </div>
      
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <IoMdSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
          <input 
            type="text" 
            placeholder="Search or start new chat" 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>
      
      {/* Chat List */}
      <div className="overflow-y-auto h-[calc(100vh-140px)]">
        {[1, 2, 3, 4, 5].map((chat) => (
          <div key={chat} className="flex items-center gap-4 p-4 border-b cursor-pointer hover:bg-gray-200">
            <FaSearch className="text-3xl text-gray-500" />
            <div>
              <h3 className="text-md font-semibold">Contact {chat}</h3>
              <p className="text-sm text-gray-500">Last message...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
