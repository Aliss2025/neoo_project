function loadUserProfile(userId) {
    fetch(`/get-user-profile/${userId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('username').textContent = `Username: ${data.username}`;
            document.getElementById('email').textContent = `Email: ${data.email}`;
            document.getElementById('language-preference').textContent = `Preferred Language: ${data.language_preference}`;
            document.getElementById('date-of-birth').textContent = `Date of Birth: ${data.date_of_birth}`;
        });
}

function loadLearningHistory(userId) {
    fetch(`/get-learning-history/${userId}`)
        .then(response => response.json())
        .then(data => {
            const historyBody = document.getElementById('history-body');
            historyBody.innerHTML = '';  // Clear the previous content

            data.forEach(history => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${history.language_learned}</td>
                    <td>${history.score} / ${history.total_questions}</td>
                    <td>${new Date(history.test_date).toLocaleString()}</td>
                `;
                historyBody.appendChild(row);
            });
        });
}

// Example usage:
// Assuming userId is 1 for the current logged-in user
const userId = 1;
loadUserProfile(userId);
loadLearningHistory(userId);
document.addEventListener('DOMContentLoaded', function () {
    // Set current date
    const currentDate = new Date();
    document.getElementById('current-date').textContent = currentDate.toDateString();
  
    // Dummy data for remaining days
    let remainingDays = 30; // You can update this dynamically
    document.getElementById('remaining-days').textContent = remainingDays;
  
    // Handle language level and learning type selection
    const languageLevel = document.getElementById('language-level');
    const learningType = document.getElementById('learning-type');
    const learningContent = document.getElementById('learning-content');
  
    function updateContent() {
      const level = languageLevel.value;
      const type = learningType.value;
      let contentHTML = '';
  
      if (type === 'image') {
        contentHTML = `
          <img src="example-image.jpg" alt="เรียนรู้คำศัพท์" onclick="playAudio('example-image.mp3')" />
          <p>คำศัพท์: สวัสดี</p>
          <button onclick="playAudio('hello.mp3')">ฟังคำนี้</button>
        `;
      } else if (type === 'sentence') {
        contentHTML = `
          <p>ประโยค: สวัสดีครับ/ค่ะ, คุณชื่ออะไร?</p>
          <button onclick="playAudio('sentence.mp3')">ฟังประโยคนี้</button>
        `;
      } else if (type === 'qa') {
        contentHTML = `
          <p>คำถาม: คุณชื่ออะไร?</p>
          <button onclick="playAudio('question.mp3')">ฟังคำถาม</button>
          <p>คำตอบ: ฉันชื่อ... (กดเพื่อฟัง)</p>
          <button onclick="playAudio('answer.mp3')">ฟังคำตอบ</button>
        `;
      }
  
      learningContent.innerHTML = contentHTML;
    }
  
    // Update content when selection changes
    languageLevel.addEventListener('change', updateContent);
    learningType.addEventListener('change', updateContent);
  
    // Function to play audio
    function playAudio(audioFile) {
      const audio = new Audio(audioFile);
      audio.play();
    }
  
    // Initial content load
    updateContent();
  });
  