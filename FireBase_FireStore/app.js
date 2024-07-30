import {collection,addDoc,getDocs,} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./config.js";
  
  const form = document.querySelector("#form");
  const todo = document.querySelector("#todo");
  const list = document.querySelector("#list");
  
  const arr = [];
  
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      arr.push(doc.data());
    });
    console.log(arr);
    renderTodo();
  }
  
  getData();
  
  function renderTodo() {
    list.innerHTML = "";
    if (arr.length === 0) {
      list.innerHTML = "no data found";
      return;
    }
    arr.map((item) => {
      list.innerHTML += `
          <li>${item.todo}</li>
          `;
    });
  }
  
  form.addEventListener("submit", async (event) => {
    event.preventDefalistt();
    arr.push({
      todo: todo.value,
    });
    renderTodo();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo.value,
      });
      todo.value = "";
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });