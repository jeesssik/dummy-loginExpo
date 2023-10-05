import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      {user ? (
        <View>
          <Text>Correo Electrónico: {user.email}</Text>
          {/* Muestra otros detalles del perfil del usuario aquí */}
          <Button title="Cerrar Sesión" onPress={logout} />
        </View>
      ) : (
        <Text>No hay usuario autenticado.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ProfileScreen;
