import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Campus Connect</Text>
            <Text style={styles.subtitle}>
              One campus. Connected students.
              {'\n'}
              Your campus community starts here.
            </Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F3F6FB',
  },
  safeArea: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 30,
  },
  content: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingVertical: 32,
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
});
