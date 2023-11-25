'use strict';

hexo.extend.filter.register('before_post_render', (data) => {
    // console.log("Plugin is running.");
    if (data.title === null
        || data.title == "") {

        // 匹配 "# (title)"
        let titleExp = /^#\x20+(.+)/m;
        let title = data.content.match(titleExp);

        if (!(title === null)) {
            data.title = title[1];
            console.log(data.source + " Title found: " + title[1]);
        } else {
            console.log(data.source + " Title is null");
        }
    } 
    // else if (data.title == null) {
    //     console.log("data.title == " + data.title);
    // } else {
    //     console.log("[have title] 类型：" + typeof data.title + "值：" + data.title);
    // }
});
