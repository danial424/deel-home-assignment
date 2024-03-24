import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deel.assignment',
  appName: 'deel-home-assignment',
  webDir: 'build',
  server: {
    "url": "http://localhost:3000",
		"cleartext": true,
		"allowNavigation": ["*"]
		// "allowNavigation": ["*"]
    // url: 'http:192.168.18.181:3000',
    // androidScheme: 'https'
  }
};

export default config;
