#!/bin/bash

echo
echo ==================================
echo Testing Ng Wallet
echo ==================================
echo

# pre-built lib to resolve deps
cd lib
npm install
npm run bootstrap

# run angular build
cd ../web/angular-wallet
npm install
npm run test
npm run build:ci

cd ../..
