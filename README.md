# purple-auth-demo
This is the code for the application demo that was done on 1/7/2021
This is the sample application for the
[Quickstart for Node.js Identity platform authentication app][tutorial]
tutorial found in the [Google App Engine Node.js standard environment][appengine]
documentation.

* [Setup](#setup)
* [Running locally](#running-locally)
* [Deploying to App Engine](#deploying-to-app-engine)
* [Running the tests](#running-the-tests)

## Setup

Before you can run or deploy the sample, you need to do the following:

1.  Refer to the [appengine/README.md][readme] file for instructions on
    running and deploying.
1.  Install dependencies:

        npm install

2.  You will need to create a service account file and put the name of it in routes/getlogintoken.js on line 11.  Replace the name of the service account file with the one that you created.  For example my service account file is ../google.com_lensdemos-2cdac21c1806.json.  Locate the service account file in the top level folder.  Instructions on creating a service account are here:  https://cloud.google.com/identity-platform/docs/install-admin-sdk#initialize-sdk-file

## Running locally

    npm start

## Deploying to GCE

    gcloud compute instances create purple-app-instance-0     --image-family=debian-9     --image-project=debian-cloud     --machine-type=g1-small     --scopes userinfo-email,cloud-platform     --metadata app-location=us-central1-f     --metadata-from-file startup-script=gce/startup-script.sh     --zone us-central1-f     --tags http-server

## Running the tests

See [Contributing][contributing].

[appengine]: https://cloud.google.com/appengine/docs/standard/nodejs
[tutorial]: https://cloud.google.com/appengine/docs/standard/nodejs/quickstart
[readme]: ../../README.md
[contributing]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/CONTRIBUTING.md

