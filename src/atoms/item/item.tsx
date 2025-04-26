import { Member } from "~/libs/schemas";

export type Payload = {
    member: Member
}

export type Props = Payload & {
    onClickFunc?: (payload: Payload) => void
}

export default function Item({ member, onClickFunc }: Props) {
    return (
        <div
            onClick={() => { onClickFunc && onClickFunc({member}) }}
        >
            {member.name}
        </div>
    );
}