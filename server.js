const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '欢迎使用huangzhishiwo后端API！',
    status: '运行正常',
    time: new Date().toISOString()
  });
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: '学习后端开发', done: true },
    { id: 2, title: '学习部署', done: false },
    { id: 3, title: '开始项目', done: false }
  ]);
});

app.post('/api/tasks', (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  res.json(newTask);
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
