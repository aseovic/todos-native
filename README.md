# To Do List Native for Dec 2016 Hackaton

To Do List Native allows you to view your tasks on an iPhone.

It uses the same backend created for the To Do List web application, and deployed to GCE, and implements
native iOS application using Reactive Native and Exponent. Just like the web application, the mobile
application uses Facebook Login in order to authenticate the users and access their task list. 

The goal was to demonstrate how to leverage the existing To Do List API and extend application reach to
mobile devices.

## Running To Do List Native on iPhone

In order to run the application you will need to install Exponent (https://itunes.apple.com/us/app/exponent/id982107779?mt=8)
on your phone and run it.

Once the Exponent starts, it will allow you to enter the name of the application to start:
```
@aleks/todos-native
```

or if that doesn't work for some reason, the full URL of the app:
```
https://exp.host/@aleks/todos-native
```