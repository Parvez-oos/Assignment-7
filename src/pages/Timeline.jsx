import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function Timeline() {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('All');

  const filteredTimeline = filter === 'All' ? timeline : timeline.filter(t => t.type === filter);

  
  const getIcon = (type) => {
    const iconClass = "w-6 h-6 object-contain";
    switch (type) {
      case 'Call': 
        return <img src="/assets/call.png" className={iconClass} alt="Call" />;
      case 'Text': 
        return <img src="/assets/text.png" className={iconClass} alt="Text" />;
      case 'Video': 
        return <img src="/assets/video.png" className={iconClass} alt="Video" />;
      case 'Meetup': 
        
        return <span className="text-xl">🤝</span>; 
      default: 
        return <img src="/assets/text.png" className={iconClass} alt="Entry" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 bg-[#F9FAFB] min-h-screen">
     
      <h1 className="text-[32px] font-bold mb-8 text-[#111827]">Timeline</h1>
      
      
      <div className="mb-10">
        <select 
          className="bg-white border border-gray-200 text-[#6B7280] text-sm rounded-lg py-2.5 px-4 w-64 outline-none focus:ring-1 focus:ring-gray-300 shadow-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline...</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Meetup">Meetup</option>
        </select>
      </div>

      
      <div className="flex flex-col gap-3">
        {filteredTimeline.map(entry => (
          <div 
            key={entry.id} 
            className="bg-white p-5 rounded-xl border border-gray-100 flex items-center gap-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200"
          >
            
            <div className="shrink-0 w-12 h-12 flex items-center justify-center">
              {getIcon(entry.type)}
            </div>
            
            <div className="flex flex-col">
              <p className="text-[16px] font-medium text-[#374151]">
                
                <span className="font-bold text-[#244D3F]">{entry.type}</span> with {entry.title.split('with ')[1] || entry.title}
              </p>
              <p className="text-[14px] text-[#9CA3AF] mt-0.5">
                {entry.date}
              </p>
            </div>
          </div>
        ))}

        {filteredTimeline.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No timeline entries found.</p>
          </div>
        )}
      </div>
    </div>
  );
}