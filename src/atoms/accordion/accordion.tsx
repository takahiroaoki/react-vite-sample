import { useState, useRef } from "react";
import { Group } from "~/libs/schemas";
import styles from "./accordion.module.css";
import Item, { Payload as ItemPayload } from "../item/item";

export type Payload = {
  group: Group;
};

export type Props = Payload & {
  onClickItemFunc?: (itemPayload: ItemPayload) => void;
};

export default function Accordion({ group, onClickItemFunc }: Props) {
  const [showContents, setShowContents] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const items = useRef<HTMLDivElement>(null);

  const onClickAccordionToggle = () => {
    if (!items.current) return;
    const childHeight = items.current?.clientHeight;
    setContentHeight(childHeight);
    setShowContents(!showContents);
  };

  return (
    <>
      <div>
        <button
          className={styles.button}
          onClick={onClickAccordionToggle}
          aria-expanded={showContents}
          aria-controls={`accordion-content-${group.name}`}
          id={`accordion-button-${group.name}`}
        >
          {group.name}
        </button>
        <div
          role="region"
          id={`accordion-content-${group.name}`}
          aria-labelledby={`accordion-button-${group.name}`}
          style={{
            height: showContents ? `${contentHeight}px` : "0px",
          }}
          className={styles.innerContent}
          aria-hidden={!showContents}
        >
          <div ref={items} data-is-open={showContents}>
            {group.members.map((member) => (
              <Item
                key={member.id}
                member={member}
                onClickFunc={onClickItemFunc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
