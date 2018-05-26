# React & Node JS Boilerplate
Production ready boilerplate with Webpack & Babel pre-configured.

![boilerplate](https://user-images.githubusercontent.com/15266438/40571839-82bc51e4-60bd-11e8-87dc-f8b6b20a8426.png)

Being a React JS developer is not a easy job. While working on React projects we need to do a lot of small configurations, we need to configure webpack and babel to get our code running.

Well you are thinking that facebook has already provided a package using which we can start working on React projects easily without any configurations. Check out [here](https://github.com/facebook/create-react-app). 

Yes, right you can start your project by using a single command 
```
npx create-react-app my-app
```
But, using facebook `create-react-app` package will not provide you to customize the behavior of your React JS project. If you want customization and ability to use any plugins of your choice you need to setup the webpack and babel manually. 

Here, I have created a Boilerplate which can be used for starting your React or Node projects asap, also you can add/remove packages, plugins of your choice. 



# GETTING STARTED FOR DEVELOPMENT
Follow the below given steps to get started with the boilerplate.

1. Clone this git repository to your local machine. If you are new to git then refer this [article](https://help.github.com/articles/cloning-a-repository/) to get your job done or you can also download the zip.

2. Install the dependancies in your local directory.

```
yarn install
```
3. Now your boilerplate is ready, let's run the development server and check in the browser if every thing is working.

```
yarn run dev-server
```

4. Once development server is running, you can now visit this url `http://localhost:8080` in your browser.

5. If you see a React & Node Boilerplate message, then congrats you have successfully installed the boilerplate on your local machine.

# GETTING STARTED FOR PRODUCTION
Follow the given steps once you are ready to host your application.

1. Before you host your application it is necessary to run the webpack production build. Use below command to do so.
```
yarn run build:prod
```
After running the above command, you will see the build takes more time and you will see the `bundle.js` and `styles.css` is created under `public/dist` directory.

2. Before hosting your application online let us confirm whether production server is ready or not.
3. In this boilerplate, you will find `Express JS server` is configured to serve the files. 
4. To run the production server, enter the below given command.
```
yarn run start
```
5. Now, verify that everything is working fine, enter `http://localhost:3000` in your browser. If you see the React & Node Boilerplate page, then congrats your production server is ready and can be hosted on server.


## NOTE: 
> Production commands requires more time to compile the code and produce `bundle.js` and `styles.css` files as compared to development commands. So it is necessary that you use production commands only when you are planning to host your application on the server and not everytime in development.

# What is included in the Boilerplate?
* babel-cli
* babel-core
* babel-loader
* babel-plugin-transform-class-properties
* babel-plugin-transform-object-rest-spread
* bobel-polyfill
* babel-preset-env
* babel-preset-react
* css-loader
* express
* extract-text-webpack-plugins (beta)
* file-loader
* react
* react-dom
* react-redux
* redux
* style-loader (Fallback)
* url-loader
* webpack
* webpack-cli
* webpack-dev-server

If this boilerplate works for you then don't forget to share this with your friends. Any issues identified then please open issue here. Contribute to this boilerplate.
