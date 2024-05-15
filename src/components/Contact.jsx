import { useForm } from "react-hook-form";
import { SectionHeader } from "./Constants";
const Contact = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle form submission, like sending data to server
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SectionHeader letter="" sentence=""></SectionHeader>
    </form>
  );
};

export default Contact;
