import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function NewChannel() {
  const [name, setName] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement(document.getElementById('root'));

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "/channels";
    const body = { name };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong with the network response.");
        }
      })
    closeModal();
  }

  return (
    <div>
      <div className="fixed absolute bottom-0 right-0 z-40 mb-6 mr-4">
        <button
          onClick={openModal}
          className="flex items-center justify-center w-12 h-12 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full focus:outline-none flex-no-shrink">
          <svg className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 32 32">
            <path fillRule="nonzero"
              d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1 Z" />
          </svg>
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Add a channel"
      >
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="font-bold text-xl mb-2 text-center">Create a channel</div>
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              type="text"
              value={name}
              placeholder="e.g. Ruby on Rails"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
            <button onClick={closeModal} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );

}

export default NewChannel;