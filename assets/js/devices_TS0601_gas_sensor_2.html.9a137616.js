"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86302],{27921:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>i});var s=a(6254);const l={},o=(0,a(39583).A)(l,[["render",function(e,t){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[7]||(t[7]=(0,s.Lk)("h1",{id:"tuya-ts0601-gas-sensor-2",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-gas-sensor-2"},[(0,s.Lk)("span",null,"Tuya TS0601_gas_sensor_2")])],-1)),(0,s.Lk)("table",null,[t[6]||(t[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"TS0601_gas_sensor_2")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Gas sensor")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"gas, gas_value, self_test, self_test_result, silence, alarm_ringtone, alarm_time, preheat, linkquality")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_gas_sensor_2.png",alt:"Tuya TS0601_gas_sensor_2"})])],-1))])]),t[8]||(t[8]=(0,s.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary"><span>Gas (binary)</span></a></h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="gas-value-numeric" tabindex="-1"><a class="header-anchor" href="#gas-value-numeric"><span>Gas value (numeric)</span></a></h3><p>Measured gas concentration. Value can be found in the published state on the <code>gas_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>LEL</code>.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary"><span>Self test (binary)</span></a></h3><p>Indicates whether the device is being self-tested. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self test is ON, if <code>false</code> OFF.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum"><span>Self test result (enum)</span></a></h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary"><span>Silence (binary)</span></a></h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="alarm-ringtone-enum" tabindex="-1"><a class="header-anchor" href="#alarm-ringtone-enum"><span>Alarm ringtone (enum)</span></a></h3><p>Ringtone of the alarm. Value can be found in the published state on the <code>alarm_ringtone</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_ringtone&quot;: NEW_VALUE}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>melody_3</code>, <code>melody_4</code>, <code>melody_5</code>.</p><h3 id="alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-time-numeric"><span>Alarm time (numeric)</span></a></h3><p>Alarm time. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>s</code>.</p><h3 id="preheat-binary" tabindex="-1"><a class="header-anchor" href="#preheat-binary"><span>Preheat (binary)</span></a></h3><p>Indicates sensor preheat is active. Value can be found in the published state on the <code>preheat</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> preheat is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19))])}]]),i=JSON.parse('{"path":"/devices/TS0601_gas_sensor_2.html","title":"Tuya TS0601_gas_sensor_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_gas_sensor_2 control via MQTT","description":"Integrate your Tuya TS0601_gas_sensor_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T08:59:10.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Gas value (numeric)","slug":"gas-value-numeric","link":"#gas-value-numeric","children":[]},{"level":3,"title":"Self test (binary)","slug":"self-test-binary","link":"#self-test-binary","children":[]},{"level":3,"title":"Self test result (enum)","slug":"self-test-result-enum","link":"#self-test-result-enum","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Alarm ringtone (enum)","slug":"alarm-ringtone-enum","link":"#alarm-ringtone-enum","children":[]},{"level":3,"title":"Alarm time (numeric)","slug":"alarm-time-numeric","link":"#alarm-time-numeric","children":[]},{"level":3,"title":"Preheat (binary)","slug":"preheat-binary","link":"#preheat-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733426008000},"filePathRelative":"devices/TS0601_gas_sensor_2.md"}')}}]);