import {
  BasicExampleFactory,
  HelperExampleFactory,
  KeyExampleFactory,
  PromptExampleFactory,
  UIExampleFactory,
} from "./modules/examples";
import { getString, initLocale } from "./utils/locale";
import { registerPrefsScripts } from "./modules/preferenceScript";
import { createZToolkit } from "./utils/ztoolkit";
import { myHelper } from "./modules/myfunc";

async function onStartup() {
  await Promise.all([
    Zotero.initializationPromise,
    Zotero.unlockPromise,
    Zotero.uiReadyPromise,
  ]);

  initLocale();

  BasicExampleFactory.registerPrefs();

  BasicExampleFactory.registerNotifier();

  UIExampleFactory.registerItemPaneSection();

  // UIExampleFactory.registerReaderItemPaneSection();

  await Promise.all(
    Zotero.getMainWindows().map((win) => onMainWindowLoad(win)),
  );
}

async function onMainWindowLoad(win: _ZoteroTypes.MainWindow): Promise<void> {
  // Create ztoolkit for every window
  addon.data.ztoolkit = createZToolkit();
  // @ts-ignore This is a moz feature
  win.MozXULElement.insertFTLIfNeeded(
    `${addon.data.config.addonRef}-mainWindow.ftl`,
  );
  await Zotero.Promise.delay(1000);
  myHelper.registerRightClickMenuItem();

  await Zotero.Promise.delay(1000);
}

async function onMainWindowUnload(win: Window): Promise<void> {
  ztoolkit.unregisterAll();
  addon.data.dialog?.window?.close();
}

function onShutdown(): void {
  ztoolkit.unregisterAll();
  addon.data.dialog?.window?.close();
  // Remove addon object
  addon.data.alive = false;
  // @ts-ignore - Plugin instance is not typed
  delete Zotero[addon.data.config.addonInstance];
}

/**
 * This function is just an example of dispatcher for Notify events.
 * Any operations should be placed in a function to keep this funcion clear.
 */
async function onNotify(

  event: string,
  type: string,
  ids: Array<string | number>,
  extraData: { [key: string]: any },
) {
 ztoolkit.log("notify", event, type, ids, extraData);
  if (
    event == "add" &&
    type == "item"
  ) {
    const items = Zotero.Items.get(Number(ids[0]));
    myHelper.update(items);
  } else {
    return;
  }
}

/**
 * This function is just an example of dispatcher for Preference UI events.
 * Any operations should be placed in a function to keep this funcion clear.
 * @param type event type
 * @param data event data
 */
async function onPrefsEvent(type: string, data: { [key: string]: any }) {
  switch (type) {
    case "load":
      registerPrefsScripts(data.window);
      break;
    default:
      return;
  }
}

function onShortcuts(type: string) {
  switch (type) {
    case "larger":
      KeyExampleFactory.exampleShortcutLargerCallback();
      break;
    case "smaller":
      KeyExampleFactory.exampleShortcutSmallerCallback();
      break;
    default:
      break;
  }
}

function onDialogEvents(type: string) {
  switch (type) {
    case "dialogExample":
      HelperExampleFactory.dialogExample();
      break;
    case "clipboardExample":
      HelperExampleFactory.clipboardExample();
      break;
    case "filePickerExample":
      HelperExampleFactory.filePickerExample();
      break;
    case "progressWindowExample":
      HelperExampleFactory.progressWindowExample();
      break;
    case "vtableExample":
      HelperExampleFactory.vtableExample();
      break;
    default:
      break;
  }
}

// Add your hooks here. For element click, etc.
// Keep in mind hooks only do dispatch. Don't add code that does real jobs in hooks.
// Otherwise the code would be hard to read and maintain.

export default {
  onStartup,
  onShutdown,
  onMainWindowLoad,
  onMainWindowUnload,
  onNotify,
  onPrefsEvent,
  onShortcuts,
  onDialogEvents,
};
