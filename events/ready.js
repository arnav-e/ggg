module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(" I M 24/7 :D ", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
