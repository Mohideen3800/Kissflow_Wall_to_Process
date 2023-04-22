const lcncSDK = require('lcnc-sdk-js'); // Import the lcnc-sdk-js library

// Authenticate with the Kissflow API
const apiKey = 'YOUR_API_KEY';
const apiBaseUrl = 'https://YOUR_DOMAIN.kissflow.com/api';

// Retrieve the messages from the wall
const wallId = 'WALL_ID';
const wallMessagesUrl = `${apiBaseUrl}/v1/walls/${wallId}/messages`;
const wallMessagesResponse = await lcncSDK.get(wallMessagesUrl, apiKey); // Use the lcnc-sdk-js to retrieve the messages
const wallMessages = wallMessagesResponse.data;

// Get the content of the latest message
const latestMessage = wallMessages[0];
const latestMessageContent = latestMessage.content;

// Trigger a new process in Kissflow
const domain = 'YOUR_DOMAIN';
const app = 'YOUR_APP_NAME';
const flow = 'YOUR_FLOW_NAME';
const event = 'YOUR_EVENT_NAME';
const createProcessUrl = `${apiBaseUrl}/1.1/${domain}/${app}/${flow}/${event}`;
const createProcessData = {
  input: {
    message: latestMessageContent, // Pass the latest message content as input to the process
  },
};
const createProcessResponse = await lcncSDK.post(createProcessUrl, createProcessData, apiKey); // Use the lcnc-sdk-js to trigger the process

console.log('New process created with message content:', latestMessageContent);
