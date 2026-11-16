import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AnnouncementCard from '@/components/AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

const initialAnnouncements: AnnouncementItem[] = [
  {
    id: 'ANN-001',
    title: 'Enrollment Reminder',
    category: 'Academic',
    read: false,
  },
  {
    id: 'ANN-002',
    title: 'Sports Festival Announcement',
    category: 'Events',
    read: false,
  },
  {
    id: 'ANN-003',
    title: 'Campus Clean-up Drive',
    category: 'Community',
    read: true,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [connectionStatus, setConnectionStatus] = useState('Checking announcements...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectionStatus('Campus announcements are ready.');
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const unreadCount = announcements.filter((announcement) => !announcement.read).length;

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>Unread announcements: {unreadCount}</Text>
      <Text style={styles.connectionStatus}>{connectionStatus}</Text>
      {announcements.map((announcement) => (
        <AnnouncementCard
          key={announcement.id}
          title={announcement.title}
          category={announcement.category}
          read={announcement.read}
          onMarkRead={() => handleMarkRead(announcement.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    marginTop: 24,
  },
  heading: {
    color: '#111111',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },
  counter: {
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },
  connectionStatus: {
    color: '#555555',
    fontSize: 13,
    marginTop: 4,
  },
});
