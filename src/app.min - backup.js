$(function () {
    function t(t, e) {
        return t = t || 100, e = e || 0,
            Math.ceil(Math.random() * (t - e) + e)
    }
    function e(t) {
        var e = $("<div class='comment'>" + t + "</div>");
        e.on("animationend webkitAnimationEnd",
            function (t) {
                $(this).remove()
            }).appendTo(g)
    }

    function n(t, e) {
        if (!i) {
            if (d = t, o.text(m[d][0]),
                s.text("神马"),
                c.text("？"),
                a.addClass("shake"),
                k = 0, e) {
                var n = $(".tip").show();
                setTimeout(
                    function () { n.remove() }, 4e3)
            }
            _hmt.push(["_trackEvent", "time", "change", m[d][0]])
        }
    }
    var i = 0,
        a = $(".title"),
        o = $(".time"),
        s = $(".what"),
        c = $(".punctuation"),
        l = $("#start"),
        r = $("#temp_container"),
        m = [
            ["早饭", "面包 蛋糕 荷包蛋 烧饼 饽饽 肉夹馍 油条 馄饨 火腿 面条 小笼包 玉米粥 肉包 煎饼果子 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥".split(" ")],
            ["午饭"],
            ["晚饭", "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 水饺 日本料理 涮羊肉 味千拉面 面包 扬州炒饭 自助餐 菜饭骨头汤 茶餐厅 海底捞 西贝莜面村 披萨 麦当劳 KFC 汉堡王 卡乐星 兰州拉面 沙县小吃 烤鱼 烤肉 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 生活 全家便当".split(" ")]],
        h = "冰箱 书桌 电扇 空调 马桶 翔 鼠标 键盘 显示器 电视 台灯 饭盒 iPad iPhone 手机 餐巾纸 电话 椅子 纸箱 窗帘 插座 被单 报纸 杂志 相框 照片 衣服 内裤 内衣 袜子 妹子 汉子 砖头 混凝土 钢筋 塑料袋 衣架 书 手环 手表 鼠标垫 眼药水 跑车 自行车 三轮车 坦克 潜水艇 飞机 火箭 U盘 CPU 显卡 刀片 碎玻璃 圆珠笔 钢笔 交通卡 银行卡 身份证 户口簿 橡皮筋 双面胶 502胶水 订书机 螺丝刀 锤子 榔头 垃圾桶 花花草草 树皮 洗手液 妇炎洁 姨妈巾 哆啦A梦 仙人掌 企鹅 大熊猫 穿山甲 米老鼠 唐老鸭 跳跳虎 旅行箱 DVD 音响 热水器 热水袋 电热棒 电池 充电器 相机 自拍杆 耳机 吊灯 雨伞 钱包 鞋子 人字拖 床垫 绣花针 戒指 窨井盖 路灯 主板 程序猿 工程狮 电线 摄像头 西北风 生活 路由器 洗手液 沐浴露 肥皂 羽毛球拍 保龄球 皮带 皮鞭 电池 牙膏 手电筒 瑜伽垫 假发 82年的自来水 马蜂窝 瑞士军刀 地板 水管 电钻".split(" "),
        u = "大哥，饶命啊大哥 吃吃吃，就知道吃 壮士，干了这碗热翔 就这，还不够我塞牙缝儿 莫慌，抱紧我 吃一个，长一斤 你帅你先吃 你胖你先吃 听说吃这玩意吃不胖 你先吃，我不饿 不吃不是中国人 配上鸡汤，口味更佳 我仿佛看到了盐水瓶 嗯，好吃么？ 饭后注意漱口哦 这菜红烧味道如何？ 饭后百步走，活到九十九 分享页面到朋友圈，可以获得30个QQ太阳 据说吃完99%都哭了 惊天内幕！这网页是逗你玩的 为了身边的朋友！！转！！！！ 我也是醉了 我想静静，不要问我静静是谁 解决吃什么难题哪家强？ 我就笑笑不说话 转发过100，然并卵 活到老，吃到老 我给你讲个笑话 你别哭喔 你知道怎样得精神分裂症吗？那样我就再不是一个人了。 天下没有不散的筵席。我都还没吃完，你们都走了。 吃不到的醋，最酸。 躲了一辈子的雨，雨会不会很难过 小猪一定不知道自己的肉很好吃吧，真替它们心酸。 作为一个胖子，居然还自称自己不是个粗人！ 心情不好就吃吃吃 念念不忘，必会下单 好吃不如饺子，好玩不过嫂子 别低头，哈喇子会掉 今晚我们都是吃货 我这叫圆润，不叫胖 这不叫胖，叫丰满！ 吃饭前记得用手机消消毒 集满20个赞，明天早起瘦10斤 好吃的不要不要的 不好吃，不要钱 吃的我蹲下起立就头晕 听说你是广东人？ 贝爷，卒。".split(" "),
        d = 2,
        p = (new Date).getHours(),
        f = $(window),
        g = $("body"),
        v = $("#wrapper"),
        x = $(".os"),
        k = 0,
        w = "human",
        b,
        C,
        E;
    m[1][1] = m[2][1],
        a.on("animationend webkitAnimationEnd",

            function (t) {
                $(this).removeClass("shake")
            }),
        r.on("animationend webkitAnimationEnd",
            function (t) {
                $(t.target).remove()
            }),
        l.click(function () {
            if (g.toggleClass("playing", !i), i)
                i = 0,
                    "monster" == w && x.text(u[t(u.length)]),
                    c.text("！"),
                    l.find("span").text("换一个"),
                    clearTimeout(b),
                    document.title = "Jack Cui | " + a.text() + "这是一个很无聊的网站，但能解决你的人生一大困扰！选择困难户必备！";
            else {
                i = 1, k++, 2 == k && e("我就知道你会换一个 ( ͡° ͜ʖ ͡°)"),
                    5 == k && e("说，你是不是天秤座？Σ( ° △ °|||)︴"),
                    10 == k && e("你是吃了炫迈吗？(￣△￣；)"),
                    20 == k && e("难道你是处女座？ (๑•̀ㅂ•́)و✧"),
                    30 == k && e("再换我可要报警了！( *・ω・)✄╰ひ╯");
                var n = "human" == w ? m[d][1] : h; c.text("？"),
                    l.find("span").text("停"), x.text(""),

                    function o() {
                        var e = t(n.length) - 1,
                            i = n[e],
                            a = t(C),
                            c = t(E - 50),
                            l = t(37, 14);
                        s.text(i);
                        var m = $("<span class='temp'>" + i + "</span>").css({
                            top: a, left: c, color: "rgba(0,0,0," + t(7, 3) / 10 + ")",
                            fontSize: l + "px"
                        }).appendTo(r);
                        b = setTimeout(o, 60)
                    }()
            }
        }),
        $("#toggle span").click(
            function () {
                $(this).hasClass("selected") || ($(this).addClass("selected").siblings().removeClass("selected"),
                    w = $(this).data("type"),
                    alert("monster" == w ? "注意！前方高能！" : "还是人类好吃呢Ψ(￣∀￣)Ψ"),
                    k = 0,
                    _hmt.push(["_trackEvent", "type", "toggle", w])
                )
            }
        ),
        9 > p || p >= 23 ? n(0, 1) : 13 > p && n(1, 1),
        a.click(
            function () {
                n(d >= m.length - 1 ? 0 : d + 1)
            }),
        $("#ribbon").click(
            function () {
                return alert(this.title), !1
            }
        ),

        f.resize(
            function () {
                E = f.width(),
                    C = f.height()
            }
        ).resize()
});
