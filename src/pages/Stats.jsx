import { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AppContext } from '../context/AppContext';

export default function Stats() {
  const { timeline } = useContext(AppContext);

  
  const callCount = timeline.filter(t => t.type === 'Call').length;
  const textCount = timeline.filter(t => t.type === 'Text').length;
  const videoCount = timeline.filter(t => t.type === 'Video').length;

  const data = [
    { name: 'Text', value: textCount || 1 }, 
    { name: 'Call', value: callCount || 1 },
    { name: 'Video', value: videoCount || 1 },
  ];

  const COLORS = ['#8b5cf6', '#334155', '#22c55e']; 

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-medium text-[#244D3F] mb-6">By Interaction Type</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}