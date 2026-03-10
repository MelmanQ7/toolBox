self.addEventListener('notificationclick', event => {
  event.notification.close();

  const answer = event.action === 'yes';

  self.clients.matchAll({ type: 'window' }).then(clients => {
    clients.forEach(client =>
      client.postMessage({ answer })
    );
  });
});