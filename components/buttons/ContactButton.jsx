const ContactButton = ({buttonText}) => {
    const openChatScreen = () => {
      const chatButton = document.getElementsByClassName('videoask-embed__button--SgLKO')[0];
      if (chatButton) {
        chatButton.click();
      }
    };
  
    return (
      <button
        className="px-20 mt-8 mx-5 py-2 text-white border border-blue-500 rounded hover:border-white transition duration-300 ease-in-out focus:outline-none"
        onClick={openChatScreen}
      >
        {buttonText}
      </button>
    );
  };
  
  export default ContactButton;