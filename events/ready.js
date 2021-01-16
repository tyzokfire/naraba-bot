module.exports = (client) => {
    client.user.setPresence({ activity: { name: 'Narabaa[Bot] | .help' }, status: 'dnd' })
  .catch(console.error);
    console.log(`Je suis connecté et prêt à vous servir !`);
  }