import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function Home() {
  const { friends, isLoading } = useContext(AppContext);

  
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'overdue': return 'bg-[#FF4D4D] text-white';
      case 'almost due': return 'bg-[#FFB800] text-white';
      case 'on-track': return 'bg-[#244D3F] text-white'; 
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-xl font-semibold animate-pulse">Loading your connections...</div>;
  }

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status.toLowerCase() === 'on-track').length;
  const needAttention = friends.filter(f => f.status.toLowerCase() !== 'on-track').length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#F9FAFB]">
      
      <div className="text-center mb-16">
        <h1 className="text-[40px] leading-tight font-bold text-[#111827] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#6B7280] text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#244D3F] text-white px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-opacity-90 transition-all font-medium text-sm">
          <Plus size={18} /> Add a Friend
        </button>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { label: 'Total Friends', value: totalFriends },
          { label: 'On Track', value: onTrack },
          { label: 'Need Attention', value: needAttention },
          { label: 'Interactions This Month', value: 12 }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] text-center border border-gray-50">
            <div className="text-[32px] font-bold text-[#244D3F] mb-2">{item.value}</div>
            <div className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>

      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-[#111827] mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map(friend => (
            <Link to={`/friend/${friend.id}`} key={friend.id} className="group bg-white p-8 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center">
              <div className="relative mb-6">
                <img src={friend.picture} alt={friend.name} className="w-22 h-22 rounded-full object-cover shadow-inner" />
              </div>
              
              <h3 className="text-[17px] font-bold text-[#111827] mb-1 group-hover:text-[#1E3A2F] transition-colors">{friend.name}</h3>
              <p className="text-[11px] font-medium text-[#9CA3AF] mb-4">{friend.days_since_contact}d ago</p>
              
              <div className="flex gap-1.5 mb-5 flex-wrap justify-center">
                {friend.tags.map(tag => (
                  <span key={tag} className="bg-[#E7F3EF] text-[#1E3A2F] text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <span className={`text-[9px] px-4 py-1.5 rounded-full font-extrabold uppercase tracking-[0.05em] shadow-sm ${getStatusColor(friend.status)}`}>
                {friend.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}