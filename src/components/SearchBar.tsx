interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-lg m-3">
      <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-white to-red-100 opacity-80"></div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search by name, role, or department..."
          className="w-full max-w-xl px-5 py-3 rounded-lg border border-red-400 focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-red-400 shadow-md outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
