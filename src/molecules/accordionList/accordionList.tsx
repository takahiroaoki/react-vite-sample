import Accordion from "~/atoms/accordion/accordion"
import { Payload as ItemPayload } from "~/atoms/item/item"
import { Group } from "~/libs/schemas"

export type Payload = {
    groups: Group[]
}

export type Props = Payload & {
    onClickItemFunc?: (itemPayload: ItemPayload) => void
}

export default function AccordionList({ groups, onClickItemFunc }: Props) {
    return (
        <>
            {groups.map((group) => (
                <Accordion
                    key={group.name}
                    group={group}
                    onClickItemFunc={onClickItemFunc}
                />
            ))}
        </>
    )
}