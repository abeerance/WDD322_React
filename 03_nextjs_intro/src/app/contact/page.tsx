import TextComponent from "@/components/text-component";

const ContactPage: React.FC = () => {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-8xl bg-red-400'>Contact</h1>
      <TextComponent />
    </main>
  );
};

export default ContactPage;
