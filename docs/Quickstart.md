# SCC Programming Club Website Quickstart

In our project, we invoke frameworks, Flask (black-end) and React (front-end).

There are the first few steps to help you to run up both projects (Flask and React).

## Flask

Flask is a Web framework, and it is used as a RESTFul API in our project, to provide back-end server. It based on Python, and we use `pip` to manage all python packages.

To check if `pip` and `python` work in your terminal or not.
```shell
# you could use python (pip) or python3 (pip3), in this tutorials, we go with python3.
python --version
pip --version

# or

python3 --version
pip3 --version
```

if not, please install [Python](https://www.python.org/downloads/) first.

### Run Flask Project

Install Flask package:

```shell
pip3 install Flask
```

Run Flask:
```shell
# go to the path where app.py is on.
cd ./server
python3 -m flask run
```

In development environment, we use port 5000, go to [http://127.0.0.1:5000](http://127.0.0.1:5000)

## React

React is a Node.js framework used for front-end in our project. 

> To run both fromeworks, Flask and React, you have to go to the other new terminal. 

React relates to `Node.js` and `npm`; therefore, to install node.js and npm is the first step.

### Install Node.js and npx.

To check Node.js and npm is available:

```shell
node --version
npm --version
npx --version
```

If not, install [Node.js](https://nodejs.org/en/download/)

### Run React

```shell
# go client path
cd ./client
npm start
```
Go to [http://127.0.0.1:3000](http://127.0.0.1:3000)

