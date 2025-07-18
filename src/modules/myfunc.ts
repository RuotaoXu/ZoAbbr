import { getLocaleID, getString } from "../utils/locale";
const series_mapping: [string, RegExp][] = [
  ["3DV", /.*Int.*Conf.*3D Vision.*/i],
  ["3Dor", /.*3D.*object.*retrieval.*/i],
  ["Access", /.*Access.*/i],
  ["AAAI", /.*AAAI.*Conf.*Artificial.*Intell.*/i],
  ["ACHA", /.*App.*Comput.*Harmon.*Anal.*/i],
  ["arXiv", /.*arXiv.*/i],
  ["BMVC", /.*British.*Machine.*Vis.*Conf.*/i],
  ["CVPR", /.*Comput.*Vis.*Pattern.*Recognition.*/i],
  ["CGF", /.*Computer.*graphics.*forum.*/i],
  ["ECCV", /.*Eur.*Conf.*Comput.*Vision.*/i],
  ["ICASSP", /.*Int.*Conf.*Acoustics.*Speech.*Signal.*/i],
  ["ICCV", /.*Int.*Conf.*Comput.*Vision.*/i],
  ["ICIP", /.*Int.*Conf.*Image.*Process.*/i],
  ["ICLR", /.*Int.*Conf.*Learn.*Representation.*/i],
  ["IROS", /.*Int.*Conf.*Robot.*system.*/i],
  ["ICRA", /.*Int.*Conf.*Robot.*Automation.*/i],
  ["ICME", /.*Int.*Conf.*Multimedia.*Expo.*/i],
  ["ICML", /.*Int.*Conf.*Mach.*Learn.*/i],
  ["IJCAI", /.*Int.*Joint.*Conf.*Artificial.*Intell.*/i],
  ["IJCNN", /.*Int.*Joint.*Conf.*Neural.*Network.*/i],
  ["IJCV", /.*Int.*J.*Comput.*Vision.*/i],
  ["IS", /.*Inform.*Sci.*/i],
  ["JMIV", /.*J.*Math.*Imaging.*Vision.*/i],
  ["JSC", /.*J.*Scientific.*Computing.*/i],
  ["MM", /.*Int.*Conf.*Multimedia.*/i],
  ["MMS", /.*Multiscale.*Model.*Simul.*/i],
  ["Neurocomputing", /.*Neurocomputing.*/i],
  ["NIPS", /.*Advances.*Neural.*Inform.*Process.*Syst.*/i],
  ["PAMI", /.*Trans.*Pattern.*Anal.*Mach.*Intell.*/i],
  ["PR", /.*Pattern.*Recognition.*/i],
  ["RAL", /.*Robotics.*Automation.*Letters.*/i],
  ["SIIMS", /.*SIAM.*Journal.*Imaging.*Sci.*/i],
  ["SPL", /.*Signal.*Process.*Letters.*/i],
  ["TCSVT", /.*Trans.*Circuits.*Syst.*Video.*Technology.*/i],
  ["TCYB", /.*Trans.*Cybernetics.*/i],
  ["TGRS", /.*Trans.*Geosci.*Remote.*Sens.*/i],
  ["TIFS", /.*Inform.*Forensics.*Security.*/i],
  ["TIP", /.*Trans.*Image.*Process.*/i],
  ["TMM", /.*Trans.*Multimedia.*/i],
  ["TNNLS", /.*Trans.*Neural.*Netw.*Learn.*Syst.*/i],
  ["TVCG", /.*Trans.*Vis.*Comput.*Graph.*/i],
  ["TOG", /.*Trans.*Graphics.*/i],
  ["TSP", /.*Trans.*Signal.*Process.*/i],
  ["WACV", /.*Winter.*Conf.*App.*Comput.*Vision.*/i],
  ["NN", /.*Neural.*Networks.*/i],
  ["SPIC", /.*Signal.*Process.*Image.*Communication.*/i],
  ["SP", /.*Signal.*Process.*/i],
  ["JMLR", /Journal of Machine Learning Research/i],
  ["MICCAI", /Medical Image Computing and Computer.*Assisted Intervention/i],
  ["ACCV", /Asian Conference on Computer Vision/i],
  ["CoRL", /Conference on Robot Learning/i]
];

