import { ReactElement } from "react";

const Message = (prop: { message: string }): ReactElement => {
    return (
        <p>{prop.message}</p>
    )
}

export default Message;