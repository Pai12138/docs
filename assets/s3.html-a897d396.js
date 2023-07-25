import{_ as u,a as p,b as _,c as f,d as b,e as m,f as g,g as k,h as w,i as v,j as y,k as S}from"./sc-a0e729d8.js";import{_ as x,r as a,o as O,c as C,a as o,w as s,b as e,e as t,f as A}from"./app-e10f3fc0.js";const B={},E=A('<h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3" aria-hidden="true">#</a> S3</h1><p>S3 object storage protocols, such as COS, OSS, B2, etc.</p><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> <strong>BucKet</strong></h3><p>bucket name</p><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> <strong>Endpoint</strong></h3><p>Endpoint address (If you don’t know, you can read the official documents below)</p><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> <strong>Region</strong></h3><p>area (If you don’t know, you can read the official documents below)</p><h3 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> <strong>Access key id</strong></h3><p>Access key id</p><h3 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> <strong>Secret access key</strong></h3><p>Secret access key</p><h2 id="session-token" tabindex="-1"><a class="header-anchor" href="#session-token" aria-hidden="true">#</a> <strong>Session token</strong></h2><p>Session token，Normally, the three-segment token needs to be used, and the two-segment token does not need to fill in this option.</p><h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> <strong>Root folder path</strong></h3><p>Root path, if not filled, it defaults to the root directory.</p><h3 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> <strong>Custom Host</strong></h3><p>Custom cdn acceleration domain name</p><h3 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> <strong>Sign url expire</strong></h3><p>The validity period of the signed download address is 4 hours by default. If a custom accelerated domain name is used, this option is invalid.</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> <strong>Placeholder</strong></h3><p>The name of placeholder file.</p><h3 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> <strong>Force path style</strong></h3><p>If enable ForcePathStyle, usually needed for minio.</p><h3 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> <strong>List object version</strong></h3><p>Refer to s3 sdk documents.</p><h2 id="add-object-storage-examples-and-official-documents" tabindex="-1"><a class="header-anchor" href="#add-object-storage-examples-and-official-documents" aria-hidden="true">#</a> <strong>Add object storage examples and official documents</strong></h2>',27),R={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"Alibaba Cloud OSS Official Website",-1),j={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Comparison Table of Endpoints in Different Regions of OSS under Public Cloud",-1),D=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,[t("Alist needs to skip "),e("code",null,"referer"),t(" to mount "),e("strong",null,"Alibaba Cloud Disk"),t(". If you do not allow "),e("code",null,"referer"),t(" to be empty in anti-leech, it will not work, because Alibaba Cloud Disk uses Alibaba Cloud OSS (in Beijing area)")]),e("p",null,[t("In fact, the "),e("code",null,"Region|Region"),t(" option can be written as "),e("code",null,"Endpoint"),t(", but for the sake of specification, let’s write it according to the comparison table.:::")])],-1),W=e("p",null,"Fill in example:",-1),F=e("p",null,[e("img",{src:u,alt:"s3"})],-1),U=e("p",null,null,-1),z={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},K=e("strong",null,"Tencent Cloud COS Official Website",-1),L={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"Collection Table of Endpoints in Each Region of COS under the Public Cloud",-1),q=e("p",null,"Fill in example:",-1),Q=e("p",null,[e("img",{src:p,alt:"s3"})],-1),H={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},P=e("strong",null,"Tianyi Cloud OOS Official Website",-1),V={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},Y=e("strong",null,"Comparison Table of Endpoints of OOS Regions under Public Cloud",-1),G=e("p",null,"Fill in example:",-1),M=e("p",null,[e("img",{src:_,alt:"s3"})],-1),X=e("p",null,null,-1),J={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},Z=e("strong",null,"Baidu Cloud BOS official website",-1),$={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#Setrefererwhitelist",target:"_blank",rel:"noopener noreferrer"},ee=e("strong",null,"Self-configure Bucket’s Referer whitelist permissions",-1),te={href:"https://intl.cloud.baidu.com/doc/BOS/s/xjwvyq9l4-en",target:"_blank",rel:"noopener noreferrer"},oe=e("strong",null,"comparison table of Region and Endpoint of BOS under public cloud",-1),ne=e("strong",null,"Endpoint comparison table compatible with AWS S3",-1),se={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},le=e("strong",null,"Click to view details",-1),ie=e("p",null,"Fill in example:",-1),re=e("p",null,[e("img",{src:f,alt:"s3"})],-1),ae=e("p",null,null,-1),ce={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},de=e("strong",null,"Qiniu Cloud Kodo official website",-1),he=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),ue={href:"https://developer",target:"_blank",rel:"noopener noreferrer"},pe=e("p",null,"Fill in example:",-1),_e=e("p",null,[e("img",{src:b,alt:"s3"})],-1),fe=e("p",null,null,-1),be={href:"https://www.huaweicloud.com/intl/en-us/",target:"_blank",rel:"noopener noreferrer"},me=e("strong",null,"HUAWEI CLOUD OBS Official Website",-1),ge={href:"https://developer.huaweicloud.com/intl/en-us/endpoint",target:"_blank",rel:"noopener noreferrer"},ke=e("strong",null,"Check the Region and Endpoint comparison table of OBS under the public cloud",-1),we={href:"https://console.huaweicloud.com/iam/?region=cn-north-4#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},ve=e("p",null,"Fill in example:",-1),ye=e("p",null,[e("img",{src:m,alt:"s3"})],-1),Se={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},xe=e("strong",null,"JD CLOUD OBS Official Website",-1),Oe={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},Ae=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Be=e("p",null,"Fill in example:",-1),Ee=e("p",null,[e("img",{src:g,alt:"s3"})],-1),Re={href:"https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&v=new",target:"_blank",rel:"noopener noreferrer"},Te=e("strong",null,"139 CLOUD EOS Official Website",-1),je=e("p",null,"need to precharge 100 to open",-1),Ie={href:"https://ecloud.10086.cn/op-help-center/doc/article/48082",target:"_blank",rel:"noopener noreferrer"},De=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),We=e("p",null,"Fill in example:",-1),Fe=e("p",null,[e("img",{src:k,alt:"s3"})],-1),Ue={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},ze=e("strong",null,"Yupyun USS Official Website",-1),Ke={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},Le=e("strong",null,"Amazon S3 Official Website",-1),Ne=e("p",null,"The endpoint URL contains the name of the region where the bucket is located",-1),qe=e("p",null,[t("Example "),e("sup",null,"1"),t(", if your bucket is in the US East (Ohio) region")],-1),Qe=e("blockquote",null,[e("p",null,[t("Then the format of the Endpoint URL is "),e("strong",null,[e("code",null,"s3.us-east-2.amazonaws.com/your-bucket-name")])]),e("p",null,[t("Region parameter: "),e("strong",null,[e("code",null,"us-east-2")])]),e("p",null,[t("Bucket name: "),e("strong",null,[e("code",null,"your-bucket-name")]),t(" (your own bucket name)")])],-1),He=e("p",null,[t("Example"),e("sup",null,"2"),t(", my storage bucket is "),e("code",null,"Tokyo"),t(", and the name of the storage bucket is "),e("code",null,"cdn-aw"),t(", then the complete parameter filling is as follows")],-1),Pe=e("strong",null,"Endpoint",-1),Ve={href:"http://s3.ap-northeast-1.amazonaws.com",target:"_blank",rel:"noopener noreferrer"},Ye=e("li",null,[e("strong",null,"Region"),t(": ap-northeast-1")],-1),Ge=e("li",null,[e("strong",null,"Bucket Name"),t(": cdn-aw")],-1),Me=e("p",null,"Let's take a look at the complete parameter filling example",-1),Xe=e("p",null,"Fill in example:",-1),Je=e("p",null,[e("img",{src:w,alt:"s3"})],-1),Ze={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},$e=e("strong",null,"cloudflare R2 Official Website",-1),et=e("p",null,[e("strong",null,"Endpoint"),t(" ：The S3 endpoint is available via the "),e("strong",null,[e("code",null,"https://<ACCOUNT_ID>.r2.cloudflarestorage.com")]),t(" endpoint.")],-1),tt=e("p",null,[e("strong",null,[e("code",null,"ACCOUNT_ID")]),t(" ：This account ID can be seen everywhere, and the simplest is the position at the top of the browser. The string of IDs behind the website link is your account ID.")],-1),ot=e("p",null,"填写示例：",-1),nt=e("p",null,[e("img",{src:v,alt:"s3"})],-1),st={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},lt=e("strong",null,"B2 Official Website",-1),it=e("p",null,[t("The full name is "),e("strong",null,[e("code",null,"Backblaze")]),t(", no verification information is required, and it is said that the first 10G is free.")],-1),rt=e("p",null,"Fill in example:",-1),at=e("p",null,[e("img",{src:y,alt:"s3"})],-1),ct={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},dt=e("strong",null,"Scaleway Official Website",-1),ht=e("p",null,"Card required, verification information",-1),ut={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},pt=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),_t=e("p",null,"Fill in example:",-1),ft=e("p",null,[e("img",{src:S,alt:"s3"})],-1),bt=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(),e("strong",null,"The default download method used")],-1);function mt(gt,kt){const n=a("ExternalLinkIcon"),c=a("RouterLink"),d=a("Tabs"),h=a("Mermaid");return O(),C("div",null,[E,o(d,{id:"81",data:[{title:"Alibaba"},{title:"Tencent"},{title:"Tianyi"},{title:"Baidu"},{title:"Qiniu"},{title:"Huawei"},{title:"JD"},{title:"139"},{title:"upyun"},{title:"Amazon"},{title:"R2"},{title:"B2"},{title:"scaleway"}],"tab-id":"S3"},{tab0:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",R,[T,o(n)])]),e("p",null,[e("a",j,[I,o(n)])]),D,W,F,U]),tab1:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",z,[K,o(n)])]),e("p",null,[e("a",L,[N,o(n)])]),q,Q]),tab2:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",H,[P,o(n)])]),e("p",null,[e("a",V,[Y,o(n)])]),G,M,X]),tab3:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",J,[Z,o(n)])]),e("p",null,[e("a",$,[ee,o(n)])]),e("p",null,[e("a",te,[oe,o(n)])]),e("p",null,[ne,e("a",se,[le,o(n)])]),ie,re,ae]),tab4:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",ce,[de,o(n)])]),e("p",null,[t("["),he,t("]("),e("a",ue,[t("https://developer"),o(n)]),t(" .qiniu.com/kodo/4088/s3-access-domainname)")]),pe,_e,fe]),tab5:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",be,[me,o(n)])]),e("p",null,[e("a",ge,[ke,o(n)]),t(", the secret key AK/SK"),e("a",we,[t("acquire"),o(n)]),t(" to set by yourself.")]),ve,ye]),tab6:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Se,[xe,o(n)])]),e("p",null,[t("Advantages: "),e("a",Oe,[t("free 10G"),o(n)]),t(", support IPV6 Disadvantages: need to precharge 100 to open，However, after the pre-deposit is completed, the object storage is activated, and the pre-deposited amount can still be used after withdrawal.")]),e("p",null,[e("a",Ce,[Ae,o(n)])]),Be,Ee]),tab7:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Re,[Te,o(n)])]),je,e("p",null,[e("a",Ie,[De,o(n)])]),We,Fe]),tab8:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ue,[ze,o(n)]),t(":"),o(c,{to:"/guide/drivers/uss.html"},{default:s(()=>[t("Click here to configure USS")]),_:1})])]),tab9:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ke,[Le,o(n)])]),Ne,qe,Qe,He,e("blockquote",null,[e("ol",null,[e("li",null,[Pe,t(": "),e("a",Ve,[t("s3.ap-northeast-1.amazonaws.com"),o(n)])]),Ye,Ge])]),Me,Xe,Je]),tab10:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ze,[$e,o(n)])]),et,tt,ot,nt]),tab11:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",st,[lt,o(n)])]),it,rt,at]),tab12:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",ct,[dt,o(n)])]),ht,e("p",null,[e("a",ut,[pt,o(n)])]),_t,ft]),_:1}),bt,o(h,{id:"mermaid-336",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const yt=x(B,[["render",mt],["__file","s3.html.vue"]]);export{yt as default};
