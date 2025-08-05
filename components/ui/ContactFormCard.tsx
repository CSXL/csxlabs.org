import React from "react";

interface ContactFormCardProps {
  className?: string;
}

export const ContactFormCard: React.FC<ContactFormCardProps> = ({ 
  className = "" 
}) => (
  <div className={`border border-neutral-500 bg-neutral-900/50 p-4 h-full flex flex-col ${className}`}>
    <div className="text-xs text-neutral-200 mb-4 font-mono">
      CONTACT FORM
    </div>
    <form className="flex flex-col flex-1 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-neutral-200 mb-2 font-mono">FIRST NAME</div>
          <input
            type="text"
            name="firstName"
            className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors"
            required
          />
        </div>
        <div>
          <div className="text-xs text-neutral-200 mb-2 font-mono">LAST NAME</div>
          <input
            type="text"
            name="lastName"
            className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors"
            required
          />
        </div>
      </div>
      
      <div>
        <div className="text-xs text-neutral-200 mb-2 font-mono">EMAIL</div>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors"
          required
        />
      </div>
      
      <div>
        <div className="text-xs text-neutral-200 mb-2 font-mono">ORGANIZATION</div>
        <input
          type="text"
          name="organization"
          className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors"
        />
      </div>
      
      <div>
        <div className="text-xs text-neutral-200 mb-2 font-mono">SUBJECT</div>
        <select
          name="subject"
          className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors"
          required
        >
          <option value="">SELECT SUBJECT</option>
          <option value="sales">SALES INQUIRY</option>
          <option value="partnership">PARTNERSHIP INQUIRY</option>
          <option value="research">RESEARCH COLLABORATION</option>
          <option value="careers">CAREER OPPORTUNITIES</option>
          <option value="general">GENERAL INQUIRY</option>
          <option value="technical">TECHNICAL SUPPORT</option>
        </select>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="text-xs text-neutral-200 mb-2 font-mono">MESSAGE</div>
        <textarea
          name="message"
          className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-xs text-neutral-50 focus:outline-none focus:border-neutral-500 transition-colors resize-none flex-1"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-neutral-50 text-neutral-950 py-2 px-4 text-xs transition-colors duration-200 hover:bg-neutral-200"
      >
        SEND MESSAGE
      </button>
    </form>
  </div>
); 