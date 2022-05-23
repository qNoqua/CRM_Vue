export default {
    /*global M*/
    mounted(el, {value}) {
        M.Tooltip.init(el, {html: value})
    }
}