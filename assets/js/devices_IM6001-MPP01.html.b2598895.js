"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49566],{6330:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>m,data:()=>b});var i=a(86904);const n=(0,i.Lk)("h1",{id:"smartthings-im6001-mpp01",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#smartthings-im6001-mpp01"},[(0,i.Lk)("span",null,"SmartThings IM6001-MPP01")])],-1),r=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),o=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"IM6001-MPP01")],-1),s=(0,i.Lk)("td",null,"Vendor",-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Multipurpose sensor (2018 model)")],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"temperature, contact, battery_low, tamper, battery, moving, x_axis, y_axis, z_axis, linkquality")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/IM6001-MPP01.png",alt:"SmartThings IM6001-MPP01"})])],-1),u=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>When pairing, make sure to keep the sensor awake for 20 seconds by opening and closing the contact every second. Reset Procedure - https://www.youtube.com/watch?v=yT3iVHuO7Qk</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4),h=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="moving-binary" tabindex="-1"><a class="header-anchor" href="#moving-binary"><span>Moving (binary)</span></a></h3><p>Indicates if the device is moving. Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> moving is ON, if <code>false</code> OFF.</p><h3 id="x-axis-numeric" tabindex="-1"><a class="header-anchor" href="#x-axis-numeric"><span>X axis (numeric)</span></a></h3><p>Accelerometer X value. Value can be found in the published state on the <code>x_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="y-axis-numeric" tabindex="-1"><a class="header-anchor" href="#y-axis-numeric"><span>Y axis (numeric)</span></a></h3><p>Accelerometer Y value. Value can be found in the published state on the <code>y_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="z-axis-numeric" tabindex="-1"><a class="header-anchor" href="#z-axis-numeric"><span>Z axis (numeric)</span></a></h3><p>Accelerometer Z value. Value can be found in the published state on the <code>z_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),p={},m=(0,a(22652).A)(p,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n,(0,i.Lk)("table",null,[r,(0,i.Lk)("tbody",null,[o,(0,i.Lk)("tr",null,[s,(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=SmartThings"},{default:(0,i.k6)((()=>[(0,i.eW)("SmartThings")])),_:1})])]),l,c,d])]),u,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),b=JSON.parse('{"path":"/devices/IM6001-MPP01.html","title":"SmartThings IM6001-MPP01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SmartThings IM6001-MPP01 control via MQTT","description":"Integrate your SmartThings IM6001-MPP01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Moving (binary)","slug":"moving-binary","link":"#moving-binary","children":[]},{"level":3,"title":"X axis (numeric)","slug":"x-axis-numeric","link":"#x-axis-numeric","children":[]},{"level":3,"title":"Y axis (numeric)","slug":"y-axis-numeric","link":"#y-axis-numeric","children":[]},{"level":3,"title":"Z axis (numeric)","slug":"z-axis-numeric","link":"#z-axis-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724944653000},"filePathRelative":"devices/IM6001-MPP01.md"}')}}]);