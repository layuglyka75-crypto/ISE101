import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${read ? 'Mark as unread' : 'Mark as read'}: ${title}`}
        onPress={onMarkRead}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>{read ? 'Mark as Unread' : 'Mark as Read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCE3EC',
  },
  title: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  category: {
    color: '#555555',
    fontSize: 14,
  },
  status: {
    color: '#222222',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
