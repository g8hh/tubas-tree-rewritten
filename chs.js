/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Your Parents Lied": "你的父母撒谎",
    "AD clone": "广告克隆",
    "Already???": "已经？？？",
    "Ascend.": "转生。",
    "Begin to passively generate prestige points.": "开始被动地产生声望点。",
    "Beyond": "超过",
    "Boosted": "提升",
    "Boosterless": "无助推器",
    "Build a Point Factory.": "建立一个点数工厂。",
    "Buy 8 prestige upgrades. Reward: Gain 70x more prestige points.": "购买 8 次声望升级。奖励：获得 70 倍以上的声望点。",
    "Buy a booster.": "买个助推器。",
    "Buy a super-booster.": "购买超级助推器。",
    "Buy Shard Generator 3. Reward: Transcension point gain is doubled.": "购买分片发生器 3。奖励：超越点增益加倍。",
    "Buy the second token upgrade.": "购买第二个代币升级。",
    "Create a Research Lab.": "创建研究实验室。",
    "Current Endgame: 1e500,000 points": "当前残局：1e500,000 点",
    "Do you even bend time bro?": "你连时间都扭曲了兄弟？",
    "Establish a Bank.": "成立银行。",
    "Far Beyond": "远远超越",
    "Finally": "最后",
    "Get a time speed of 10x. Reward: Gain 2x more points.": "获得 10 倍的时间速度。奖励：获得 2 倍以上的点数。",
    "Get a time speed of 1e2000x.": "获得1e2000x的时间速度。",
    "Grandma?": "奶奶？",
    "Have 15 prestige upgrades.": "进行 15 次声望升级。",
    "Highly Respected": "备受尊敬的",
    "Hire a Worker.": "雇用一名工人。",
    "I Am Speed": "我是速度",
    "Infinity?": "无穷？",
    "Inflation 101": "通货膨胀 101",
    "Insane Gains": "疯狂的收获",
    "Local Point Group": "局部点群",
    "Nice": "好的",
    "Nice^10": "不错^10",
    "Nice^Nice": "不错^不错",
    "No, there's no HB": "不，没有HB",
    "Nonlinearity": "非线性",
    "Normal": "普通的",
    "Obamium": "奥巴马",
    "Obtain 7 transcension milestones.": "获得7个超越里程碑。",
    "One per generator": "每台发电机一个",
    "Ooh, buyables!": "哦，可购买！",
    "Open a Point Portal.": "打开一个点数传送门。",
    "Passive Generation": "被动世代",
    "Pether Nortal": "北彼得",
    "Plant a Tree.": "种一棵树。",
    "Point Galaxy": "点星系",
    "Point Planet": "点星球",
    "Pollution": "污染",
    "Prestige.": "声望。",
    "Prestigious": "声望很高的",
    "Reach 1,000 shards. Reward: Shard gain is doubled.": "达到 1,000 个碎片。奖励：分片收益翻倍。",
    "Reach 1.79e308 ascension points.": "达到 1.79e308 转生点。",
    "Reach 1.79e308 points.": "达到 1.79e308 点。",
    "Reach 1e10 prestige tokens.": "达到 1e10 威望代币。",
    "Reach 1e10,000 points. Reward: Gain more points based on ascension tokens.": "达到 1e10,000 点。奖励：根据提升代币获得更多点数。",
    "Reach 1e150,000 points.": "达到 1e150,000 点。",
    "Reach 1e160 points.": "达到1e160点。",
    "Reach 1e18 points without any Time Accelerators. Reward: Time Accelerators boost prestige point gain at a reduced rate.": "在没有任何时间加速器的情况下达到 1e18 点。奖励：时间加速器以降低的速度提高声望点增益。",
    "Reach 1e2000 ascension points.": "达到 1e2000 转生点。",
    "Reach 1e26,783 points.": "达到 1e26,783 点。",
    "Reach 1e3000 points.": "达到1e3000点。",
    "Reach 1e525 ascension points without any Boosters. Reward: Gain 1,000x more prestige tokens.": "在没有任何助推器的情况下达到 1e525 转生点。奖励：获得 1,000 倍以上的声望代币。",
    "Reach 1e60 points with no buildings except Workers, no Time Accelerators, and no prestige buyables. Reward: Gain more prestige points and ascension points based on Workers bought.": "达到 1e60 点，除了工人之外没有建筑，没有时间加速器，也没有声望可购买。奖励：根据购买的工人获得更多声望点和转生点。",
    "Reach 2,000,000 transcension points.": "达到2,000,000超越点。",
    "Reach 2.70e38 points.": "达到 2.70e38 点。",
    "Reach 6,969 points.": "达到 6,969 点。",
    "Shard Bonanza": "碎片富矿",
    "Start a Time Accelerator.": "启动时间加速器。",
    "Stonks!": "斯托克斯！",
    "Super Sonic Racing": "超音速赛车",
    "Super-Prestigious": "超级声望",
    "That's a lot of tokens": "这是很多代币",
    "They Matter After All": "毕竟他们很重要",
    "Today's Subject: Slavery": "今天的主题：奴隶制",
    "Token Boom": "代币繁荣",
    "Transcend. Reward: Gain 100x more ascension points, if you have the first 4 Acension Milestones.": "超越。奖励：如果您拥有前 4 个 Acension 里程碑，则获得 100 倍以上的转生点。",
    "TRANSCENDED": "超越",
    "True Divinity": "真正的神性",
    "Unlock Ascension Tokens.": "解锁提升代币。",
    "Unlock Prestige Buyables.": "解锁 Prestige Buyables。",
    "Unlock Shard Tickspeed.": "解锁碎片滴答速度。",
    "Unlock the 2nd ascension buyable.": "解锁第二次提升可购买。",
    "Unlock the 3rd prestige buyable.": "解锁第三个可购买的声望。",
    "Unlock Tokens.": "解锁代币。",
    "Vacillation": "动摇",
    "Workers": "工人",
    "Yet another new buyable": "又一个新的可购买",
    "Achievement Gotten!": "成就达成！",
    "Trees": "树",
    "Autobuy Banks, Research Labs, and Point Portals.": "自动购买 银行、研究实验室和 点数传送门。",
    "Autobuy Workers, Trees, and Point Factories.": "自动购买工人、树木和点数工厂。",
    "Banks": "银行",
    "Gain more points based on total buildings bought.": "根据购买的建筑总数获得更多点数。",
    "Gain more points based on total prestige points.": "根据总声望点获得更多点数。",
    "Go big or go home! Triple prestige point gain and gain 4x more points.": "要么做大，要么回家！ 三倍声望点增益并获得 4 倍以上的点数。",
    "Increase the multiplier per time accelerator.": "增加每次加速器的乘数。",
    "It's About Time": "是时候了",
    "Point Factories": "点数工厂",
    "Point Multiplier": "点乘数",
    "Point Portals": "点数传送门",
    "Prestige Bonus": "声望奖金",
    "Prestige Enhancement": "声望提升",
    "prestige points": "声望点",
    "Research Labs": "研究实验室",
    "Synergism be like": "协同作用就像",
    "Time Accelerators": "时间加速器",
    "You figured out a way to gain more points! Multiply point gain by 10.": "你想出了一个获得更多点数的方法！ 点增益乘以 10。",
    "It's time to do some science. Unlock 2 new buyables.": "是时候做一些科学了。 解锁 2 个新的可购买。",
    "Buyable Unlocks": "解锁可购买",
    "Autobuy Time Accelerators.": "自动购买时间加速器。",
    "Gain more points based on points. This is getting meta.": "根据点数获得更多点数。 这正在变得元。",
    "Multiply point gain by 1e10.": "将点数增益乘以 1e10。",
    "Point Doubler": "点数倍增器",
    "Prestige Point Enhancement": "声望点增强",
    "Self-Synergy": "自我协同",
    "Short & Simple": "简短&简单",
    "Chad Scaling Decrease": "乍得缩放减少",
    "Gain more points based on prestige upgrades bought. bad upgrade 1/10": "根据购买的声望升级获得更多点数。 糟糕的升级 1/10",
    "Time Accelerator scaling is decreased.": "时间加速器缩放比例降低。",
    "Virgin Upgrade Bonus": "处女升级奖励",
    "ascension points": "转生点",
    "The Divine": "神圣的",
    "The Modding Tree": "改装树",
    "The Prestige Tree made by Jacorb and Aarex": "Jacorb 和 Aarex 制作的声望树",
    "You've become a god! Multiply point gain by 100.": "你已经成神了！ 点数增益乘以 100。",
    "Autobuy prestige buyables.": "自动购买声望可购买。",
    "Generate 100% of prestige point gain every second.": "每秒产生 100% 的声望点增益。",
    "Keep prestige milestones on Ascension. You earned those, you should keep 'em!": "在 转生 时保留声望里程碑。 你赚了这些，你应该保留它们！",
    "Keep prestige upgrades on Ascension.": "在转生时保留声望升级。",
    "Made by randomtuba\t": "由 randomtuba 制作\t",
    "P: Reset for prestige points": "P：重置声望点",
    "'It's f*cking Mario Kart again!'": "“又是TMD马里奥卡丁车！”",
    "Ascended Points": "转生点",
    "Ascension Bonus": "转生奖励",
    "Gain more ascension points based on points.": "根据点数获得更多的转生点。",
    "Gain more prestige points based on total ascension points.": "根据总转生点获得更多声望点。",
    "is more effective.": "更有效。",
    "Scott the Woz": "沃兹斯科特",
    "Virgin Upgrade Boost": "处女升级提升",
    "Prestige Bonus Enhancement": "声望奖励增强",
    "Autobuy the 3rd prestige buyable.": "自动购买第三个声望可购买。",
    "Boosters": "助推器",
    "It's the key to success! Unlock 5 new prestige upgrades.": "这是成功的关键！ 解锁 5 个新的声望升级。",
    "The Prestige Key": "声望钥匙",
    "You found a type of energy that can boost your production! Unlock Boosters.": "您找到了一种可以提高产量的能量！ 解锁助推器。",
    "Point Booster": "点数助推器",
    "boosters": "助推器",
    "boosters, multiplying point gain by": "助推器，将点数增益乘以",
    "Boosting To The Max": "升到最大",
    "Keep prestige upgrades and prestige milestones on Booster resets.": "在 助推器 重置时保留声望升级和声望里程碑。",
    "Prestigious Boosters": "声望助推器",
    "The booster base is multiplied by your prestige points at a reduced rate.": "助推器基数以较低的速率乘以您的声望点数。",
    "You can buy max boosters.": "您可以购买最大助推器。",
    "You gave your boosters better conduction, which doubles the booster base.": "你给了你的助推器更好的传导，这使助推器的基数加倍。",
    "Boosters also boost prestige point and ascension point gain.": "助推器还可以提高声望点和转生点增益。",
    "Boosting Everything!": "提升一切！",
    "Your points have been (softcapped) due to taxes": "由于税收，您的点数已（软上限）",
    "You gain more prestige tokens based on the amount of achievements you have": "根据您拥有的成就数量，您获得更多声望代币",
    "It's time to pull out the exponents. Prestige points ^1.015!": "是时候提取指数了。 声望点^1.015！",
    "Note: Be prepared to negotiate with the IRS.": "注意：准备好与 IRS 协商。",
    "Prestige Exponential": "声望指数",
    "Quadratics": "二次方",
    "Reverse Bonus": "反向奖励",
    "Square the booster multiplier.": "将助推器乘数平方。",
    "Tax Fragility": "税收脆弱性",
    "Taxes have gone down in your state, so the taxes softcap is weaker.": "您所在州的税收已经下降，因此税收软顶较弱。",
    "The booster cost is divided based on prestige tokens.": "助推器费用根据声望代币进行分配。",
    "The taxes softcap is weaker.": "税收软上限较弱。",
    "Tokens": "代币",
    "Upgraded Generators": "升级的发电机",
    "uses a better formula.": "使用更好的公式。",
    "Yoshi Commits Tax Fraud": "Yoshi 涉嫌税务欺诈",
    "'thank you, very cool'": "'谢谢你，很酷'",
    "Better Exponent": "更好的指数",
    "boosters, multiplying point, prestige point, and ascension point gain by": "助推器，乘数点，声望点和转生点增益",
    "Boosty Tokens": "助推代币",
    "Crustaceous Cheapskate": "甲壳质的便宜货",
    "Divide the booster cost based on prestige points.": "根据声望点划分助推器成本。",
    "Faster Generation": "更快的生成",
    "funny upgrade": "有趣的升级",
    "Gain 100x more ascension points.": "获得 100 倍以上的转生点。",
    "Gain more prestige points based on points.": "根据点数获得更多声望点。",
    "Inflation I": "通货膨胀我",
    "You realized your achievements are worth more than you thought...Unlock Tokens.": "你意识到你的成就比你想象的更有价值......解锁代币。",
    "You repaired your generators to make them more efficient, so now prestige tokens ^1.2.": "你修复了你的发电机以提高它们的效率，所以现在声望代币^1.2。",
    "Autobuy Boosters, and Boosters reset nothing.": "自动购买助推器和助推器不会重置任何东西。",
    "Autobuy token buyables.": "Autobuy 代币可购买物品。",
    "Gain 100% of ascension point gain every second, and gain 100x more prestige tokens and ascension tokens.": "每秒获得 100% 的转生点增益，并获得 100 倍以上的声望代币和转生代币。",
    "Keep ascension upgrades and booster upgrades on reset.": "在重置时保持提升升级和助推器升级。",
    "Keep prestige upgrades on reset.": "重置时保持声望升级。",
    "Keep prestige, ascension, and booster milestones on reset, AND ascension token buyables no longer increase each other's costs.": "在重置时保持声望、提升和助推器里程碑，并且提升代币可购买不再增加彼此的成本。",
    "Note: Token Upgrades are kept on transcension.": "注意：代币升级保持在超越。",
    "transcension points": "超越点",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Buyable Unlock ": "解锁可购买 ",
    "shards, multiplying point and prestige point gain by ": "碎片，倍增点和声望点增益 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\/ ([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) prestige points per second$/, '你每秒获得 $1 声望点'],
    [/^You have (.+) ascension points$/, '你有 $1 转生点数'],
    [/^You have (.+) prestige points$/, '你有 $1 声望点数'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) achievements \((.+)$/, '你有 $1 成就 \($2'],
    [/^You have (.+) prestige tokens, multiplying prestige point gain by (.+)$/, '你有 $1 声望代币，声望点增益乘以 $2'],
    [/^Next at (.+) ascension points$/, '下一个在 $1 转生点数'],
    [/^Next at (.+) prestige points$/, '下一个在 $1 声望点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You can gain more than (.+) transcension point on reset.$/, '您可以在重置时获得超过 $1 个超越点。'],
    [/^Generates shards based on its amount!\nAmount: (.+)\nCost: (.+)\nMultiplier: (.+)$/, '根据数量生成碎片！\n数量：$1\n成本：$2\n乘数：$3'],
    [/^Generates Shard Generator (.+) based on its amount!\nAmount: (.+)\nCost: (.+)\nMultiplier: (.+)$/, '根据数量生成碎片生成器 $1！\n数量：$2\n成本：$3\n乘数：$4'],
    [/^Increase the exponent in the prestige token multiplier by (.+) every time you buy this!\nTimes Bought: (.+)\nCost: (.+) prestige tokens\nEffect: (.+) exponent$/, '每次购买时，声望代币乘数中的指数增加 $1！\n购买次数：$2\n成本：$3 声望代币\n效果：$4 指数'],
    [/^Quadruple prestige token gain every time you buy this!\nTimes Bought: (.+)\nCost: (.+) prestige tokens\nEffect: (.+) prestige tokens$/, '每次购买都会获得四倍声望代币！\n购买次数：$1\n成本：$2 声望代币\n效果：$3 声望代币'],
    [/^Multiply point gain by 10x every time you buy this!\nTimes Bought: (.+)\nCost: (.+)\nEffect: (.+) points$/, '每次购买，点数收益乘以 10 倍！\n购买次数：$1\n成本：$2\n效果：$3 点数'],
    [/^Reach 1.00e230 prestige points to unlock \(You have (.+) prestige points$/, '达到 1.00e230 声望点解锁（你有 $1 声望点'],
    [/^Reach (.+) points to unlock \(You have (.+) points$/, '达到 1.00e230 点数解锁（你有 $1 点数'],
    [/^Double point gain every time you buy this!\nTimes Bought: (.+)\nCost: (.+)\nEffect: (.+) points$/, '每次购买都会获得双倍点数！\n购买次数：$1\成本：$2\效果：$3 点数'],
    [/^Multiply prestige point gain by 1.5x every time you buy this!\nTimes Bought: (.+)\nCost: (.+)\nEffect: (.+) prestige points$/, '每次购买，声望点增益乘以 1.5 倍！\n购买次数：$1\n成本：$2\n效果：$3 声望点'],
    [/^Mass-produces points around the country! They do cause a bit of pollution, but this an idle game, so you shouldn't care.\nAmount Built: (.+)\nCost: (.+)$/, '全国各地量产点数！ 它们确实会造成一些污染，但这是一款放置游戏，所以你不必在意。\n建造数量：$1\n成本：$2'],
    [/^Opens the door to The Pointverse.\nAmount Opened: (.+)\nCost: (.+)$/, '打开通往 点数宇宙 的大门。\n打开数量：$1\n成本：$2'],
    [/^Speeds up time itself to give you a point multiplier! Now there's some REAL production.\nAmount Started: (.+)\nCost: (.+)\nTime Speed: (.+)$/, '加速时间本身给你一个点数乘数！ 现在有一些真正的生产。\n开始数量：$1\n成本：$2\n时间速度：$3'],
    [/^These store an abundance of points within, so we can withdraw some people's life savings and get rich!\nAmount Established: (.+)\nCost: (.+)$/, '这些里面储存了丰富的点数，所以我们可以提取一些人的毕生积蓄并致富！\n建立数量：$1\n成本：$2'],
    [/^Your top scientists are trying to figure out how to make points artificially...\nAmount Created: (.+)\nCost: (.+)$/, '您的顶尖科学家正试图弄清楚如何人为地制造点数...\n创建数量：$1\n成本：$2'],
    [/^Money does grow on trees, but not during the winter.\nAmount Planted: (.+)\nCost: (.+)$/, '钱确实长在树上，但不会在冬天。\n种植数量：$1\n成本：$2'],
    [/^A nice worker to collect points here and there.\nAmount Hired: (.+)\nCost: (.+)$/, '在这里和那里收集点数的不错的工人。\n雇佣数量：$1\n成本：$2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Shard Generator ([\d\.]+)$/, '碎片生成器 $1'],
    [/^([\d\.]+)e([\d\.,]+) prestige points$/, '$1e$2 声望点'],
    [/^([\d\.,]+) ascension points$/, '$1 转生点'],
    [/^([\d\.]+)e([\d\.,]+) ascension points$/, '$1e$2 转生点'],
    [/^([\d\.,]+) total ascension points$/, '$1 总转生点'],
    [/^([\d\.,]+) prestige points$/, '$1 声望点'],
    [/^([\d\.,]+) boosters$/, '$1 助推器'],
    [/^([\d\.,]+) transcension points$/, '$1 超越点'],
    [/^([\d\.,]+) total transcension points$/, '$1 总超越点'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) ascension points$/, '成本：$1 转生点数'],
    [/^Cost: (.+) prestige points$/, '成本：$1 声望点数'],
    [/^Cost: (.+) boosters$/, '成本：$1 助推器'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) points$/, '成本：$1 \/ $2 点数'],
    [/^Next: (.+) \/ (.+) points$/, '下一个：$1 \/ $2 点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);