# Zotero Plugin Template
[Old version manual](https://zotero.yuque.com/staff-gkhviy/developer/apsld1)

[New version github](https://github.com/windingwind/zotero-plugin-template)

# Simple Using

**check path in .env**

```python
ZOTERO_PLUGIN_ZOTERO_BIN_PATH = c:\\Program Files\\Zotero\\zotero.exe
# created with zotero.exe -p
ZOTERO_PLUGIN_PROFILE_PATH = C:\\Users\\TOTAL\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\o4eks9s0.TEST 
```

**npm commands**

```bash
npm start 		# start zotero with updated codes
npm run build 	# build xpi in .scaffold\build
npm run release # publish
```

**key codes in src/hook.ts**

```typescript
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
```

**key codes in src/modules/myfunc.ts**

```typescript
//update new mapping here
const series_mapping: [string, RegExp][] = [
  ["3DV", /.*Int.*Conf.*3D Vision.*/i],
  ["3Dor", /.*3D.*object.*retrieval.*/i],
  ["Access", /.*Access.*/i],
 ...
];
    ...
 export class myHelper {
    // for menu
    static registerRightClickMenuItem() {
      const menuIcon = `chrome://${addon.data.config.addonRef}/content/icons/favicon@0.5x.png`;
      // item menuitem with icon
      ztoolkit.Menu.register("item", {
        tag: "menuitem",
        id: "zotero-itemmenu-addontemplate-test",
        label: getString("更新缩写"),
        commandListener: (ev) => myHelper.updateSelected(),
        icon: menuIcon,
      });
    }
}
```

