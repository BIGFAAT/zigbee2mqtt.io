"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[114],{89025:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>s,data:()=>i});var a=t(6254);const o={},s=(0,t(39583).A)(o,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[10]||(n[10]=(0,a.Lk)("h1",{id:"livolo-ti0001-cover",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#livolo-ti0001-cover"},[(0,a.Lk)("span",null,"Livolo TI0001-cover")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TI0001-cover")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Livolo"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Livolo")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee roller blind motor")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), options, moving, linkquality")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-cover.png",alt:"Livolo TI0001-cover"})])],-1))])]),n[11]||(n[11]=(0,a.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,a.Lk)("span",null,"Notes")])],-1)),n[12]||(n[12]=(0,a.Lk)("h3",{id:"important",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#important"},[(0,a.Lk)("span",null,"Important")])],-1)),(0,a.Lk)("p",null,[n[8]||(n[8]=(0,a.eW)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file ")),(0,a.bF)(t,{to:"/guide/configuration/"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("data/configuration.yaml")]))),_:1}),n[9]||(n[9]=(0,a.eW)(" must contain the following:"))]),n[13]||(n[13]=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the buttons &quot;down&quot; and &quot;settings&quot; together for 3 seconds and it blinks red and blue in pairing mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="options-composite" tabindex="-1"><a class="header-anchor" href="#options-composite"><span>Options (composite)</span></a></h3><p>Motor options. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;options&quot;: {&quot;motor_speed&quot;: VALUE, &quot;motor_direction&quot;: VALUE}}</code></p><ul><li><code>motor_speed</code> (numeric): Motor speed min value is 20, max value is 40, unit is rpm</li><li><code>motor_direction</code> (enum): Motor direction allowed values: <code>FORWARD</code>, <code>REVERSE</code></li></ul><h3 id="moving-binary" tabindex="-1"><a class="header-anchor" href="#moving-binary"><span>Moving (binary)</span></a></h3><p>Motor is moving. Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> moving is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15))])}]]),i=JSON.parse('{"path":"/devices/TI0001-cover.html","title":"Livolo TI0001-cover control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-cover control via MQTT","description":"Integrate your Livolo TI0001-cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-30T20:29:35.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Options (composite)","slug":"options-composite","link":"#options-composite","children":[]},{"level":3,"title":"Moving (binary)","slug":"moving-binary","link":"#moving-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733426008000},"filePathRelative":"devices/TI0001-cover.md"}')}}]);