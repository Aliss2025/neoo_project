// แบบฝึกหัด: เลือกคำที่ถูกต้อง
const VocabularyQuiz = () => {
    const [answer, setAnswer] = useState('');
    const question = 'What is the Thai word for "apple"?';
    const correctAnswer = 'แอปเปิ้ล';
  
    const handleAnswerChange = (e) => setAnswer(e.target.value);
  
    const checkAnswer = () => {
      if (answer === correctAnswer) {
        alert('ตอบถูก!');
      } else {
        alert('คำตอบผิด, ลองใหม่!');
      }
    };
  
    return (
      <div>
        <h3>{question}</h3>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="กรอกคำตอบ"
        />
        <button onClick={checkAnswer}>ตรวจสอบคำตอบ</button>
      </div>
    );
  };
  
  export default VocabularyQuiz;
  