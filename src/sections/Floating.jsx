import React, { useState } from 'react';

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {/* Button to toggle the chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-white transition-all bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
      >
        {isOpen ? 'Close Chat' : 'Chat'}
      </button>

      {/* Chatbot iframe, only visible when `isOpen` is true */}
      {isOpen && (
        <div className='relative'>
        <div className="fixed bg-white border border-gray-300 rounded-lg shadow-lg bottom-16 right-4 w-80 ">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/wmgY5ROOXurvtfNCP5SvB"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight:"500px" }}
            title="Chatbot"
          ></iframe>
        <div style={{width:'100%', height:'3rem', background:'#fff' , position:'absolute', top:'0'}} ></div>
        <div style={{width:'100%', height:'3rem', background:'#fff' , position:'absolute', bottom:'0'}} ></div>

        </div>

        </div>
      )}
    </div>
  );
};

export default Floating;