function getSeries_old(name: string) {
  let series = "";
  if (name.match("3DV")) {
    series = "3DV";
  } else if (name.match("Access")) {
    series = "Access";
  } else if (name.match("AAAI")) {
    series = "AAAI";
  } else if (name.match("ACHA")) {
    series = "ACHA";
  } else if (name.match("BMVC")) {
    series = "BMVC";
  } else if (name.match("CVPR")) {
    series = "CVPR";
  } else if (name.match("ECCV")) {
    series = "ECCV";
  } else if (name.match("ICASSP")) {
    series = "ICASSP";
  } else if (name.match("ICCV")) {
    series = "ICCV";
  } else if (name.match("ICIP")) {
    series = "ICIP";
  } else if (name.match("ICLR")) {
    series = "ICLR";
  } else if (name.match("ICME")) {
    series = "ICME";
  } else if (name.match("ICML")) {
    series = "ICML";
  } else if (name.match("IJCAI")) {
    series = "IJCAI";
  } else if (name.match("IJCNN")) {
    series = "IJCNN";
  } else if (name.match("IJCV")) {
    series = "IJCV";
  } else if (name.match("IS")) {
    series = "IS";
  } else if (name.match("JMLR")) {
    series = "JMLR";
  } else if (name.match("JMIV")) {
    series = "JMIV";
  } else if (name.match("JSC")) {
    series = "JSC";
  } else if (name.match("MM")) {
    series = "MM";
  } else if (name.match("MMS")) {
    series = "MMS";
  } else if (name.match("Neurocomputing")) {
    series = "Neurocomputing";
  } else if (name.match("NIPS")) {
    series = "NIPS";
  } else if (name.match("PAMI")) {
    series = "PAMI";
  } else if (name.match("PR")) {
    series = "PR";
  } else if (name.match("RAL")) {
    series = "RAL";
  } else if (name.match("SIIMS")) {
    series = "SIIMS";
  } else if (name.match("SPL")) {
    series = "SPL";
  } else if (name.match("SPIC")) {
    series = "SPIC";
  } else if (name.match("SP")) {
    series = "SP";
  } else if (name.match("TCSVT")) {
    series = "TCSVT";
  } else if (name.match("TCYB")) {
    series = "TCYB";
  } else if (name.match("TGRS")) {
    series = "TGRS";
  } else if (name.match("TIFS")) {
    series = "TIFS";
  } else if (name.match("TIP")) {
    series = "TIP";
  } else if (name.match("TMM")) {
    series = "TMM";
  } else if (name.match("TNNLS")) {
    series = "TNNLS";
  } else if (name.match("TOG")) {
    series = "TOG";
  } else if (name.match("TSP")) {
    series = "TSP";
  } else if (name.match("TVCG")) {
    series = "TVCG";
  } else if (name.match("WACV")) {
    series = "WACV";
  } else if (name.match("MICCAI")) {
    series = "MICCAI";
  } else if (name.match("ACCV")) {
    series = "ACCV";
  } else if (name.match(/.*Int.*Conf.*3D Vision.*/i)) {
    series = "3DV";
  } else if (name.match(/.*3D.*object.*retrieval.*/i)) {
    series = "3Dor";
  } else if (name.match(/.*Access.*/i)) {
    series = "Access";
  } else if (name.match(/.*AAAI.*Conf.*Artificial.*Intell.*/i)) {
    series = "AAAI";
  } else if (name.match(/.*App.*Comput.*Harmon.*Anal.*/i)) {
    series = "ACHA";
  } else if (name.match(/.*arXiv.*/i)) {
    series = "arXiv";
  } else if (name.match(/.*British.*Machine.*Vis.*Conf.*/i)) {
    series = "BMVC";
  } else if (name.match(/.*Comput.*Vis.*Pattern.*Recognition.*/i)) {
    series = "CVPR";
  } else if (name.match(/.*Computer.*graphics.*forum.*/i)) {
    series = "CGF";
  } else if (name.match(/.*Eur.*Conf.*Comput.*Vision.*/i)) {
    series = "ECCV";
  } else if (name.match(/.*Int.*Conf.*Acoustics.*Speech.*Signal.*/i)) {
    series = "ICASSP";
  } else if (name.match(/.*Int.*Conf.*Comput.*Vision.*/i)) {
    series = "ICCV";
  } else if (name.match(/.*Int.*Conf.*Image.*Process.*/i)) {
    series = "ICIP";
  } else if (name.match(/.*Int.*Conf.*Learn.*Representation.*/i)) {
    series = "ICLR";
  } else if (name.match(/.*Int.*Conf.*Robot.*system.*/i)) {
    series = "IROS";
  } else if (name.match(/.*Int.*Conf.*Robot.*Automation.*/i)) {
    series = "ICRA";
  } else if (name.match(/.*Int.*Conf.*Multimedia.*Expo.*/i)) {
    series = "ICME";
  } else if (name.match(/.*Int.*Conf.*Mach.*Learn.*/i)) {
    series = "ICML";
  } else if (name.match(/.*Int.*Joint.*Conf.*Artificial.*Intell.*/i)) {
    series = "IJCAI";
  } else if (name.match(/.*Int.*Joint.*Conf.*Neural.*Network.*/i)) {
    series = "IJCNN";
  } else if (name.match(/.*Int.*J.*Comput.*Vision.*/i)) {
    series = "IJCV";
  } else if (name.match(/.*Inform.*Sci.*/i)) {
    series = "IS";
  } else if (name.match(/.*J.*Math.*Imaging.*Vision.*/i)) {
    series = "JMIV";
  } else if (name.match(/.*J.*Scientific.*Computing.*/i)) {
    series = "JSC";
  } else if (name.match(/.*Int.*Conf.*Multimedia.*/i)) {
    series = "MM";
  } else if (name.match(/.*Multiscale.*Model.*Simul.*/i)) {
    series = "MMS";
  } else if (name.match(/.*Neurocomputing.*/i)) {
    series = "Neurocomputing";
  } else if (name.match(/.*Advances.*Neural.*Inform.*Process.*Syst.*/i)) {
    series = "NIPS";
  } else if (name.match(/.*Trans.*Pattern.*Anal.*Mach.*Intell.*/i)) {
    series = "PAMI";
  } else if (name.match(/.*Pattern.*Recognition.*/i)) {
    series = "PR";
  } else if (name.match(/.*Robotics.*Automation.*Letters.*/i)) {
    series = "RAL";
  } else if (name.match(/.*SIAM.*Journal.*Imaging.*Sci.*/i)) {
    series = "SIIMS";
  } else if (name.match(/.*Signal.*Process.*Letters.*/i)) {
    series = "SPL";
  } else if (name.match(/.*Trans.*Circuits.*Syst.*Video.*Technology.*/i)) {
    series = "TCSVT";
  } else if (name.match(/.*Trans.*Cybernetics.*/i)) {
    series = "TCYB";
  } else if (name.match(/.*Trans.*Geosci.*Remote.*Sens.*/i)) {
    series = "TGRS";
  } else if (name.match(/.*Inform.*Forensics.*Security.*/i)) {
    series = "TIFS";
  } else if (name.match(/.*Trans.*Image.*Process.*/i)) {
    series = "TIP";
  } else if (name.match(/.*Trans.*Multimedia.*/i)) {
    series = "TMM";
  } else if (name.match(/.*Trans.*Neural.*Netw.*Learn.*Syst.*/i)) {
    series = "TNNLS";
  } else if (name.match(/.*Trans.*Vis.*Comput.*Graph.*/i)) {
    series = "TVCG";
  } else if (name.match(/.*Trans.*Graphics.*/i)) {
    series = "TOG";
  } else if (name.match(/.*Trans.*Signal.*Process.*/i)) {
    series = "TSP";
  } else if (name.match(/.*Winter.*Conf.*App.*Comput.*Vision.*/i)) {
    series = "WACV";
  } else if (name.match(/.*Neural.*Networks.*/i)) {
    series = "NN";
  } else if (name.match(/.*Signal.*Process.*Image.*Communication.*/i)) {
    series = "SPIC";
  } else if (name.match(/.*Signal.*Process.*/i)) {
    series = "SP";
  } else if (name.match(/Journal of Machine Learning Research/i)) {
    series = "JMLR";
  } else if (
    name.match(/Medical Image Computing and Computer.*Assisted Intervention/i)
  ) {
    series = "MICCAI";
  } else if (name.match(/Asian Conference on Computer Vision/i)) {
    series = "ACCV";
  } else if (name.match(/Conference on Robot Learning/i)) {
    series = "CoRL";
  }
  //   else if (name.match(/.*arXiv.*/i)) {
  //     series = "arXiv";
  //   }
  return series;
}

