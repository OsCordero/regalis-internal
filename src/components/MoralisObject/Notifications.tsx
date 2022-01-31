import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export const useNotifications = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { Moralis, user } = useMoralis();
  const ethadress = user?.get("ethAddress");

  class Notifications extends Moralis.Object {
    email: string;
    number: string;
    isEnabled: boolean;
    address: any;
    constructor() {
      // Pass the ClassName to the Moralis.Object constructor
      super("Notifications");
      // All other initialization
      this.email = "";
      this.number = "";
      this.isEnabled = false;
      this.address = ethadress;
    }
  }

  const activate = async (email: string, number: string) => {
    const notifications = new Notifications();
    notifications.set("email", email);
    notifications.set("number", number);
    notifications.set("address", ethadress);
    notifications.set("isEnabled", true);

    await notifications.save().then(
      (notifications) => {
        // Execute any logic that should take place after the object is saved.
        alert("New object created with objectId: " + notifications.id);
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      }
    );
  };

  return { activate };
};

export default useNotifications;

// class Notifications extends Moralis.Object {
//   email: string;
//   number: string;
//   isEnabled: boolean;
//   address: any;
//   constructor() {
//     // Pass the ClassName to the Moralis.Object constructor
//     super("Notifications");
//     // All other initialization
//     this.email = "";
//     this.number = "";
//     this.isEnabled = true;
//     this.address = ethadress;
//   }
// }

// const Notifications = async (email: string, number: string) => {
//   const { Moralis, user } = useMoralis();

//   const ethadress = user?.get("ethAddress");

//   class Notifications extends Moralis.Object {
//     email: string;
//     number: string;
//     isEnabled: boolean;
//     address: any;
//     constructor() {
//       // Pass the ClassName to the Moralis.Object constructor
//       super("Notifications");
//       // All other initialization
//       this.email = "";
//       this.number = "";
//       this.isEnabled = true;
//       this.address = ethadress;
//     }
//   }

//   const notifications = new Notifications();
//   notifications.set("email", email);
//   notifications.set("number", number);

//   await notifications.save().then(
//     (notifications) => {
//       // Execute any logic that should take place after the object is saved.
//       alert("New object created with objectId: " + notifications.id);
//     },
//     (error) => {
//       // Execute any logic that should take place if the save fails.
//       // error is a Moralis.Error with an error code and message.
//       alert("Failed to create new object, with error code: " + error.message);
//     }
//   );
//   return notifications;
// };
