import{_ as c,a}from"./crypt-demo2-7RJJjsGz.js";import{_ as h,r as i,o as p,c as u,b as e,a as o,e as t,w as f,f as r}from"./app-skywPVBu.js";const y={},g=r('<h1 id="crypt" tabindex="-1"><a class="header-anchor" href="#crypt" aria-hidden="true">#</a> Crypt</h1><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce" aria-hidden="true">#</a> <strong>introduce</strong></h2><p>What is <code>Crypt</code>?</p><p>In simple words, it&#39;s a two-password-protected safe. No one can open it without the key. The password and the salt in the configuration form the key.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ol><li>If you don’t know how to use this encryption/decryption driver, please read this guide carefully</li><li>Please test it locally to understand it fully before use in the production environment.</li><li>The data loss is 100% caused by configuration change. If data has been stored within Crypt, change configuration won&#39;t re-encrypt data, those data will be inaccessible to Crypt!</li></ol><p><mark>Remind again, please read the document carefully, otherwise the data may be lost！</mark></p></div><h2 id="instruction" tabindex="-1"><a class="header-anchor" href="#instruction" aria-hidden="true">#</a> <strong>Instruction</strong></h2><p>We need to build a new <strong>empty folder</strong> in the driver (network disk) that has been mounted now.</p><p>Then fill in the name of our new empty folder to the <code>Remote path</code> <code>Crypt</code> driver configuration</p><p>E.g:</p><ul><li>Our original driving path was <code>/123</code>, we built a new <code>air</code> empty folder in the &#39;123&#39; directory</li><li>Fill <code>Remote Path</code> option in <code>Crypt</code> config page with <code>/123/air</code></li><li>To encrypt files, you need to upload them to the newly created &quot;Crypt&quot; drive. Encryption will only be applied when files are uploaded to this driver. <ul><li>Encrypted files are stored in <strong><code>remote path</code></strong> , and they can&#39;t be opened normally due to the encryption</li><li>If you want to open them, you need to view them in the <code>Crypt</code> Driver Folder</li></ul></li></ul><h2 id="config-example" tabindex="-1"><a class="header-anchor" href="#config-example" aria-hidden="true">#</a> <strong>Config Example</strong></h2><p>If you don’t know how to configure, you can use the simpler default configuration as follows. The role of each configuration will be explained in detail below</p><p><img src="'+c+'" alt="image-20230721230425597"></p><div class="hint-container danger"><p class="hint-container-title">Please read carefully --- very important</p><p>Once the configuration is set and started using, do not modify it, do not modify it, do not modify it!</p><p>The original <a href="#password"><strong>Password</strong></a> and <a href="#salt"><strong>Salt</strong></a> should be kept in other places. These two options will be encrypted and can&#39;t be reveled after saving.</p><ul><li><strong>If you forget the password before uploading any file, you can modify and re-fill in the password configuration</strong></li></ul><hr><p>If you have not uploaded any file in the Crypt, you may modify the configuration, otherwise do not modify it!!!</p><p>If you have data in Crypt, and changed the configuration, <code>Crypt</code> will try to filter out illegal files/folders, but the illegal data still exist in the remote storage</p><ul><li><strong>Illegal means data that is encrypted by another config</strong></li></ul></div>',14),m={class:"hint-container warning"},_=e("p",{class:"hint-container-title"},"Note",-1),b=e("p",null,[t("There are 5 methods for the encryption combination, (in fact 6 types) Because only the "),e("strong",null,"folder encryption is turned on, the file name is not encrypted"),t(" and the configuration does not take effect (the first one of the example below)")],-1),w=e("code",null,"Off",-1),v=e("code",null,"true",-1),x=e("code",null,"Off",-1),k=e("code",null,"false",-1),I=e("code",null,"Standard",-1),C=e("code",null,"false",-1),T=e("code",null,"Standard",-1),D=e("code",null,"true",-1),F=e("code",null,"Obfuscate",-1),O=e("code",null,"false",-1),W=e("code",null,"Obfuscate",-1),A=e("code",null,"true",-1),E=e("br",null,null,-1),N=e("h3",{id:"filename-encryption",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#filename-encryption","aria-hidden":"true"},"#"),t(),e("i",{class:"fa-solid fa-files",style:{color:"#409eff"}}),t(),e("strong",null,"Filename encryption")],-1),R=e("p",null,"If you don’t understand, you can use the default configuration",-1),B=r("<li><p>1.<strong>The default is <code>off</code> state</strong></p><ul><li>Whether the file name needs to be encrypted, and the file name is encrypted after uploading</li></ul></li><li><p>2.<strong>Standard Encryption</strong></p><ul><li>Standard encryption safety level high<sup>(recommended)</sup></li></ul></li><li><p>3.<strong>Simple Obfuscate</strong></p><ul><li>The security level is very low, but friendly to long file name. Note: for the Chinese file name, special characters will be generated. Some network disk storage may not support them</li></ul></li>",3),P=e("p",null,[t("The left side of the figure below is encrypted "),e("a",{href:"#remote-path"},[e("strong",null,"Remote path")]),t("，On the right is the decrypted 'crypt` driver to view the file")],-1),S=e("strong",null,".bin",-1),z=e("code",null,"crypt",-1),L=r('<p><img src="'+a+'" alt="image-20230721230425597"></p><br><h3 id="directory-name-encryption" tabindex="-1"><a class="header-anchor" href="#directory-name-encryption" aria-hidden="true">#</a> <i class="fa-solid fa-folder-open" style="color:#409eff;"></i> <strong>Directory name encryption</strong></h3><p>default is <code>false</code>, i.e disabled. don&#39;t use it if you don&#39;t understand below description</p><p>When you turn on the folder encryption, you must select a <strong>filename encryption</strong> type. Otherwise, the folder encryption will not take effect</p>',5),M=e("a",{href:"#remote-path"},[e("strong",null,"Remote path")],-1),Q=r('<p><img src="'+a+'" alt="image-20230721230425597"></p><br><h3 id="remote-path" tabindex="-1"><a class="header-anchor" href="#remote-path" aria-hidden="true">#</a> <i class="fa-solid fa-cloud-binary" style="color:#409eff;"></i> <strong>Remote path</strong></h3><p>It is the storage and encrypted file, which can be any driver in the driver that can be mounted</p><br><h3 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> <i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>Password</strong></h3><p>Just literally meaning password</p><h3 id="salt" tabindex="-1"><a class="header-anchor" href="#salt" aria-hidden="true">#</a> <i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>Salt</strong></h3><p>It can be treated as the second password if you don&#39;t understand it</p><br><h3 id="encrypted-suffix" tabindex="-1"><a class="header-anchor" href="#encrypted-suffix" aria-hidden="true">#</a> <strong>Encrypted suffix</strong></h3><p>Advanced options,The default is <code>.bin</code>, the custom must start with<code> .</code>, such as .abc .aaa .Psd.</p><p>If the file name is encrypted, the encryption suffix `will not be used</p><br><h3 id="filename-encoding" tabindex="-1"><a class="header-anchor" href="#filename-encoding" aria-hidden="true">#</a> <strong>Filename encoding</strong></h3><p>Advanced options, non -professionals, please do not modify it. The default is <strong><code>base64</code></strong>, but the options other than <strong><code>base64</code></strong> are not tested. If you encounter problems, you need to solve it yourself.</p>',16),U={href:"https://github.com/alist-org/alist/issues/5109",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/alist-org/alist/issues/5080",target:"_blank",rel:"noopener noreferrer"},J=e("br",null,null,-1),V=e("h2",{id:"advanced-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#advanced-usage","aria-hidden":"true"},"#"),t(),e("strong",null,"Advanced usage")],-1),j=e("p",null,[t("Advanced usage is only applicable to those who know about "),e("strong",null,[e("code",null,"rclone")])],-1),Y=e("strong",null,[e("code",null,"rclone")],-1),Z={href:"https://rclone.org/crypt",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"rclone crypt document",-1),K=e("p",null,[t("Note: "),e("code",null,"Alist Crypt"),t(" used "),e("code",null,"filename_encoding = base64"),t(" in default. If you want to use Rclone, please config it in the advanced config. (Reason: more friendly to long filename)")],-1),G=e("p",null,"Since Alist does not consider any case-insensitive internally, you may encounter problems when remote storage is case-insensitive. e.g.: use alist local driver on Windows, then use Crypt on it.",-1),X=e("br",null,null,-1),$=e("h2",{id:"precautions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#precautions","aria-hidden":"true"},"#"),t(),e("strong",null,"Precautions")],-1),ee=e("br",null,null,-1),te=e("h2",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(),e("strong",null,"The default download method used")],-1);function oe(ne,ie){const n=i("Badge"),l=i("ExternalLinkIcon"),d=i("RouterLink"),s=i("Mermaid");return p(),u("div",null,[g,e("div",m,[_,b,e("ol",null,[e("li",null,[o(n,{text:"invalid",color:"red",vertical:"middle"}),t(" Filename "),w,t("，Directory "),v]),e("li",null,[o(n,{text:"valid",type:"tip",vertical:"middle"}),t(" Filename "),x,t("，Directory "),k]),e("li",null,[o(n,{text:"valid",type:"tip",vertical:"middle"}),t(" Filename "),I,t("，Directory "),C]),e("li",null,[o(n,{text:"valid",type:"tip",vertical:"middle"}),t(" Filename "),T,t("，Directory "),D]),e("li",null,[o(n,{text:"valid",type:"tip",vertical:"middle"}),t(" Filename "),F,t("，Directory "),O]),e("li",null,[o(n,{text:"valid",type:"tip",vertical:"middle"}),t(" Filename "),W,t("，Directory "),A])])]),E,N,R,e("ul",null,[B,e("li",null,[P,e("ul",null,[e("li",null,[t("If not enabled "),o(n,{text:"Filename",type:"tip",vertical:"middle"}),t(" encryption，It will be like "),o(n,{text:"Upper left corner pic",color:"rgb(216,100,69)",vertical:"middle"}),t(" A new encrypted suffix is added behind the source file（xxxxx.xxx "),S,t(" ）(The suffix name can be customized)")]),e("li",null,[t("If you enabled "),o(n,{text:"Filename",type:"tip",vertical:"middle"}),t(" encryption，It will be like "),o(n,{text:"Lower left corner pic",color:"rgb(78,130,184)",vertical:"middle"}),t(" In this way, the file name is also confused with encryption, no suffix and the original file name，others can't know what it is, but it can be viewed in "),z,t("（"),o(n,{text:"The folder displayed on the right",color:"rgb(0.0.0.0)",vertical:"middle"}),t("）")])])])]),L,e("ul",null,[e("li",null,[t("The left side of the figure below is encrypted "),M,t("，On the right is the decrypted 'crypt` driver to view the file "),e("ul",null,[e("li",null,[t("If disabled "),o(n,{text:"Directory",type:"tip",vertical:"middle"}),t(" encryption，It will be like"),o(n,{text:"Upper left corner pic",color:"rgb(216,100,69)",vertical:"middle"}),t(" No change to folder name")]),e("li",null,[t("If enabled "),o(n,{text:"Directory",type:"tip",vertical:"middle"}),t(" encryption，It will be displayed"),o(n,{text:"Lower left corner pic",color:"rgb(78,130,184)",vertical:"middle"}),t(" folder name is encrypted")])])])]),Q,e("p",null,[t("-Dy reference "),e("a",U,[t("#5109"),o(l)]),t("，"),e("a",H,[t("#5080"),o(l)])]),J,V,j,e("p",null,[t("If you know the "),Y,t(" very well, you can check 👉 "),e("a",Z,[q,o(l)]),t(" Currently fully compatible")]),K,G,X,$,e("p",null,[t("When starting alist, I found that the Crypt prompts errors because Crypt can not find the relevant path when starting, You can fill in the Crypt "),o(d,{to:"/guide/drivers/common.html#order"},{default:f(()=>[t("order")]),_:1}),t(" to make Crypt start slowly")]),ee,te,o(s,{id:"mermaid-308",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="})])}const ae=h(y,[["render",oe],["__file","Crypt.html.vue"]]);export{ae as default};
