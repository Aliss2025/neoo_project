import React, { useState } from 'react';

// คอมโพเนนต์สำหรับการเลือกภาษาหลักและภาษาที่ต้องการเรียน
const LanguageSelection = () => {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [learningLanguage, setLearningLanguage] = useState('');
  const [level, setLevel] = useState('');

  const handlePrimaryLanguageChange = (e) => setPrimaryLanguage(e.target.value);
  const handleLearningLanguageChange = (e) => setLearningLanguage(e.target.value);
  const handleLevelChange = (e) => setLevel(e.target.value);

  return (
    <div>
      <h2>เลือกภาษาหลักและภาษาที่ต้องการเรียน</h2>
      
      <label>ภาษาหลัก:</label>
      <select onChange={handlePrimaryLanguageChange}>
        <option value="th">ไทย</option>
        <option value="en">อังกฤษ</option>
        <option value="zh">จีน</option>
        {/* เพิ่มตัวเลือกภาษาอื่นๆ */}
      </select>

      <label>ภาษาที่ต้องการเรียน:</label>
      <select onChange={handleLearningLanguageChange}>
        <option value="en">อังกฤษ</option>
        <option value="zh">จีน</option>
        <option value="th">ไทย</option>
        {/* เพิ่มตัวเลือกภาษาอื่นๆ */}
      </select>

      <label>ระดับการเรียน:</label>
      <select onChange={handleLevelChange}>
        <option value="beginner">เริ่มต้น</option>
        <option value="intermediate">กลาง</option>
        <option value="advanced">สูง</option>
      </select>

      <button onClick={() => console.log({ primaryLanguage, learningLanguage, level })}>ยืนยันการเลือก</button>
    </div>
  );
};

export default LanguageSelection;
