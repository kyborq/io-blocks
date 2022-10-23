import { icons, TIcon } from "../icons";

type Props = {
  name: TIcon;
};

export const Icon: React.FC<Props> = ({ name }) => {
  const IconComponent = icons[name];

  return <IconComponent fill="#c7c7c7" />;
};
