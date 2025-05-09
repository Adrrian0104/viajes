import React, { useState } from 'react';
import API from '../services/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/login', form);
      alert(`Bienvenido ${res.data.user.first_name}`);
    } catch (err) {
      alert('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Correo" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}
