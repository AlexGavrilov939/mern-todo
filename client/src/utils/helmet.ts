import { HelmetTags } from "react-helmet-async";

export const handleScriptInject = (
  addedTags: HelmetTags,
  scriptSrc: string,
  cb: () => void
) => {
  if (!addedTags.scriptTags) {
    return;
  }
  const script = addedTags.scriptTags.find(
    (scriptTag: HTMLScriptElement) =>
      scriptTag.outerHTML.indexOf(scriptSrc) !== -1
  );

  if (script) {
    script.addEventListener("load", () => {
      cb();
    });
  }
};
