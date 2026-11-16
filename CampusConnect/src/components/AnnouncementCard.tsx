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
    gap: 3,
    padding: 10,
    marginVertical: 5,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#DCE3EC',
  },
  title: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
  },
  category: {
    color: '#526070',
    fontSize: 12,
    lineHeight: 16,
  },
  status: {
    color: '#222222',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#2563EB',
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
