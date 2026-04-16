import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import friendsData from '../data/friends.json';

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setTimeline([
        { id: 101, date: 'March 29, 2026', type: 'Meetup', title: 'Meetup with Tom Baker' },
        { id: 102, date: 'March 28, 2026', type: 'Text', title: 'Text with Sarah Chen' },{
    id: 103,
    type: "Meetup",
    title: "Meetup with Emma Wilson",
    date: "April 12, 2026"
  },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const addTimelineEntry = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      type: type,
      title: `${type} with ${friendName}`
    };
    
    setTimeline(prevTimeline => [newEntry, ...prevTimeline]);
  };

  return (
    <AppContext.Provider value={{ friends, timeline, isLoading, addTimelineEntry }}>
      {children}
    </AppContext.Provider>
  );
};