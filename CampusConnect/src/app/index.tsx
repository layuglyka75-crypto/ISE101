import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const announcements = [
  { title: 'Enrollment reminders', isRead: false },
  { title: 'Campus event schedule', isRead: true },
];

export default function HomeScreen() {
  const unreadAnnouncements = announcements.filter((announcement) => !announcement.isRead);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Campus Connect</Text>
            <Text style={styles.subtitle}>
              One campus. Connected students.
              {'\n'}
              Welcome to the Week 1 project foundation.
            </Text>
          </View>

          <View style={styles.announcementCard}>
            <Text style={styles.cardTitle}>Announcement Utility Test</Text>
            <View style={styles.announcementSummary}>
              <Text style={styles.summaryText}>Total Announcements: {announcements.length}</Text>
              <Text style={styles.summaryText}>
                Unread Announcements: {unreadAnnouncements.length}
              </Text>
              {unreadAnnouncements.map((announcement) => (
                <Text key={announcement.title} style={styles.summaryText}>
                  {'\u2022'} {announcement.title}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F3F6FB',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 38,
    transform: [{ translateY: 48 }],
  },
  header: {
    alignItems: 'center',
    gap: 18,
  },
  title: {
    color: '#111111',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
    textAlign: 'center',
  },
  subtitle: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'center',
  },
  announcementCard: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 560,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    color: '#111111',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
  },
  announcementSummary: {
    marginTop: 18,
  },
  summaryText: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 29,
  },
});
