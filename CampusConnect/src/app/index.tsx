import { useRef } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  type ScrollViewInstance,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ActionButton from '@/components/ActionButton';
import AnnouncementPanel from '@/components/AnnouncementPanel';
import SectionHeading from '@/components/SectionHeading';

const utilityAnnouncements = [
  { id: 'TEST-001', title: 'Enrollment reminders', read: false },
  { id: 'TEST-002', title: 'Library hours update', read: true },
];

export default function HomeScreen() {
  const scrollRef = useRef<ScrollViewInstance>(null);
  const unreadUtilityCount = utilityAnnouncements.filter((item) => !item.read).length;

  return (
    <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.welcomeCard}>
            <SectionHeading
              title="Campus Announcements"
              subtitle="Stay updated with the latest campus news."
            />
            <ActionButton
              label="View All Announcements"
              onPress={() => scrollRef.current?.scrollToEnd({ animated: true })}
            />
            <Image
              source={require('../../assets/images/campus-banner.png')}
              style={styles.banner}
              resizeMode="contain"
              accessible
              accessibilityLabel="Campus emblem"
            />
          </View>
          <View style={styles.utilityCard}>
            <Text accessibilityRole="header" style={styles.utilityHeading}>
              Announcement Utility Test
            </Text>
            <Text style={styles.utilityText}>
              Total Announcements: {utilityAnnouncements.length}
            </Text>
            <Text style={styles.utilityText}>
              Unread Announcements: {unreadUtilityCount}
            </Text>
            <Text style={styles.utilityText}>• {utilityAnnouncements[0].title}</Text>
          </View>
          <AnnouncementPanel />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F6FB',
  },
  safeArea: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 24,
  },
  content: {
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    paddingTop: Platform.OS === 'web' ? 76 : 16,
    paddingBottom: 16,
  },
  welcomeCard: {
    gap: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  banner: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
  },
  utilityCard: {
    gap: 3,
    marginTop: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  utilityHeading: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },
  utilityText: {
    color: '#344256',
    fontSize: 12,
    lineHeight: 17,
  },
});
