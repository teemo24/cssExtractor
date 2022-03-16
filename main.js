
const $ = (selector, event, callback) =>{
    let selectors = document.querySelectorAll(selector);
    let len = selectors.length;
    for(let i=0; i<len; ++i){
        if(event){
            selectors[i].addEventListener(event, (e)=>callback(e, selectors[i]));
        }else{
            callback(selectors[i]);
        }
    }
}
function cssExtract(el) {
    var sheets = document.styleSheets, ret = [];
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (el.matches(rules[r].selectorText)) {
                ret.push(rules[r].cssText);
            }
        }
    }
    console.log(ret.join('\n'));
}
$('div', null, cssExtract);
