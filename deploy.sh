#!/bin/sh
npm run build
rm -rf ../my-resume-backend/build
cp -r build ../my-resume-backend/
