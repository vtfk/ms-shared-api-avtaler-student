[![Build Status](https://travis-ci.com/vtfk/ms-shared-api-avtaler-student.svg?branch=master)](https://travis-ci.com/vtfk/ms-shared-api-avtaler-student)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# ms-shared-api-avtaler-student

API for student to see own agreements

## API

### `GET /agreements/myagreements`

Get all agreements for logged in user as an array

```JavaScript
[
  {
    _id: "5cfcf4c2560368954e9aee74",
    uid: "12345678987",
    aid: "5514ec16-59bf-4009-bd5d-452c57144a17",
    fid: "9b064152-5a50-4c3b-bc97-5c8edd87c3c1",
    type: "elevpc",
    partOf: "",
    signedByService: true,
    history: [
      {
        timeStamp: 1560104338892,
          changes: {
            signedByService: true
          },
      },
      {
        timeStamp: 1560104339569,
        changes: {
          signedByService: true
        },
      },
    ] ,
    isSigned: true,
    parts: [
      {
        _id: "5cfba63847289a8314684fb0",
        uid: "98765432112",
        aid: "5514ec16-59bf-4009-bd5d-452c57144a18",
        fid: "503ee569-a480-43d8-96d8-e61cf38c5ed7",
        type: "elevpc",
        partOf: "5514ec16-59bf-4009-bd5d-452c57144a17",
        history: [
          {
            timeStamp: 1560145977956,
            changes: {
              aid: "5514ec16-59bf-4009-bd5d-452c57144a18",
              fid: "503ee569-a480-43d8-96d8-e61cf38c5ed7",
            },
          }
        ],
        isSigned: false,
      },
      {
        _id: "5cfca18f25a3a62e947d615b",
        uid: "32165432112",
        aid: "333dec0e-158b-4b1c-9245-f6f205f3182e",
        fid: "1cb89b34-e95c-426b-a500-35a759f82b04",
        type: "elevpc",
        partOf: "5514ec16-59bf-4009-bd5d-452c57144a17",
        signedByAdmin: {
          signee: {
            uid: "1234467585866",
            name: "Ole Bull Ball",
          }
        },
        history: [
          {
            timeStamp: 1560060608709,
            changes: {
              signedByAdmin: {
                signee: {
                  uid: "1234467585866",
                  name: "Ole Bull Ball",
                }
              }
            },
          }
        ],
        isSigned: true,
      },
    ],
  }
]
```

# Development

You'll need the [now-cli](https://zeit.co/now) installed

- clone the repo
- install dependencies
- add a `.env` file
- start the service with now-dev ```$ now dev```

.env

```
NODE_ENV=development
MOA_TENANT_ID=your-moa-tenant-id
AGREEMENT_SERVICE_URL=url-for-agreement-service
AGREEMENT_SERVICE_SECRET=jwt-secret-for-argreement-service
PAPERTRAIL_HOST=your-papertrail-host
PAPERTRAIL_PORT=your-papertrail-post
PAPERTRAIL_HOSTNAME=your-papertrail-hostname
```

# Deploy

This service is created to run on the [ZEIT/Now](https://zeit.co/now) serverless infrastructure.

Make sure the settings in [now.json](now.json) matches your environment.

Run the deploy script.

```
$ npm run deploy
```

## License

[MIT](LICENSE)
