// import loadjs from "loadjs";

let scriptLoaderPromise: null | Promise<any> = null;

export const loadRemoteScript = async () => {
  const loadjs =
    typeof window !== "undefined"
      ? require("loadjs")
      : (link: string, { success: callback }: any) => callback();
  if (scriptLoaderPromise !== null) return scriptLoaderPromise;
  scriptLoaderPromise = new Promise((resolve, reject) =>
    loadjs("https://www.gstatic.com/charts/loader.js", {
      success: resolve,
      error: reject
    })
  );
  return scriptLoaderPromise;
};

export const loadGoogleScripts = async ({
  window = {}
}: {
  window: {
    google?: any;
  };
}) => {
  try {
    if ("google" in window) return;
    await loadRemoteScript();
  } catch (err) {
    console.error(
      `Could not load chart loader scripts from Google : ${err.message}`,
      err
    );
  }
};
