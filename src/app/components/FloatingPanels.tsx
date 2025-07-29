export default function FloatingPanels() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-lg"></div>
          </div>
          <div className="absolute top-40 right-20 opacity-15">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"></div>
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-green-800 rounded-lg"></div>
          </div>
        </div>
    );
}