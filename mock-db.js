"use strict";

const messages = [
  { id: 1, description: "Helios says hello" },
  { id: 2, description: "Eos says hello" },
  { id: 3, description: "Eris says hello" },
];

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

export { getMessageById };
