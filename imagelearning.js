import React, { useState } from 'react';

const ImageLearning = () => {
  const [imageSelected, setImageSelected] = useState(null);
  const [answer, setAnswer] = useState('');

  // รูปภาพที่ผู้เรียนสามารถเลือก
  const images = [
    { src: '/images/dog.jpg', word: 'สุนัข' },
    { src: '/images/apple.jpg', word: 'แอปเปิ้ล' },
    // เพิ่มรูปภาพและคำศัพท์
  ];

  const handleImageClick = (word) => {
    setImageSelected(word);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (answer === imageSelected) {
      alert('คำตอบถูกต้อง!');
    } else {
      alert('คำตอบผิด ลองใหม่อีกครั้ง!');
    }
  };

  return (
    <div>
      <h2>เรียนรู้คำศัพท์จากภาพ</h2>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.word}
            onClick={() => handleImageClick(image.word)}
            style={{ width: '200px', margin: '10px', cursor: 'pointer' }}
          />
        ))}
      </div>
      {imageSelected && (
        <div>
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="พิมพ์คำตอบของคุณ"
          />
          <button onClick={handleCheckAnswer}>ตรวจสอบคำตอบ</button>
        </div>
      )}
    </div>
  );
};

export default ImageLearning;
