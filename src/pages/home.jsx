import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
export default function Home() {
  //where we want to save the data - we will create collection
  const ref = collection(firestore, "messages");
  const messageRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();

    console.log(messageRef.current.value);

    //save the data
    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
