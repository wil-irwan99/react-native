import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './src/features/Welcome/WelcomePage';
import LoginPage from './src/features/Login/LoginPage';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';
import { serviceFactory } from './src/services/ServiceFactory';
import { DepedencyProvider } from './src/shared/context/DepedencyContext';
import ProductList from './src/features/Product/ProductList';
import HomePage from './src/features/Home/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/navigation/AppRouter';

export default function App() {
    const fonts = useAppFont();
    const services = serviceFactory();
    if(!fonts){
      return null;
    }
  return (
    <DepedencyProvider services={services}>
      <ThemeProvider>
        <NavigationContainer>
          <AppRouter/>
        </NavigationContainer>
      </ThemeProvider>
    </DepedencyProvider>
  );
}
