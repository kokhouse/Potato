#!/bin/bash

###########################################################
# Gladys Project
# https://github.com/AngrySpartan/michael/
# Software under AttributionNonCommercial licence 
# https://creativecommons.org/licenses/by-nc/4.0/
# You may not use this software for commercial purposes.
# @author :: Michael Caprice Lindsey
#
###########################################################


# This install files is for  simplifying the installation of Gladys
# on a Raspberry Pi
# Make sure your firmware version is up to date,
# You can upgrade with the command "sudo rpi-update"



# Update & upgrade package
echo "apt-get install and apt-get upgrade" 
sudo apt-get update && sudo apt-get -y upgrade

# Installing building tools
sudo apt-get install -y build-essential

# Installing Node.js
echo "Installing Node.js"
wget https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv6l.tar.xz
tar -xvf node-v4.5.0-linux-armv6l.tar.xz
cd node-v4.5.0-linux-armv6l
sudo cp -R * /usr/local/

# Install MySQL
echo "Installing MySQL"
sudo apt-get install -y mysql-server


# Creating database gladys
echo "Creating MySQL DB"
mysql -u root -proot -e "create database gladys"

# Dependencies
sudo apt-get install -y libasound2-dev

# NPM global modules
sudo npm install -g pm2

# create gladys folder
cd /home/pi
mkdir gladys
cd gladys

# Installing Gladys - One line ! :)
npm install gladys

# Init script of Gladys
cd node_modules/gladys
node init.js

# buildProd
grunt buildProd

# Starting Gladys at startup
pm2 startup
pm2 start /home/pi/gladys/node_modules/gladys/app.js --name gladys
pm2 save