function getSeries(name: string) {
  let series = "";
  for (const [seriesName, pattern] of series_mapping){
    if (name.match(seriesName)) {
      series = seriesName;
      break;
    } else if (name.match(pattern)){
      series = seriesName;
      break;
    }
  }
  return series;
}
  export class myHelper {
    static update(item: any) {
      let name = "";
      if (item.getField("conferenceName")) {
        name = item.getField("conferenceName");
      } else if (item.getField("publicationTitle")) {
        name = item.getField("publicationTitle");
      } else if (item.getField("proceedingsTitle")) {
        name = item.getField("proceedingsTitle");
      } else if (item.getField("repository")) {
        name = item.getField("repository");
      }
      // ztoolkit.getGlobal("alert")(name);
      let series = "";
      if (item.getField("series")) {
        series = item.getField("series");
        item.saveTx();
      } else {
        series = getSeries(name);
        item.setField("series", series);
        item.saveTx();
      }
      item.setField("seriesTitle", item.getField("year").slice(-2));
      item.saveTx();
      // ztoolkit.getGlobal("alert")(series);
    }
    static updateSelected() {
      const items = Zotero.getActiveZoteroPane().getSelectedItems();
      for (let i = 0; i < items.length; i++) {
        myHelper.update(items[i]);
      }
    }
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
