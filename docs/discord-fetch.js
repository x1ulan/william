const fetch = require('node-fetch');  // 在 Node.js 中使用 node-fetch

const token = process.env.DISCORD_TOKEN;
const channelId = process.env.DISCORD_CHANNEL_ID;

const url = `https://discord.com/api/v10/channels/${channelId}/messages`;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bot ${token}`,
  },
})
  .then(response => response.json())
  .then(data => {
    // 在这里处理获取的消息数据
    console.log(data);
    // 将数据插入到 HTML 页面中
    const messagesContainer = document.getElementById('messages');
    // 这只是一个简单的示例，您可能需要使用 DOM 操作来更好地呈现数据
    messagesContainer.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error fetching messages:', error);
  });
