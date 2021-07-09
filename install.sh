#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install wget
npm audit fix
npm i imgbb-uploader
npm cache clean -f
npm install --also=dev
npm i got

echo "[*] Well done! run \"npm start\" to immediately start devpolice_core"
echo "Updates : fix Bugs"
