import apps from "./apps.svg";
import home from "./home.svg";
import history from "./history.svg";
import file from "./file.svg";
import trash from "./trash.svg";
import user from "./user.svg";
import settings from "./settings.svg";
import notification from "./notification.svg";
import close from "./close.svg";
import chevronRight from "./chevron-right.svg";

export const icons = {
  apps,
  history,
  file,
  trash,
  home,
  user,
  settings,
  notification,
  close,
  chevronRight,
};

export type TIcon = keyof typeof icons;
