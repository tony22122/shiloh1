import ContactButton from "../buttons/ContactButton.jsx";
import ContactThreeJsComponent from "../elements/ContactThreeJsComponent.jsx";

const ContactFormSection = ({
  text,
  buttonText,
}) => {
  return (
    <>
    <div id="contact" className="relative z-10 h-screen w-screen">
      <div className="absolute inset-0 z-0">
        <ContactThreeJsComponent />
        
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative flex justify-center items-end w-full mb-20">
          <h1 className="text-6xl font-normal text-white">{text}</h1>
        </div>
        <div className="flex justify-start space-x-4">
        <ContactButton
        buttonText={buttonText}
        />
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactFormSection;
