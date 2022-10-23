type ClassNameType = string | null | boolean | undefined;

export const classnames = (...names: ClassNameType[]) => {
  return names
    .filter((name) => !!name)
    .map((name) => name)
    .join(" ");
};
