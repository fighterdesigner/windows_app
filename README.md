# windows_app using NW and Nodejs and an Api
this is a src of window app that tracks the data of covid-19 in africa, i set the platfroms to win32 and win64 you could add other like linux of macos

##### clone the repo

and run the following:

```bash

npm i

npm run start

```

npm i to install all the devDependencies which are "nw" and "nw-builder".
npm run start to run this script "nw src/" to see your application

##### build the application

```bash
npm run build
```

this run the following script "nwbuild --platforms win32,win64 --buildDir dist/ src/"
