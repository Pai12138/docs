import{_ as r,a as u,b as p}from"./alias-2-kYv_1DME.js";import{_ as v,r as s,o as b,c as m,a as o,w as i,e as l,b as e,f as d}from"./app-skywPVBu.js";const h={},g=d('<h1 id="alias别名" tabindex="-1"><a class="header-anchor" href="#alias别名" aria-hidden="true">#</a> alias别名</h1><p>我们先看一张示意图</p><p><img src="'+r+`" alt="alias"></p><p>我们看到两个不同的文件夹合并在一个文件夹里面了，名字一样的文件文件夹也都合并在一起了，独有的单独显示了</p><ul><li><p>例1 <code>riluo.jpg</code> 是本地1 独有的，在上面显示了</p></li><li><p>例2 两个文件夹都有<code>video</code>文件夹，但是里面的内容也会进行合并，子文件夹也同样适用于<code>同名合并</code>的展示规则</p><ul><li>两个文件夹分别有两个视频，但是有一个是同名的，最后根据 <code>同名合并</code> 的展示规则 合并后 变成了<code>3</code>个文件进行展示</li></ul></li></ul><p><code>别名-alias</code>是什么？ <code>别名-alias</code>是路径合并的功能</p><p>除了 <strong><code>下载预览(只读)</code></strong> 操作之外 <sup>(复制,删除,重命名,离线下载,上传)</sup> 均不可以</p><p>举个例子：云盘账号1、云盘账号2 里面均有<code>电影</code>这个文件夹，但内容未必(全部)重合</p><p><strong><code>以前(虚拟路径)</code></strong>：只能分别挂载到两个不同的路径上（云盘1/电影 ，云盘2/电影）或者（电影\\云盘1，电影\\云盘2）<br><strong><code>现在(alias)</code></strong>：提供一个聚合的文件夹 （电影）里面可以同时包含云盘1和云盘2的内容</p><p>展示时文件夹内容规则如下</p><ol><li>同名合并：文件(夹)一样的自动合并成一个</li><li>同名优先：访问资源时，每次固定访问填写路径时顶部(靠前)的那个路径文件(夹) <ul><li>若同名文件合并后，点击 <strong><code>播放，下载</code></strong> 时优先调用填写 <code>Paths</code> 时最靠前使用302模式路径的文件</li></ul></li></ol><p>下面解释一下 <strong><code>同名优先²</code></strong> 访问规则，强烈建议查看个举例都查看</p><h2 id="填写方式" tabindex="-1"><a class="header-anchor" href="#填写方式" aria-hidden="true">#</a> <strong>填写方式</strong></h2><p>填写方式有两种</p><ol><li><p>第一种是只可以填写子文件夹路径并且最后结尾时必须同名文件夹才可以，不推荐使用 ❌</p><ul><li><p><code>路径</code>填写示例：</p><div class="language-path line-numbers-mode" data-ext="path"><pre class="language-path"><code>/目录1/目录a
/目录2/目录b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>第二种是可以直接挂载根文件夹路径，利用<code>重命名</code>的方式，强烈推荐使用 ✔️</p><ul><li><p><code>路径</code>填写示例：</p><div class="language-path line-numbers-mode" data-ext="path"><pre class="language-path"><code>#示例1 直接写根文件夹
合并显示:/目录1
合并显示:/目录2

#示例2 挂载不同路径文件夹进行合并
合并显示:/目录1/本地测试233
合并显示:/目录2/视频/电视剧
合并显示:/目录2/电视/国产电视剧/某某台
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>根据第二种这样我们可以将不同的文件夹进行<code>合并显示</code>，方便快捷</p>`,16),_=e("p",null,"例1、 根据下面路径填写访问(302模式有优先权)",-1),x=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`本地:/本地测试/本地1
本地:/本地测试/本地2
本地:/本地测试/本地3
本地:/本地测试/本地4
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("ul",null,[e("li",null,[e("p",null,[l("1，一个视频 1 2 3 4 都有的话每次访问的是 "),e("code",null,"1")]),e("ul",null,[e("li",null,[l("如果1 3 4 使用的本地代理，2 使用的"),e("code",null,"302"),l("，优先调用 2")])])]),e("li",null,[e("p",null,[l("2，一个视频 3 4 有 那么每次访问的都是"),e("code",null,"3")]),e("ul",null,[e("li",null,[l("如果 3 使用的本地代理，4 使用的"),e("code",null,"302"),l("，优先调用 4")])])])],-1),k=e("p",null,"例2、根据下面的路径填写访问(302模式有优先权)",-1),V=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`本地:/本地测试/本地4
本地:/本地测试/本地3
本地:/本地测试/本地2
本地:/本地测试/本地1
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("ul",null,[e("li",null,[e("p",null,[l("1，一个视频 1 2 3 4 都有的话每次访问的是 "),e("code",null,"4")]),e("ul",null,[e("li",null,[l("如果1 3 4 使用的本地代理，2 使用的"),e("code",null,"302"),l("，优先调用 2")])])]),e("li",null,[e("p",null,[l("2，一个视频 2 4 有 那么每次访问的都是"),e("code",null,"4")]),e("ul",null,[e("li",null,[l("如果 4 使用的本地代理，2 使用的"),e("code",null,"302"),l("，优先调用 2")])])])],-1),y=e("p",null,"例3、根据下面的路径填写访问(302模式有优先权)",-1),W=e("p",null,"当然了不限于只有2个文件夹，根据个人需求来写即可",-1),A=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`本地测试:/本地1/video
本地测试:/本地2/video
测试其他:/测试3/images
测试其他:/测试4/video/电视
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("ul",null,[e("li",null,[l("本地1 本地2 合并在一起了 "),e("ul",null,[e("li",null,[l("如果2 使用的本地代理，1 使用的"),e("code",null,"302"),l("，优先调用 1")])])]),e("li",null,[l("测试3 测试4 合并在一起了 "),e("ul",null,[e("li",null,[l("如果3 使用的本地代理，4 使用的"),e("code",null,"302"),l("，优先调用 4")])])]),e("li",null,"以上两种情况会出现两个不同的文件夹来展示，会如下展示，不会互相干扰")],-1),q=e("p",null,[e("img",{src:u,alt:"alias"})],-1),N=d('<h3 id="使用的下载方式" tabindex="-1"><a class="header-anchor" href="#使用的下载方式" aria-hidden="true">#</a> <strong>使用的下载方式</strong></h3><p>​ 添加 <strong><code>别名-alias</code></strong> 时 <code>Web代理</code> 和 <code>Webdav策略</code> 默认不修改的情况下 Paths路径填写的存储路径可以 <code>302</code>，<code>本地代理</code>，<code>下载代理URL</code>，三种模式混合播放可以进行混合播放</p><p>​ 如果你勾选了<code>Web代理</code> ，Paths路径填写的存储 如果有302模式播放的 到时候都会进行中转(本地代理模式)播放，变成代理模式，Webdav策略如果也进行了改动也会进行变化</p><p>​ 当然，是否选择更换模式您自己进选择</p><h3 id="如果你不知道你添加的云盘是什么方式怎么办" tabindex="-1"><a class="header-anchor" href="#如果你不知道你添加的云盘是什么方式怎么办" aria-hidden="true">#</a> <strong>如果你不知道你添加的云盘是什么方式怎么办?</strong></h3><ol><li><p>可以前往文档的相对应的文档最底部查看，有一份流程图说明</p><ul><li>如果有302的就是默认使用302方式，如果只有本地代理和下载代理URL默认的就是使用本地代理，前提是你没有进行手动选择</li></ul></li><li><p>可以前往添加存储时进行查看，选择对应的存储进行查看，例如我们查看一下阿里云和115分别是什么 方式</p><ul><li><p>从下图中看到，阿里云盘有 <code>web代理</code>选择，<code>webdav策略</code>默认是302，可以判断出阿里云盘默认使用的是302方式</p></li><li><p>从下图中看到，115网盘没有 <code>web代理</code>选择，<code>webdav策略</code>默认是本地代理，可以判断出115网盘默认使用的是本地代理方式</p></li><li><p><img src="'+p+'" alt="alias"></p></li></ul></li></ol><h3 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> <strong>其他说明</strong></h3><blockquote><p>如果你是使用的<code>Windows</code>，会出现如下情况，有大小写不同的文件夹也会进行二次生成<br> 例如本地1，本地2 分别有 <code>video</code> 小写的v ，文件夹 OneDrive 有一个大写的 V <code>Video</code> 文件夹<br> 然后会生成一个小写的 video文件夹里面只有 <code>本地1，本地2</code> 两个的文件夹所合并的文件<br> 同时 大写的 <code>Video</code> 里面 会集合三个文件夹的文件</p></blockquote><p>这是因为Windows 大小写不敏感，video和Video会被认为是同一个文件夹,你换成Linux或者Mac就不会有这个问题了</p><blockquote><p>暂时不支持别名进行负载均衡（后期若支持了这里会进行文档修改，如果没有修改就是还不支持）</p></blockquote><br><h3 id="代理range" tabindex="-1"><a class="header-anchor" href="#代理range" aria-hidden="true">#</a> <strong>代理range</strong></h3><p>需要先启用 <code>Web代理</code> 或者 <code>Webdav本地代理</code> 才会生效</p>',13),B=e("code",null,"别名",-1),E=e("code",null,"中国移动云盘",-1),P=e("code",null,"AList V3",-1),R={href:"https://github.com/alist-org/alist/pull/6496#issue-2309839607",target:"_blank",rel:"noopener noreferrer"},T=d(`<br><h3 id="同名保护" tabindex="-1"><a class="header-anchor" href="#同名保护" aria-hidden="true">#</a> <strong>同名保护</strong></h3><p><sup>&gt;v3.34.0</sup>现在别名支持 <code>删除</code>、<code>重命名</code>两个操作，<mark>默认开启</mark></p><p>别名中可能会出现文件名一样的文件，对于文件夹名一致的文件夹，在<code>同名保护</code>开启状态下无法删除或者重命名</p><hr><details class="hint-container details"><summary>同名保护使用举例子</summary><p>我们分别将 <code>a</code>和<code>b</code>两个文件夹填写到别名选项中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a/          b/                  alias
a/1.png     b/1.png             alias/1.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ----&gt;   alias/3.mp4
a/4.mkv     b/4.mkv     ----&gt;   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin ---&gt; 根据规则别名目录靠前的，不同文件夹中不同名的文件靠前
                                alias/6.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们在 <code>同名保护</code> 开启状态下把同名文件 <code>1.png</code> 进行重名名或者删除会提示如下信息在右上角</p><div style="color:red;display:flex;justify-content:center;align-items:center;border:3px solid red;"><ul style="list-style-type:none;"><li><i class="fa-solid fa-circle-exclamation"> </i><b>same-name files cannot be Rename / 同名文件无法重命名</b></li><br><li><i class="fa-solid fa-circle-exclamation"> </i><b>same-name files cannot be Delete / 同名文件无法删除</b></li></ul></div><p>如果我们把 <code>同名保护</code> 选项关闭，将 <code>a/1.png</code>改成 <code>a/11.png</code> 会变成如下展示</p><ul><li>因为a/b两个文件夹都有一样的文件，<code>重命名</code>和<code>下载</code>一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a/          b/                  alias
