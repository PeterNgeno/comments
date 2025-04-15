document.getElementById('commentForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const message = document.getElementById('message').value;
  const status = document.getElementById('status');

  const res = await fetch('/api/send-comment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  status.textContent = data.success ? "Comment sent!" : "Error sending comment.";
  document.getElementById('message').value = '';
});
