/**
 * 租户状态-增值带宽趋势
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        data: {
            data: [{
                data: [10, 13, 15, 18, 16, 14, 13],
                name: '增值服务'
            }],
            top10: [
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空'],
                ['曹操', '刘备', '孙权', '小乔', '大乔', '吕布', '貂蝉', '华佗', '唐僧', '悟空']
            ],
            name: [
                '8-20', '8-21', '8-22', '8-23', '8-24', '8-25', '8-26'
            ],
            title: '增值服务'
        },
        "success": true
    }

};
