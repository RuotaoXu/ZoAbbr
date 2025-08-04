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
const conf_mapping = [
  ["CVPR", "IEEE Conference on Computer Vision and Pattern Recognition"],
  ["IJCAI", "International Joint Conference on Artificial Intelligence"],
  ["ICML", "International Conference on Machine Learning"],
  ["ECCV", "European Conferenceon Computer Vision"],
  ["ICCV", "International Conference on Computer Vision"],
  ["AAAI", "AAAI Conference on Artificial Intelligence"],
  ["NIPS", "Annual Conference on Neural Information Processing Systems"],
  ["3DV", "International Conference on 3D Vision"],
  ["ICME", "IEEE International Conference on Multimedia and Expo"],
  ["ICASSP", "IEEE International Conference on Acoustics, Speech and Signal Processing "],
  ["MM", "ACM International Conference on Multimedia"]
];

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

function getConf(series: string) {
  let conf = null
  for (const [seriesName, name] of conf_mapping) {
    if (series.match(seriesName)) {
      conf = name;
      break;
    }
  }
  return conf;
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
      const conf = getConf(series);
      if (conf) {
        item.setType(Zotero.ItemTypes.getID('conferencePaper'));
        item.setField("conferenceName", conf);
      }

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
