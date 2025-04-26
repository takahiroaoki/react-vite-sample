import { Member } from "~/libs/schemas";
import styles from './item.module.css';

export type Payload = {
    member: Member
}

export type Props = Payload & {
    onClickFunc?: (payload: Payload) => void
}

export default function Item({ member, onClickFunc }: Props) {
    return (
        <div
            className={styles.item}
            onClick={() => { onClickFunc && onClickFunc({member}) }}
        >
            {member.name}
        </div>
    );
}