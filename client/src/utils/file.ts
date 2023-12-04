export const convertBytesToMbsOrKbs = (filesize: number): string => {
  let size = "";
  if (filesize >= 1048576) {
    size = Math.round(filesize / 1048576) + "mb";
  } else if (filesize >= 1024) {
    size = Math.round(filesize / 1024) + "kb";
  } else {
    size = filesize + "b";
  }

  return size;
};
