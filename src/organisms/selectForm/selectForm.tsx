import { Payload as ItemPayload } from '~/atoms/item/item';
import { Group } from '~/libs/schemas';
import AccordionList from '~/molecules/accordionList/accordionList';

export type Payload = {
  groups: Group[];
};

export type Props = Payload;

export default function SelectForm({ groups }: Props) {
  const onClickItemHandler = (itemPayload: ItemPayload) => {
    console.log(itemPayload.member.name);
  };
  // TODO: add form component
  return (
    <>
      <AccordionList groups={groups} onClickItemFunc={onClickItemHandler} />
    </>
  );
}
