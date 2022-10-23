import logo from "./logo.svg";
import file from "./file.svg";
import open from "./folder.svg";
import save from "./save.svg";
import settings from "./settings.svg";
import share from "./share.svg";

export const icons = {
  logo,
  file,
  open,
  save,
  settings,
  share,
};

export type TIcon = keyof typeof icons;
