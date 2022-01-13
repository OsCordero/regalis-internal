import React, { useState } from "react";
import { useMoralis } from "react-moralis";


const Notifications = async (email: string, number: string) => {

const { Moralis } = useMoralis();

    class Notifications extends Moralis.Object {
        email: string;
        number: string;
        isEnabled: boolean;
        constructor() {
        // Pass the ClassName to the Moralis.Object constructor
        super('Notifications');
        // All other initialization
        this.email = '';
        this.number = ''; 
        this.isEnabled = true;
        }  
   
    }

    const notifications = new Notifications();
    notifications.set('email', email);
    notifications.set('number', number);   

    await notifications.save()
    .then((notifications) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + notifications.id);
      }, (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      });
      return notifications;
}

export default Notifications;