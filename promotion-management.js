const base = require('../../base/base');
const app = base.app;

function httpGetBaseCalls (url, callback, errorCallback) {
  try{
    base.httpGetRequest(url, callback, errorCallback);
  } catch (error) {
    console.error('Error reading data:', error);
  }  
}

function httpPostBaseCalls (url, jsonBody, callback, errorCallback) {
  try{
    base.httpPostRequest(url, jsonBody, callback, errorCallback);
  } catch (error) {
    console.error('Error reading data:', error);
  }  
}

app.get('/coreApi/promo/globalCategories', async (req, response) => {
  httpGetBaseCalls( '/coreApi/promo/globalCategories', (data) => {
    response.json(JSON.parse(data));
  },
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});
  }),
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});    
  };
});

app.get('/promoApi/clusters/summary', async (req, response) => {
  if(req.query.categoryIds && req.query.categoryIds.length > 0) {
    httpGetBaseCalls( '/promoApi/clusters/summary?view=USER&scope=PROMOTION&categoryIds=' +req.query.categoryIds, (data) => {
      response.json(JSON.parse(data));
    },
    (err) => {
      console.log("Error: ", err)
      response.status(500).json({ error: err});
    }),
    (err) => {
      console.log("Error: ", err)
      response.status(500).json({ error: err});    
    };
  } else {
    response.status(500).json({ error: 'CategoryIDs parameter missing in the query parameter'});    
  }
});


app.get('/coreApi/globalBackOffices', async (req, response) => {
  if(req.query.companyIds && req.query.companyIds.length > 0) {
    httpGetBaseCalls( '/coreApi/globalBackOffices?companyIds=' +req.query.companyIds.toString(), (data) => {
      response.json(JSON.parse(data));
    },
    (err) => {
      console.log("Error: ", err)
      response.status(500).json({ error: err});
    }),
    (err) => {
      console.log("Error: ", err)
      response.status(500).json({ error: err});    
    };
  } else {
    response.status(500).json({ error: 'CompanyIds parameter missing in the query parameter'});    
  }
});

app.get('/coreApi/promo/companies', async (req, response) => {
  httpGetBaseCalls( '/coreApi/promo/companies', (data) => {
    response.json(JSON.parse(data));
  },
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});
  }),
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});    
  };
});

app.post('/coreApi/globalShops', async (req, response) => {
  httpPostBaseCalls( '/coreApi/globalShops', req.body, (data) => {
    response.json(JSON.parse(data));
  },
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});
  }),
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});    
  };
});

app.post('/coreApi/globalShops/channels', async (req, response) => {
  httpPostBaseCalls( '/coreApi/globalShops/channels', req.body, (data) => {
    response.json(JSON.parse(data));
  },
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});
  }),
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});    
  };
});

app.post('/coreApi/globalShops/transits', async (req, response) => {
  httpPostBaseCalls( '/coreApi/globalShops/transits', req.body, (data) => {
    response.json(JSON.parse(data));
  },
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});
  }),
  (err) => {
    console.log("Error: ", err)
    response.status(500).json({ error: err});    
  };
});


module.exports;
