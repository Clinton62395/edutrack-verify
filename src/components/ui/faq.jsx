import { ChevronDown } from "lucide-react";

export const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-blue-500/40 bg-blue-500/5"
          : "border-white/5 bg-white/3 hover:border-white/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-sm font-medium text-gray-200 leading-snug">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};
