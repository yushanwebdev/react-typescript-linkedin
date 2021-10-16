import { ReactElement } from "react";

interface UserMessage {
  name: string;
  message: string;
}

const Message = (props: UserMessage): ReactElement => {
  return (
    <p>
      {props.name}, {props.message}
    </p>
  );
};

export default Message;
