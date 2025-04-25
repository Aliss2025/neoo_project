import React, { useState } from 'react';

const SentenceLearning = () => {
  const [inputSentence, setInputSentence] = useState('');
  const [translatedSentence, setTranslatedSentence] = useState('');

  const handleInputChange = (e) => {
    setInputSentence(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      // ส่งประโยคไปที่ server เพื่อแปล
      const response = await axios.post('/api/translate', { sentence: inputSentence });

      if (response.data.success) {
        setTranslatedSentence(response.data.translatedSentence); // คำแปล
      } else {
        alert('ไม่สามารถแปลประโยคได้');
      }
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการแปล');
    }
  };

  return (
    <div>
      <h2>เรียนรู้ภาษาโดยการแปลประโยค</h2>
      <div>
        <input
          type="text"
          value={inputSentence}
          onChange={handleInputChange}
          placeholder="กรอกประโยคในภาษาของคุณ"
        />
        <button onClick={handleTranslate}>แปลประโยค</button>
      </div>
      {translatedSentence && (
        <div>
          <h3>คำแปล:</h3>
          <p>{translatedSentence}</p>
        </div>
      )}
    </div>
  );
};

export default SentenceLearning;
