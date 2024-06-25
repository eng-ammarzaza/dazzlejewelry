import SendBtn from "./Buttons/sendBtn/SendBtn";

function ContactForm() {
  return (
    <div>
      <form className="my-10 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Please enter your name"
          className="checkinput w-2/3 shadow-md shadow-brand-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Please enter your E-mail"
          className="checkinput w-2/3 shadow-md shadow-brand-500"
        />
        <input
          type="text"
          name="message"
          placeholder="Please enter your message"
          className="checkinput w-2/3 h-44 shadow-md shadow-brand-500"
        />
        <SendBtn />
      </form>
    </div>
  );
}

export default ContactForm;
