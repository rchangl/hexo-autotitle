'use strict';

hexo.extend.filter.register('before_post_render', (data) => {
    if (data.title != null) {
        
        // 匹配 "# (title)"
        let titleExp = /^#\x20+(.+)/m;
        let title = data.content.match(titleExp);

        if (!(title === null)) {
            data.title = title[1];
            console.log(data.source + " 标题为：" + title[1]);
        } else {
            console.log(data.source + " 标题为空");
        }
    }
});