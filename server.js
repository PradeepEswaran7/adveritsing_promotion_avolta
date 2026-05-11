const base = require('./base/base');
const app = base.app;

require('./apis/promotion-management/promotion-management');

app.listen(base.serverPort(), () => {
  console.log(`Server running at http://localhost:${base.serverPort()}`);
});