a/1.png     b/1.png             alias/11.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ----&gt;   alias/3.mp4
a/4.mkv     b/4.mkv     ----&gt;   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin
                                alias/1.png  ---&gt; 因为b文件夹靠后，所以文件列表展示页靠后
                                alias/6.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实在不懂 可以自行本地测试一下再进行生产环境实装</p></details>`,6);function j(C,D){const c=s("Tabs"),t=s("ExternalLinkIcon");return b(),m("div",null,[g,o(c,{id:"105",data:[{id:"例1"},{id:"例2"},{id:"例3"}],"tab-id":"alias"},{title0:i(({value:n,isActive:a})=>[l("例1")]),title1:i(({value:n,isActive:a})=>[l("例2")]),title2:i(({value:n,isActive:a})=>[l("例3")]),tab0:i(({value:n,isActive:a})=>[_,x,f]),tab1:i(({value:n,isActive:a})=>[k,V,w]),tab2:i(({value:n,isActive:a})=>[y,W,A,L,q]),_:1}),N,e("ul",null,[e("li",null,[l("目前仅适用于："),B,l("、"),E,l("、"),P,e("ul",null,[e("li",null,[l("具体功能说明："),e("strong",null,[e("a",R,[l("https://github.com/alist-org/alist/pull/6496#issue-2309839607"),o(t)])])])])])]),T])}const M=v(h,[["render",j],["__file","alias.html.vue"]]);export{M as default};
