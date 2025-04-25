import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ส่งข้อมูลล็อกอินไปที่ server
      const response = await axios.post('/api/login', { username, password });

      if (response.data.success) {
        // หากล็อกอินสำเร็จและระยะเวลาใช้งานยังไม่หมด
        window.location.href = '/dashboard'; // เปลี่ยนเส้นทางไปที่หน้าหลัก
      } else {
        setErrorMessage(response.data.message); // แสดงข้อความข้อผิดพลาด
      }
    } catch (error) {
      setErrorMessage('เกิดข้อผิดพลาดในการล็อกอิน');
    }
  };

  return (
    <div>
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
