import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với Chia tiền nhóm</Text>

      <TouchableOpacity style={styles.button}>
        <View style={[styles.buttonText]}>
          <Text style={styles.title2}>Đăng nhập với Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={[styles.buttonText]}>
          <Text style={styles.title2}>Đăng nhập với Apple</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.title3}>
        Khi đăng ký, bạn đã đồng ý với{' '}
        <Text style={styles.link}>Điều khoản dịch vụ</Text> và{' '}
        <Text style={styles.link}>Chính sách Quyền riêng tư</Text>, gồm cả Sử dụng Cookie.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21.82,
    marginVertical: 140,
    textAlign: 'left',
  },
  title2: {
    fontSize: 16,
    paddingHorizontal: 8,
    fontWeight: '700',
  },
  title3: {
    fontSize: 12,
    lineHeight: 16.37,
    fontWeight:400,
    letterSpacing:1,
  },
  link: {
    color: '#1E90FF',
    // textDecorationLine: 'underline',
    fontWeight:700,
    letterSpacing:1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 100,
    width: 311,
    height: 52,
  },
  buttonText: {
    marginLeft: 32,
    fontSize: 16,
  },
});

export default App;
