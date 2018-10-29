/**
 * 程序自动生成，切勿手动修改
 */

(function () {

  var DataMap = '##reqMapHoldPlace##';
  var Subcontext = {};
  for (var type in DataMap) {
    Subcontext[type] = {};
    for (var i = 0; i < DataMap[type].length; i++) {
      var key = DataMap[type][i];
      Subcontext[type][key] = type + '.' + key;
    }
  }

  window['Subcontext'] = Subcontext;
  if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = DataMap;
  }

})();